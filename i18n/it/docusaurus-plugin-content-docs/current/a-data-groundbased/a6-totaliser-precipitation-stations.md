---
sidebar_position: 6
---

# A6 - Totaliser precipitation stations - Measured values
In supplement to [5. Manual precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#5-manual-precipitation-stations-measured-values) in mountainous areas that are difficult to access, MeteoSwiss operates around 60 totalisers which record the volume of precipitation for an entire year (see section "Totaliser monitoring network – annual readings" [here](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html).

> [!NOTE]
> For **climate analyses**, use the corresponding [homogeneous time series data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#d-climate-data) instead.

## 6.1. Data granularity, update frequency, format and volume
There are files of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity) `y` and [update frequency](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#update-frequency) yearly (`historical`) for each station.

Data format of all files is [`CSV`](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#column-separators-decimal-dividers-and-missing-values) with an estimated volume of ≤0.6 MB per file.

See example data file for station `MGR` (set in lower case): [`ogd-tot_mgr_y_historical`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/manual-precipitation-stations-tot/tot_Y_MGR.csv).

## 6.2. Parameter metadata
See example parameter metadata file of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity): [`y`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-tot-Y.csv).

The productive version will provide a parameter metadata file with the name: `ogd-tot_meta_parameters.csv`.

<!-- **Codes** -->
<!-- ... -->

## 6.3. Station metadata
See example [station metadata file](https://data.geo.admin.ch/ch.meteoschweiz.messnetz-manuell/ch.meteoschweiz.messnetz-manuell_en.csv).

The productive version will provide a station metadata file with the file name: `ogd-tot_meta_stations.csv`.

## 6.4. Data visualisation
See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-manuell&lang=en&table=false). 
