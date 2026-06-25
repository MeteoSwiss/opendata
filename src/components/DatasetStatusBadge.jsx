import React, { useState, useEffect } from 'react';

/**
 * DatasetStatusBadge
 *
 * Zeigt live an, ob ein Radar-Datensatz gemäss Vorgabe aktualisiert wurde.
 * Prüft via STAC API, ob das neueste Asset jünger als (updateCycleMin + toleranceMin) ist.
 *
 * Props:
 *   collection     — STAC collection name, z.B. "ch.meteoschweiz.ogd-radar-precip"
 *   updateCycleMin — Erwarteter Update-Zyklus in Minuten (z.B. 5)
 *   toleranceMin   — Toleranz in Minuten bis "Verspätet" (default: updateCycleMin * 2)
 *   label          — Optionaler Anzeigetext statt der Collection-ID
 */
export default function DatasetStatusBadge({
  collection,
  updateCycleMin,
  toleranceMin,
  label,
}) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'ok' | 'delayed' | 'failed' | 'error'
  const [lastSeen, setLastSeen] = useState(null);
  const [ageMin, setAgeMin] = useState(null);

  const effectiveTolerance = toleranceMin ?? updateCycleMin * 2;

  useEffect(() => {
    let cancelled = false;

    async function check() {
      setStatus('loading');
      try {
        // Heute als STAC-Item-ID (UTC-Datum)
        const now = new Date();
        const yyyy = now.getUTCFullYear();
        const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(now.getUTCDate()).padStart(2, '0');
        const today = `${yyyy}-${mm}-${dd}`;

        const itemUrl =
          `https://data.geo.admin.ch/api/stac/v1/collections/${collection}` +
          `/items/${today}`;

        const res = await fetch(itemUrl, { cache: 'no-store' });

        if (!res.ok) {
          if (!cancelled) setStatus('failed');
          return;
        }

        const item = await res.json();
        const assets = item?.assets ?? {};

        // Neuestes Asset anhand des `updated`-Feldes finden
        let latestTs = null;
        for (const asset of Object.values(assets)) {
          const ts = asset?.updated ?? asset?.created ?? null;
          if (ts) {
            const d = new Date(ts);
            if (!latestTs || d > latestTs) latestTs = d;
          }
        }

        if (!latestTs) {
          if (!cancelled) setStatus('failed');
          return;
        }

        const diffMin = (now - latestTs) / 60000;

        if (!cancelled) {
          setLastSeen(latestTs);
          setAgeMin(Math.round(diffMin));

          if (diffMin <= updateCycleMin + effectiveTolerance) {
            setStatus('ok');
          } else if (diffMin <= updateCycleMin + effectiveTolerance * 4) {
            setStatus('delayed');
          } else {
            setStatus('failed');
          }
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    check();
    // Re-check alle 2 Minuten
    const interval = setInterval(check, 120_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [collection, updateCycleMin, effectiveTolerance]);

  const cfg = {
    loading: {
      icon: '⏳',
      text: 'Prüfe …',
      bg: 'var(--ifm-color-secondary-lightest, #f0f0f0)',
      color: 'var(--ifm-color-secondary-darkest, #555)',
      border: 'var(--ifm-color-secondary-light, #ccc)',
    },
    ok: {
      icon: '✅',
      text: `Aktuell`,
      bg: '#e6f4ea',
      color: '#1e6e3b',
      border: '#a8d5b5',
    },
    delayed: {
      icon: '⚠️',
      text: `Verspätet`,
      bg: '#fff8e1',
      color: '#7a5c00',
      border: '#ffe082',
    },
    failed: {
      icon: '🔴',
      text: 'Ausfall',
      bg: '#fce8e6',
      color: '#b31412',
      border: '#f5c6c5',
    },
    error: {
      icon: '❓',
      text: 'Unbekannt',
      bg: '#f5f5f5',
      color: '#555',
      border: '#ddd',
    },
  };

  const c = cfg[status] ?? cfg.error;

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35em',
    padding: '0.2em 0.6em',
    borderRadius: '4px',
    border: `1px solid ${c.border}`,
    background: c.bg,
    color: c.color,
    fontSize: '0.82rem',
    fontWeight: 600,
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
    fontFamily: 'var(--ifm-font-family-base, sans-serif)',
  };

  const tooltipText =
    status === 'loading'
      ? 'Datenverfügbarkeit wird geprüft …'
      : status === 'error'
      ? 'STAC-API nicht erreichbar'
      : status === 'failed'
      ? `Letzter bekannter Datenpunkt: ${lastSeen ? formatTs(lastSeen) : '–'} (${ageMin} min alt)`
      : `Letzter Datenpunkt: ${lastSeen ? formatTs(lastSeen) : '–'} (${ageMin} min alt)`;

  return (
    <span
      title={tooltipText}
      aria-label={`Datensatz-Status: ${c.text}. ${tooltipText}`}
      style={badgeStyle}
    >
      <span role="img" aria-hidden="true">{c.icon}</span>
      {c.text}
      {ageMin !== null && status !== 'loading' && (
        <span style={{ fontWeight: 400, opacity: 0.75, fontSize: '0.78rem' }}>
          ({ageMin}&thinsp;min)
        </span>
      )}
    </span>
  );
}

function formatTs(date) {
  return date.toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}
