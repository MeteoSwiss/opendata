import React, {useCallback, useEffect, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// Konfiguration
// ---------------------------------------------------------------------------
// STAC-API der Bundesgeodäteninfrastruktur (BGDI), über die MeteoSwiss seine
// Open-Data-'Collections' veröffentlicht (siehe jeweilige Doku-Seite unter
// "Daten automatisch herunterladen").
const STAC_BASE = 'https://data.geo.admin.ch/api/stac/v1';

// Wie viele Stationen ("Items") pro Sammlung als Stichprobe abgefragt werden,
// um daraus das jüngste "updated"-Datum aller enthaltenen Dateien (Assets) zu
// bestimmen. Die STAC-API von geo.admin.ch unterstützt aktuell weder eine
// Sortierung nach "updated" noch einen "fields"-Filter zur Verkleinerung der
// Antwort – es werden daher schlicht die ersten N Stationen (alphabetisch)
// abgefragt. Ein höherer Wert erhöht die Aussagekraft (weniger Fehlalarme,
// falls einzelne Stationen ausfallen), aber auch die übertragene Datenmenge.
const SAMPLE_SIZE = 6;

// Heuristische Schwellenwerte je Datensatz/'Collection'. `expectedMinutes`
// entspricht der auf der jeweiligen Doku-Seite genannten Aktualisierungs-
// frequenz, `warnAfter`/`failAfter` sind Vielfache davon. MeteoSwiss
// veröffentlicht kein offizielles SLA – die Werte sind bewusst grosszügig
// gewählt und lassen sich hier bei Bedarf anpassen.
const DATASETS = [
  {
    id: 'A1',
    name: 'Automatische Wetterstationen',
    path: '/a-data-groundbased/a1-automatic-weather-stations',
    collectionId: 'ch.meteoschweiz.ogd-smn',
    frequencyLabel: 'Alle 10 Min., stündlich, täglich, monatlich, jährlich',
    // Doku A1: "Das Aktualisierungsintervall für Dateien mit
    // 10-Minuten-Werten ist auf 20 Minuten gesetzt."
    expectedMinutes: 20,
    warnAfter: 3, // > 60 Min. seit letztem Update -> verzögert
    failAfter: 9, // > 180 Min. seit letztem Update -> ausgefallen
  },
  {
    id: 'A2',
    name: 'Automatische Niederschlagsstationen',
    path: '/a-data-groundbased/a2-automatic-precipitation-stations',
    collectionId: 'ch.meteoschweiz.ogd-smn-precip',
    frequencyLabel: 'Alle 10 Min., stündlich, täglich, monatlich, jährlich',
    expectedMinutes: 20,
    warnAfter: 3,
    failAfter: 9,
  },
  {
    id: 'A3',
    name: 'Automatische Turmstationen',
    path: '/a-data-groundbased/a3-automatic-tower-stations',
    collectionId: 'ch.meteoschweiz.ogd-smn-tower',
    frequencyLabel: 'Alle 10 Min., stündlich, täglich, monatlich, jährlich',
    expectedMinutes: 20,
    warnAfter: 3,
    failAfter: 9,
  },
  {
    id: 'A4',
    name: 'Automatische Bodenfeuchtestationen',
    path: '/a-data-groundbased/a4-automatic-soil-stations',
    collectionId: null,
    frequencyLabel: 'Planung steht noch aus',
    // Für diesen Datensatz existiert gemäss Doku noch keine 'Collection' /
    // kein Download – daher kein Live-Check, sondern fixer Hinweis-Status.
    notAvailable: true,
  },
  {
    id: 'A5',
    name: 'Manuelle Niederschlagsstationen',
    path: '/a-data-groundbased/a5-manual-precipitation-stations',
    collectionId: 'ch.meteoschweiz.ogd-nime',
    frequencyLabel: 'Täglich, monatlich, jährlich',
    expectedMinutes: 24 * 60,
    warnAfter: 1.5,
    failAfter: 3,
  },
  {
    id: 'A6',
    name: 'Totalisator-Niederschlagsstationen',
    path: '/a-data-groundbased/a6-totaliser-precipitation-stations',
    collectionId: 'ch.meteoschweiz.ogd-tot',
    frequencyLabel: 'Jährlich',
    expectedMinutes: 365 * 24 * 60,
    warnAfter: 1.2,
    failAfter: 2,
  },
  {
    id: 'A7',
    name: 'Pollenstationen',
    path: '/a-data-groundbased/a7-pollen-stations',
    collectionId: 'ch.meteoschweiz.ogd-pollen',
    frequencyLabel: 'Stündlich, täglich',
    expectedMinutes: 60,
    warnAfter: 3,
    failAfter: 8,
  },
  {
    id: 'A8',
    name: 'Meteorologische Augenbeobachtungen',
    path: '/a-data-groundbased/a8-meteorological-visual-observations',
    collectionId: 'ch.meteoschweiz.ogd-obs',
    frequencyLabel: '2–8× täglich, monatlich, jährlich',
    expectedMinutes: 24 * 60,
    warnAfter: 1.5,
    failAfter: 3,
  },
  {
    id: 'A9',
    name: 'Phänologische Beobachtungen',
    path: '/a-data-groundbased/a9-phenological-observations',
    collectionId: 'ch.meteoschweiz.ogd-phenology',
    frequencyLabel: 'Jährlich (laufende Erfassung)',
    expectedMinutes: 24 * 60,
    warnAfter: 3,
    failAfter: 10,
  },
];

const STATUS_META = {
  ok: {label: 'Aktualisiert', icon: '✅', tone: 'ok'},
  delayed: {label: 'Verzögert', icon: '⚠️', tone: 'delayed'},
  failed: {label: 'Ausgefallen', icon: '❌', tone: 'failed'},
  unknown: {label: 'Status unbekannt', icon: '❔', tone: 'unknown'},
  loading: {label: 'Wird geprüft …', icon: '⏳', tone: 'loading'},
  notAvailable: {label: 'Keine Daten (in Planung)', icon: '➖', tone: 'notAvailable'},
};

function formatRelativeTime(date) {
  if (!date) return '–';
  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.round(diffMs / 60000);
  if (diffMin < 1) return 'vor wenigen Sekunden';
  if (diffMin < 60) return `vor ${diffMin} Min.`;
  const diffH = Math.round(diffMin / 60);
  if (diffH < 24) return `vor ${diffH} Std.`;
  const diffD = Math.round(diffH / 24);
  if (diffD < 31) return `vor ${diffD} Tg.`;
  const diffMonths = Math.round(diffD / 30.4);
  if (diffMonths < 18) return `vor ${diffMonths} Mon.`;
  const diffY = Math.round((diffD / 365) * 10) / 10;
  return `vor ${diffY} J.`;
}

// Fragt eine 'Collection' ab und liefert das jüngste "updated"-Datum, das in
// den Item- bzw. Asset-Metadaten der Stichprobe gefunden wird.
async function checkDataset(dataset, signal) {
  if (dataset.notAvailable) {
    return {status: 'notAvailable', lastUpdated: null, error: null};
  }
  try {
    const url = `${STAC_BASE}/collections/${dataset.collectionId}/items?limit=${SAMPLE_SIZE}`;
    const res = await fetch(url, {signal});
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    const features = Array.isArray(data.features) ? data.features : [];

    let newest = null;
    for (const feature of features) {
      const props = feature.properties || {};
      const assets = feature.assets || {};
      const timestamps = [props.updated, ...Object.values(assets).map((a) => a && a.updated)];
      for (const ts of timestamps) {
        if (!ts) continue;
        const t = new Date(ts).getTime();
        if (!Number.isNaN(t) && (newest === null || t > newest)) {
          newest = t;
        }
      }
    }

    if (newest === null) {
      throw new Error('Kein Aktualisierungsdatum in der Antwort gefunden.');
    }

    const lastUpdated = new Date(newest);
    const ageMinutes = (Date.now() - newest) / 60000;
    const warnThreshold = dataset.expectedMinutes * dataset.warnAfter;
    const failThreshold = dataset.expectedMinutes * dataset.failAfter;

    let status = 'ok';
    if (ageMinutes > failThreshold) status = 'failed';
    else if (ageMinutes > warnThreshold) status = 'delayed';

    return {status, lastUpdated, error: null};
  } catch (err) {
    if (err && err.name === 'AbortError') {
      throw err;
    }
    return {
      status: 'unknown',
      lastUpdated: null,
      error: err && err.message ? err.message : String(err),
    };
  }
}

export default function GroundDataStatus() {
  const baseUrl = useBaseUrl('/');
  const [results, setResults] = useState(() => {
    const initial = {};
    for (const d of DATASETS) {
      initial[d.id] = {
        status: d.notAvailable ? 'notAvailable' : 'loading',
        lastUpdated: null,
        error: null,
      };
    }
    return initial;
  });
  const [checkedAt, setCheckedAt] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const abortRef = useRef(null);

  const runCheck = useCallback(async () => {
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setIsChecking(true);
    setResults((prev) => {
      const next = {...prev};
      for (const d of DATASETS) {
        if (!d.notAvailable) {
          next[d.id] = {...next[d.id], status: 'loading'};
        }
      }
      return next;
    });

    await Promise.all(
      DATASETS.map(async (dataset) => {
        try {
          const result = await checkDataset(dataset, controller.signal);
          if (!controller.signal.aborted) {
            setResults((prev) => ({...prev, [dataset.id]: result}));
          }
        } catch (err) {
          if (!(err && err.name === 'AbortError')) {
            setResults((prev) => ({
              ...prev,
              [dataset.id]: {status: 'unknown', lastUpdated: null, error: String(err)},
            }));
          }
        }
      }),
    );

    if (!controller.signal.aborted) {
      setCheckedAt(new Date());
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    runCheck();
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, [runCheck]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <span className={styles.checkedAt} aria-live="polite">
          {checkedAt
            ? `Letzte Prüfung: ${checkedAt.toLocaleString('de-CH')}`
            : 'Status wird geprüft …'}
        </span>
        <button
          type="button"
          className={styles.refreshButton}
          onClick={runCheck}
          disabled={isChecking}
        >
          {isChecking ? 'Prüfung läuft …' : 'Erneut prüfen'}
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Datensatz / &apos;Collection&apos;</th>
              <th>Erwartete Aktualisierung</th>
              <th>Letztes Update</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {DATASETS.map((dataset) => {
              const result = results[dataset.id] || {status: 'loading'};
              const meta = STATUS_META[result.status] || STATUS_META.unknown;
              const href = `${baseUrl.replace(/\/$/, '')}${dataset.path}`;
              return (
                <tr key={dataset.id}>
                  <td>{dataset.id}</td>
                  <td>
                    <a href={href}>{dataset.name}</a>
                  </td>
                  <td>{dataset.frequencyLabel}</td>
                  <td
                    title={
                      result.lastUpdated ? result.lastUpdated.toLocaleString('de-CH') : undefined
                    }
                  >
                    {dataset.notAvailable ? '–' : formatRelativeTime(result.lastUpdated)}
                  </td>
                  <td>
                    <span className={`${styles.badge} ${styles[meta.tone]}`}>
                      <span aria-hidden="true">{meta.icon}</span> {meta.label}
                    </span>
                    {result.error && (
                      <div className={styles.errorHint} title={result.error}>
                        Abruf fehlgeschlagen
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className={styles.legend}>
        ✅ wie dokumentiert aktualisiert · ⚠️ verzögert · ❌ ausgefallen · ❔ Status nicht
        abrufbar (z.&nbsp;B. Netzwerk- oder CORS-Problem) · ➖ noch keine Daten verfügbar. Die
        Schwellenwerte basieren auf der dokumentierten Aktualisierungsfrequenz und sind im
        Quellcode dieser Komponente anpassbar.
      </p>
    </div>
  );
}
