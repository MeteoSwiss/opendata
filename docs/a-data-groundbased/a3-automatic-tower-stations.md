---
sidebar_position: 3
---

# A3 - Automatic tower stations - Measured values
For boundary layer measurements MeteoSwiss operates 3 automatic tower stations at 150m to 230m above ground. They deliver temperature, humidity, wind, radiation, pressure and sunshine duration every ten minutes.

## 3.1. Data granularity, update frequency, format and volume
If you require hourly, daily, monthly or annual values, we strongly recommend that you download the corresponding aggregated [data granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `t`, `h`, `d`, `m`, `y` and [update frequency](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#update-frequency) hourly (`now`), daily (`recent`) or yearly (`historical`),

Data format is [`CSV`](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#column-separators-decimal-dividers-and-missing-values) with an estimated volume of ≤5.3 MB per file.

See example data files for station `UEB` (set in lower case) for all granularities and update frequencies mentioned: [`ogd-smn-tower_ueb_(data granularity)_(update frequency).csv`](https://github.com/MeteoSwiss/publication-opendata/tree/main/data-surface/automatic-weather-stations/smn-tower).

## 3.2. Parameter metadata
For example parameter metadata files see [1.2. Parameter metadata](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#12-parameter-metadata) above.

The productive version will provide a single parameter metadata file for all granularities; file name: `ogd-smn-tower_meta_parameters.csv`.

<!-- *** Codes -->
<!-- ... -->

## 3.3. Station metadata
See example [station metadata file](https://data.geo.admin.ch/ch.meteoschweiz.messnetz-automatisch/ch.meteoschweiz.messnetz-automatisch_en.csv).

The productive version will provide a station metadata file with the file name: `ogd-smn-tower_meta_stations.csv`.

## 3.4. Data visualisation
*See ... .*