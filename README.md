*Status:* draft in preparation / [change log](https://github.com/MeteoSwiss/opendata/commits/main) <br>
*Maintainer:* Federal Office of Meteorology and Climatology MeteoSwiss, [opendata@meteoswiss.ch](mailto:opendata@meteoswiss.ch)

<!-- [![GitHub commit](https://img.shields.io/github/last-commit/MeteoSwiss/opendata)](https://github.com/MeteoSwiss/opendata/commits/master) -->

<!-- [Auf Deutschj](#meteoschweiz-open-data) | [En français](#meteosuisse-open-data) | [In italiano](#meteosvizzera-open-data) -->

# MeteoSwiss - Open Data
Welcome to MeteoSwiss' Open Data documentation.

MeteoSwiss provides its various Open Data products to be consumed by [downloading the data as files](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#getting-started-with-download). 

| A <br> [Ground-based Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#a-ground-based-measurements) | B <br> [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#b-atmosphere-measurements) | C <br> [Observations Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#c-observations-data) | D <br> [Climate Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#d-climate-data) | E <br> [Radar Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#e-radar-data) | F <br> [Forecast Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#f-forecast-data) |
|-----|-----|-----|-----|-----|-----|

> [!NOTE]
> In order to also provide access to the data via APIs in future, the necessary preparatory work is underway. As soon as an introduction date for this second type of access can be estimated, it will be communicated here.

## General information

### Terms of Use
[Here](...) you'll find information about data license and conditions for usage.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/Terms_of_Use -->

### FAQ
[Here](https://github.com/MeteoSwiss/opendata-faq/blob/main/README.md) you'll find answers to the most frequently asked questions. 

We continuously update these based on questions received.

### Getting Started with Download
[Here](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md) you'll find information about data granularity, structure and update cycle, time stamps and time intervals as well as on column separators, decimal dividers and missing values.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/en/Download --> 

### Staying up to Date
Our *Download* API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](..) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, please check [Release Notes](..) where they announce released changes that might affect your integration.

For operational status, see [API Status & Contact](..).

## Understanding MeteoSwiss' Open Data products
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> 

For reference, here are the direct links:

### A. Ground-based Measurements
1. [Automatic weather stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#1-automatic-weather-stations)
2. [Automatic precipitation stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#2-automatic-precipitation-stations)
3. [Automatic boundary layer stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#3-automatic-boundary-layer-stations)
4. [Manual precipitation stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#4-manual-precipitation-stations)
5. [Totaliser precipitation stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#5-totaliser-precipitation-stations)
6. [Pollen stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#6-pollen-stations)

### B. Atmosphere Measurements
1. [Radiosoundings](https://github.com/MeteoSwiss/opendata-atmosphere-measurements/blob/main/README.md#1-radiosoundings)

### C. Observations Data
1. [Meteorological visual observations](https://github.com/MeteoSwiss/opendata-observations-data/blob/main/README.md#1-meteorological-visual-observations)
2. [Phenological observations](https://github.com/MeteoSwiss/opendata-observations-data/blob/main/README.md#2-phenological-observations)

### D. Climate Data
#### Homogenous Data Series
1. [Climate stations]()
2. [Climate precipitation stations]()
#### Spatial Representations
3. [Ground-based spatial climate data]()
4. [Satellite-based spatial climate data]()
5. [Radar-based spatial climate data]()
#### Normals & Scenarios
6. [Climate normals]()
7. [Spatial climate normals]()
8. [Climate scenarios]()

### E. Radar Data
1. [Basic radar data]()
2. [Extended radar data]()
3. [Combined precipitation calculations]()

### F. Forecast Data
1. [Short-term forecast data]()
2. Forecast data
3. [Local forecast data]()
