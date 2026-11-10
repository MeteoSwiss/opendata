import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * StationFilesLatencyMonitor
 *
 * Misst die Latenz der «Files per Station» (10-Minuten-Werte, *_t_now.csv) der
 * Kollektion ch.meteoschweiz.ogd-smn im Browser.
 *
 * Pro neuer Dateiversion (erkannt via Last-Modified) wird festgehalten:
 *   - newest   jüngster reference_timestamp in der Datei (UTC)
 *   - lm       Last-Modified des Servers
 *   - det      Zeitpunkt der Erkennung im Browser
 *   Latenz = lm − newest  (Publikationslatenz)
 *
 * Messwerte bleiben bei einem Neuladen der Seite erhalten (localStorage) und
 * lassen sich als CSV exportieren.
 *
 * Verwendung in MDX:
 *   import StationFilesLatencyMonitor from '@site/src/components/StationFilesLatencyMonitor';
 *   <StationFilesLatencyMonitor />
 *   <StationFilesLatencyMonitor stations={['klo', 'sma']} intervalSec={60} durationHours={4} />
 */

const STAC_ITEM =
  'https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn/items/';
const DEFAULT_STATIONS = ['klo', 'sma', 'ber', 'bas', 'gve', 'lug', 'sio', 'jun'];
const STORAGE_KEY = 'ogd-smn-station-latency-v1';
const SLOT_MS = 10 * 60 * 1000;

// ---------- Hilfsfunktionen ----------

function parseTimestamp(s) {
  const t = s.trim();
  let m = t.match(/^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/); // 06.11.2026 16:40
  if (m) return Date.UTC(+m[3], +m[2] - 1, +m[1], +m[4], +m[5]);
  m = t.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/); // 2026-11-06 16:40
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  m = t.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/); // 202611061640
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  return NaN;
}

function newestTimestamp(csvText) {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim());
  const header = lines[0].split(';');
  const i = header.indexOf('reference_timestamp');
  if (i < 0) throw new Error('Spalte reference_timestamp fehlt');
  let max = NaN;
  for (let k = 1; k < lines.length; k++) {
    const v = parseTimestamp(lines[k].split(';')[i] || '');
    if (!Number.isNaN(v) && !(v <= max)) max = v;
  }
  if (Number.isNaN(max)) throw new Error('Kein gültiger Zeitstempel');
  return max;
}

async function resolveAssetUrl(station) {
  const r = await fetch(STAC_ITEM + station, { cache: 'no-store' });
  if (!r.ok) throw new Error(`STAC ${r.status}`);
  const item = await r.json();
  const key = Object.keys(item.assets || {}).find((k) => k.endsWith('_t_now.csv'));
  if (!key) throw new Error('Kein *_t_now.csv-Asset');
  return item.assets[key].href;
}

function quantile(values, p) {
  if (!values.length) return NaN;
  const v = [...values].sort((a, b) => a - b);
  return v[Math.min(v.length - 1, Math.round((p / 100) * (v.length - 1)))];
}

const min = (ms) => (Number.isNaN(ms) ? '–' : (ms / 60000).toFixed(1));
const hhmm = (ms) =>
  new Date(ms).toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zurich' });

function loadStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveStored(data) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* Speicher nicht verfügbar: Messung läuft trotzdem weiter */
  }
}

// ---------- Komponente ----------

