---
sidebar_position: 9
---

# A9 - Phenological observations
The [Swiss Phenology Network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/swiss-phenology-network.html) consists of around 160 stations. Some 26 different plant species are observed in order to describe the vegetation development. On the basis of this information, it is possible to investigate the impact of climate change on the vegetation. The observations also serve to generate forecasting models for the start of flowering.

## 9.1. Data granularity, update frequency, format, volume and structure
There are files of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity) `y` and [update frequency](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#update-frequency) daily (`recent`) or yearly (`historical`) for each station.

Data format is [`CSV`](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#column-separators-decimal-dividers-and-missing-values) with an estimated volume of ≤7.1 MB per file.

Data structure conforms to the example data files for granularity `y` and update frequencies `recent` and `historical`: [`ogd-phenology_(station identifier)_y_(update frequency).csv`](https://github.com/MeteoSwiss/publication-opendata/tree/main/data-surface/phenology).

| Variable name    | Description              | Datatype         | Note                                              |
| :---             | :---                     | :---             | :---                                              |
| *`param_id`*       | Parameter identification | `Number`         | see [Parameter metadata](#82-parameter-metadata)  |
| *`nat_abbr`*       | Station abbreviation     | `Text`           | see [Station metadata](#83-station-metadata)      |
| *`reference_year`* | Reference year           | `YYYY`           |                                                   |
| *`value`*          | Date of observation      | `YYYYMMDD`       |                                                   |
| *`doy`*            | Day of year              | `Number`         | `negative values`: Observation in the year preceding the reference year. <br/> `values greater than 365`: Observation in the year following the reference year.  |

## 9.2. Parameter metadata
The available parameters are listed in the example parameter metadata file of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity): [`y`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-phenology-Y.csv).


| Variable name       | Description                                      | Datatype         | Example value                                   | Note                     |
| :---                | :---                                             | :---             | :---                                            | :---                     |
| *`param_id`*        | Parameter identification                         | `Number`         | `601`                                           |                          |
| *`param_shortname`* | Parameter shortname                              | `Integer`        | `maesh13d`                                      |                          |
| *`scientific name`* | Plant's scientific name + phenophase* in English | `String`         | `Aesculus hippocastanum - leaf unfolding (50%)` | *`phenophase`: An observable stage or phase in the annual life cycle of a plant that can be defined by a start and end point. <!-- Phenophases generally have a duration of a few days or weeks. Examples include the period over which newly emerging leaves are visible, or the period over which open flowers are present on a plant. --> |
| *`desc_english`*    | Plant's common name + phenophase* in English     | `String`         | `Horse chestnut - leaf unfolding (50%)`         |                          |
| *`desc_deutsch`*    | Plant's common name + phenophase* in German      | `String`         | `Rosskastanie - Blattentfaltung (50%)`          |                          |
| *`desc_italiano`*   | Plant's common name + phenophase* in Italian     | `String`         | `Ippocastano - spiegamento delle foglie (50%)`  |                          |
| *`desc_français`*   | Plant's common name + phenophase* in Italian     | `String`         | `Marronnier - déploiement des feuilles (50%)`   |                          |

<!-- #### Codes -->
<!-- ... -->

## 9.3. Station metadata
The available parameters are listed in the example [station metadata file](https://data.geo.admin.ch/ch.meteoschweiz.messnetz-phaenologie/ch.meteoschweiz.messnetz-phaenologie_en.csv).

| Variable name     | Description                               | Datatype/Unit           | Example value       | Note                     |
| :---              | :---                                      | :---                    | :---                | :---                     |
| *`Station`*         | Station name                              | `Text`                  | `St. Gallen`        |                          |
| *`Abbr.`*           | Station abbreviation                      | `Text`                  | `STG`               |                          |
| *`WIGOS-ID`*        | WIGOS Station identifier (`WSI`)          | `4 Block Number`        | `0-20000-0-06681`   | [`WSI`](https://community.wmo.int/en/activity-areas/WIGOS/implementation-WIGOS/WIGOS-station-identifier) is used to register an observing station or platform in the [OSCAR/Surface database](https://space.oscar.wmo.int/). |
| *`Station type`*    | Station type                              | `Text`                  | `Phenology station` |                          |
| *`Data Owner`*      | Data Owner                                | `Text`                  | `MeteoSwiss`        |                          |
| *`Station height m a. sea level`* | Station height              | `Meter above sea level` | `711`               |                          |
| *`CoordinatesE`*    | [Swiss coordinates system LV95](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system), East      | `Number`          | `2746301`  |    |
| *`CoordinatesN`*    | [Swiss coordinates system LV95](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system), North     | `Number`          | `1255286`  |    |
| *`Latitude`*        | [Global WGS84 GPS coordinates](https://www.swisstopo.admin.ch/en/coordinates-conversion-navref), Latitude  | `Decimal degrees` | `47.432103`|    |
| *`Longitude`*       | [Global WGS84 GPS coordinates](https://www.swisstopo.admin.ch/en/coordinates-conversion-navref), Longitude | `Decimal degrees` | `9.378022` |    |
| *`Exposition`*      | *to be explained*                         | `Text`                  | `plain`             |                          |
| *`Canton`*          | Swiss canton abreviation                  | `Text`                  | `SG`                |                          |
| *`Measurements`*    | List of observed plants, scientific names | `Text`                  | `Aesculus hippocastanum, Fagus sylvatica, Acer pseudoplatanus, Sorbus aucuparia, Corylus avellana, Tilia platyphyllos, Sambucus nigra, Tilia cordata, Larix decidua, Picea abies, Robinia pseudoacacia, Betula pendula, Castanea sativa, Tussilago farfara, Anemone nemorosa, Dactylis glomerata, Taraxacum officinale, Cardamine pratensis, Leucanthemum vulgare, Colchicum autumnale, Prunus avium, Pyrus communis, Malus domestica, Hay` |    |
| *`Link`*            | More information about the station and the start date of observations (per plant) | `URL`                   | `https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-phaenologie&station=STG` |   |

## 9.4. Data visualisation
See e.g. MeteoSwiss' [PHENOLOGY network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-phaenologie&lang=en&table=false).
