---
sidebar_position: 8
---

# A8 - Meteorological visual observations
MeteoSwiss' data on current weather events is supplemented by [visual human observations](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-observation-network.html), which describe the atmospheric conditions around the observation sites in detail.

Meteorological observers make visual observations and take readings from measurement instruments between two and eight times per day every day of the year at around 20 locations in Switzerland. The following aspects are observed:
- Meteorological visibility
- Current weather: e.g. moderate rain showers, snowfall, fog with formation of hoarfrost
- Past weather: the main weather phenomena during the past 3, 6 or 12 hours, e.g. thunderstorms, drizzle, drifting snow
- Ground conditions: e.g. powder snow covering the entire ground surface; frozen; damp
- Clouds: extent of total cloud cover, type and shape of visible clouds, the altitude of the cloud base
- Mesurement of fresh and total snow depth

## 8.1. Data granularity, update frequency, format and volume
There are files of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity) `t` and [update frequency](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#update-frequency) hourly (`now`), daily (`recent`) or yearly (`historical`) for each station.

Data format is [`CSV`](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#column-separators-decimal-dividers-and-missing-values) with an estimated volume of ≤0.04 MB per file.

See example data files for station `BAS` (set in lower case) for granularity `t` and update frequencies `now`, `recent` and `historical`: [`ogd-obs_bas_t_(update frequency).csv`](https://github.com/MeteoSwiss/publication-opendata/tree/main/data-surface/visual-observations-obs).

## 8.2. Parameter metadata
See example parameter metadata file of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity): [`t`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-obs-T.csv).

<!-- ### Codes -->
<!-- ... -->

### 8.3. Station metadata
See example [station metadata file](https://data.geo.admin.ch/ch.meteoschweiz.messnetz-beobachtungen/ch.meteoschweiz.messnetz-beobachtungen_en.csv).

## 8.4. Data visualisation
See e.g. MeteoSwiss' [OBS network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-beobachtungen&lang=en&table=false).