export default function StationFilesLatencyMonitor({
  stations = DEFAULT_STATIONS,
  intervalSec = 60,
  durationHours = 4,
}) {
  const [records, setRecords] = useState([]); // {s, newest, lm, det}
  const [startedAt, setStartedAt] = useState(null);
  const [running, setRunning] = useState(false);
  const [errors, setErrors] = useState({});
  const [lastPoll, setLastPoll] = useState(null);

  const urls = useRef({});
  const seen = useRef({});
  const timer = useRef(null);
  const wakeLock = useRef(null);

  // gespeicherte Messung wiederherstellen
  useEffect(() => {
    const stored = loadStored();
    if (stored) {
      setRecords(stored.records || []);
      setStartedAt(stored.startedAt || null);
      seen.current = stored.seen || {};
    }
  }, []);

  useEffect(() => {
    if (startedAt) saveStored({ records, startedAt, seen: seen.current });
  }, [records, startedAt]);

  const pollStation = useCallback(async (s) => {
    if (!urls.current[s]) urls.current[s] = await resolveAssetUrl(s);
    const url = urls.current[s];

    const head = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    if (!head.ok) throw new Error(`HEAD ${head.status}`);
    const lmHeader = head.headers.get('Last-Modified');
    if (!lmHeader) throw new Error('Last-Modified nicht lesbar');
    if (seen.current[s] === lmHeader) return null;

    const det = Date.now();
    const body = await fetch(url, { cache: 'no-store' });
    if (!body.ok) throw new Error(`GET ${body.status}`);
    const newest = newestTimestamp(await body.text());
    seen.current[s] = lmHeader;
    return { s, newest, lm: Date.parse(lmHeader), det };
  }, []);

  const pollAll = useCallback(async () => {
    const results = await Promise.allSettled(stations.map(pollStation));
    const fresh = [];
    const errs = {};
    results.forEach((r, i) => {
      if (r.status === 'fulfilled' && r.value) fresh.push(r.value);
      if (r.status === 'rejected') errs[stations[i]] = String(r.reason?.message || r.reason);
    });
    setErrors(errs);
    setLastPoll(Date.now());
    if (fresh.length) setRecords((prev) => [...prev, ...fresh]);
  }, [stations, pollStation]);

  const stop = useCallback(() => {
    clearInterval(timer.current);
    timer.current = null;
    setRunning(false);
    wakeLock.current?.release?.().catch(() => {});
    wakeLock.current = null;
  }, []);

  const start = useCallback(async () => {
    const t0 = startedAt || Date.now();
    if (!startedAt) setStartedAt(t0);
    setRunning(true);
    try {
      wakeLock.current = await navigator.wakeLock?.request('screen');
    } catch {
      /* Wake Lock nicht verfügbar */
    }
    pollAll();
    timer.current = setInterval(() => {
      if (Date.now() - t0 > durationHours * 3600 * 1000) stop();
      else pollAll();
    }, intervalSec * 1000);
  }, [startedAt, pollAll, intervalSec, durationHours, stop]);

  useEffect(() => () => clearInterval(timer.current), []);

  const reset = () => {
    stop();
    setRecords([]);
    setStartedAt(null);
    setErrors({});
    seen.current = {};
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignorieren */
    }
  };

  const exportCsv = () => {
    const iso = (ms) => new Date(ms).toISOString();
    const rows = [
      'station;newest_ts_utc;last_modified_utc;detected_utc;latency_lm_s;latency_det_s',
      ...records.map((r) =>
        [r.s, iso(r.newest), iso(r.lm), iso(r.det), Math.round((r.lm - r.newest) / 1000), Math.round((r.det - r.newest) / 1000)].join(';'),
      ),
    ];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `ogd-smn-latenz-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '')}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  // Kennzahlen pro Station
  const stats = useMemo(() => {
    const per = stations.map((s) => {
      const rs = records.filter((r) => r.s === s);
      const lat = rs.map((r) => r.lm - r.newest);
      const ts = [...new Set(rs.map((r) => r.newest))].sort((a, b) => a - b);
      let gaps = 0;
      for (let i = 1; i < ts.length; i++) gaps += Math.max(0, Math.round((ts[i] - ts[i - 1]) / SLOT_MS) - 1);
      return {
        s,
        n: lat.length,
        median: quantile(lat, 50),
        p90: quantile(lat, 90),
        p99: quantile(lat, 99),
        max: lat.length ? Math.max(...lat) : NaN,
        gaps,
        last: rs[rs.length - 1],
      };
    });
    const all = records.map((r) => r.lm - r.newest);
    return {
      per,
      total: { n: all.length, median: quantile(all, 50), p90: quantile(all, 90), p99: quantile(all, 99), max: all.length ? Math.max(...all) : NaN },
    };
  }, [records, stations]);

  const elapsedH = startedAt ? ((Date.now() - startedAt) / 3600000).toFixed(1) : '0.0';

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
        {!running ? (
          <button className="button button--primary button--sm" onClick={start}>
            {startedAt ? 'Messung fortsetzen' : 'Messung starten'}
          </button>
        ) : (
          <button className="button button--secondary button--sm" onClick={stop}>
            Messung anhalten
          </button>
        )}
        <button className="button button--secondary button--sm" onClick={exportCsv} disabled={!records.length}>
          CSV exportieren
        </button>
        <button className="button button--link button--sm" onClick={reset} disabled={!records.length && !startedAt}>
          Zurücksetzen
        </button>
        <span style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          {running ? '● läuft' : '○ angehalten'} · {elapsedH} von {durationHours} h · Abfrage alle {intervalSec} s
          {lastPoll ? ` · zuletzt ${hhmm(lastPoll)}` : ''}
        </span>
      </div>

      <LatencyChart records={records} stations={stations} />

      <table style={{ fontSize: '0.85rem', display: 'table', width: '100%' }}>
        <thead>
          <tr>
            <th>Station</th>
            <th style={{ textAlign: 'right' }}>n</th>
            <th style={{ textAlign: 'right' }}>Median</th>
            <th style={{ textAlign: 'right' }}>P90</th>
            <th style={{ textAlign: 'right' }}>P99</th>
            <th style={{ textAlign: 'right' }}>Max</th>
            <th style={{ textAlign: 'right' }}>Lücken</th>
            <th>Letzter Wert</th>
          </tr>
        </thead>
        <tbody>
          {stats.per.map((r) => (
            <tr key={r.s}>
              <td>
                <code>{r.s}</code>
                {errors[r.s] && (
                  <span title={errors[r.s]} style={{ color: 'var(--ifm-color-danger)', marginLeft: 6 }}>
                    ⚠
                  </span>
                )}
              </td>
              <td style={{ textAlign: 'right' }}>{r.n}</td>
              <td style={{ textAlign: 'right' }}>{min(r.median)}</td>
              <td style={{ textAlign: 'right' }}>{min(r.p90)}</td>
              <td style={{ textAlign: 'right' }}>{min(r.p99)}</td>
              <td style={{ textAlign: 'right' }}>{min(r.max)}</td>
              <td style={{ textAlign: 'right' }}>{r.gaps}</td>
              <td>{r.last ? `${hhmm(r.last.newest)} → ${hhmm(r.last.lm)}` : '–'}</td>
            </tr>
          ))}
          <tr style={{ fontWeight: 600 }}>
            <td>Total</td>
            <td style={{ textAlign: 'right' }}>{stats.total.n}</td>
            <td style={{ textAlign: 'right' }}>{min(stats.total.median)}</td>
            <td style={{ textAlign: 'right' }}>{min(stats.total.p90)}</td>
            <td style={{ textAlign: 'right' }}>{min(stats.total.p99)}</td>
            <td style={{ textAlign: 'right' }}>{min(stats.total.max)}</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-700)' }}>
        Latenz in Minuten = Last-Modified der Datei − jüngster Messzeitpunkt (reference_timestamp, UTC).
        «Lücken» zählt ausgelassene 10-Minuten-Termine. Die Messung bleibt beim Neuladen erhalten;
        der Tab muss offen bleiben und der Rechner darf nicht in den Ruhezustand.
      </p>
    </div>
  );
}

// ---------- Streudiagramm: Latenz über Zeit ----------

function LatencyChart({ records, stations }) {
  if (records.length < 2) return null;
  const W = 720;
  const H = 200;
  const P = { l: 40, r: 10, t: 10, b: 24 };
  const xs = records.map((r) => r.newest);
  const ys = records.map((r) => (r.lm - r.newest) / 60000);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  const yMax = Math.max(20, Math.ceil(Math.max(...ys) / 5) * 5);
  const X = (v) => P.l + ((v - x0) / Math.max(1, x1 - x0)) * (W - P.l - P.r);
  const Y = (v) => H - P.b - (v / yMax) * (H - P.t - P.b);
  const ticksY = [];
  for (let v = 0; v <= yMax; v += yMax > 40 ? 10 : 5) ticksY.push(v);
  const ticksX = Array.from({ length: 5 }, (_, i) => x0 + ((x1 - x0) * i) / 4);
  const hue = (s) => `hsl(${(stations.indexOf(s) * 360) / stations.length}, 60%, 50%)`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', marginBottom: '0.75rem' }} role="img" aria-label="Latenz pro neuer Dateiversion über die Zeit">
      {ticksY.map((v) => (
        <g key={v}>
          <line x1={P.l} x2={W - P.r} y1={Y(v)} y2={Y(v)} stroke="var(--ifm-color-emphasis-200)" />
          <text x={P.l - 6} y={Y(v) + 4} textAnchor="end" fontSize="10" fill="var(--ifm-color-emphasis-700)">
            {v}
          </text>
        </g>
      ))}
      {[10, 20].map((v) =>
        v <= yMax ? (
          <line key={`ref${v}`} x1={P.l} x2={W - P.r} y1={Y(v)} y2={Y(v)} stroke="var(--ifm-color-emphasis-500)" strokeDasharray="4 3" />
        ) : null,
      )}
      {ticksX.map((v, i) => (
        <text key={i} x={X(v)} y={H - 6} textAnchor="middle" fontSize="10" fill="var(--ifm-color-emphasis-700)">
          {hhmm(v)}
        </text>
      ))}
      {records.map((r, i) => (
        <circle key={i} cx={X(r.newest)} cy={Y((r.lm - r.newest) / 60000)} r="2.5" fill={hue(r.s)} fillOpacity="0.75">
          <title>{`${r.s} · ${hhmm(r.newest)} · ${((r.lm - r.newest) / 60000).toFixed(1)} min`}</title>
        </circle>
      ))}
      <text x={P.l} y={P.t + 2} fontSize="10" fill="var(--ifm-color-emphasis-700)" dominantBaseline="hanging" dx="4">
        min
      </text>
    </svg>
  );
}
