*Status:* public, in preparation / [change log](https://github.com/MeteoSwiss/opendata/commits/main) <br>
*Maintainer:* Federal Office of Meteorology and Climatology MeteoSwiss, [opendata@meteoswiss.ch](mailto:opendata@meteoswiss.ch)

<!-- [![GitHub commit](https://img.shields.io/github/last-commit/MeteoSwiss/opendata)](https://github.com/MeteoSwiss/opendata/commits/master) -->

<!-- [Auf Deutschj](#meteoschweiz-open-data) | [En français](#meteosuisse-open-data) | [In italiano](#meteosvizzera-open-data) -->

# MeteoSwiss - Open Data
Welcome to MeteoSwiss' Open Data documentation.

<!-- For now MeteoSwiss provides its Open Data to be consumed by **[downloading the data as files](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#getting-started-with-download)**. -->

From April 2025, MeteoSwiss will make its data freely available to the public as Open Government Data (OGD).

The data can be **[downloaded as pre-processed files](https://github.com/MeteoSwiss/opendata/blob/main/README.md#getting-started-with-download)**. In a later stage, customised queries via API will also be possible.

| A <br> [Ground-based Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#a--ground-based-measurements) | B <br> [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#b--atmosphere-measurements) | C <br> [Climate Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#c--climate-data) | D <br> [Radar Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#d--radar-data) | E <br> [Forecast Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#e--forecast-data) |
|-----|-----|-----|-----|-----|

> [!NOTE]
> In order to also provide **[access to the data via APIs](https://github.com/MeteoSwiss/opendata-api/blob/main/README.md) in future**, the necessary preparatory work is underway. As soon as an introduction date for this second type of access can be estimated, it will be communicated here.

## General information

### Terms of Use
[Here](https://github.com/MeteoSwiss/opendata-terms-of-use/blob/main/README.md) you'll find information about data license and conditions for usage.

<!-- ### FAQ
[Here](https://github.com/MeteoSwiss/opendata-faq/blob/main/README.md) you'll find answers to the most frequently asked questions. 

We continuously update these based on questions received. -->

### Getting Started with Download
[Here](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md) you'll find information about data granularity, structure and update cycle, time stamps and time intervals as well as on column separators, decimal dividers and missing values.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/en/Download --> 

### Staying up to Date
Our Download API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](https://www.swisstopo.admin.ch/en) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, 
- please check [Release Notes](..) (upcoming) where swisstopo announces released changes that might affect your integration.
- For operational status, see [Download API Status & Contact](https://github.com/MeteoSwiss/opendata-status/blob/main/README.md) (upcoming). 

In the event of malfunctions at land-based stations, 
- check for according messages of [interruptions in data availability](https://www.meteoswiss.admin.ch/services-and-publications/applications/data-availability.html).

<!-- We keep interested parties and users up to date on our plans and changes:
- Register here for [our mailing list](...). --> 

## Understanding MeteoSwiss' Open Data
The documentation of each Open Data product listed below explains what the data represents, its models, abstractions and terminology.

### A - Ground-based Measurements
|    | Open Data product | generated | integrated | accessible |
|:-----:|:-----|:-----:|:-----:|:-----:|
| A1 | [Automatic weather stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#1-automatic-weather-stations-measured-values) | :green_circle: | :yellow_circle: | :yellow_circle: |
| A2 | [Automatic precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#2-automatic-precipitation-stations-measured-values) | :red_circle: | :red_circle: | :red_circle: |
| A3 | [Automatic tower stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#3-automatic-tower-stations-measured-values) | :red_circle: | :red_circle: | :red_circle: |
| A4 | Automatic soil stations – Measured values */ not yet realised* | :white_circle: | :white_circle: | :white_circle: |
| A5 | [Manual precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#5-manual-precipitation-stations-measured-values) | :red_circle: | :red_circle: | :red_circle: |
| A6 | [Totaliser precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#6-totaliser-precipitation-stations-measured-values) | :red_circle: | :red_circle: | :red_circle: |
| A7 | [Pollen stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#7-pollen-stations-measured-values) | :red_circle: | :red_circle: | :red_circle: |
| A8 | [Meteorological visual observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#8-meteorological-visual-observations) | :red_circle: | :red_circle: | :red_circle: |
| A9 | [Phenological observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#9-phenological-observations) | :red_circle: | :red_circle: | :red_circle: |

### B - Atmosphere Measurements
|    | Open Data product | generated | integrated | accessible |
|:-----:|:-----|:-----:|:-----:|:-----:|
| B1 | [Radio soundings](https://github.com/MeteoSwiss/opendata-atmosphere-measurements/blob/main/README.md#1-radio-soundings) | :red_circle: | :red_circle: | :red_circle: |
| B2 | Raman-LIDAR for Meteorological Observation (RALMO) */ not yet realised* | :white_circle: | :white_circle: | :white_circle: |
| B3 | LIDAR Ceilometer CHM15K */ not yet realised* | :white_circle: | :white_circle: | :white_circle: |
| B4 | Ozone measurements – Total column (Dobson, Brewer) */ not yet realised* | :white_circle: | :white_circle: | :white_circle: |
| B5 | Ozone measurements – Profiles (O3 radio soundings, SOMORA) */ not yet realised* | :white_circle: | :white_circle: | :white_circle: |
| B6 | wiss Alpine Climate Radiation Monitoring (SACRaM) */ not yet realised* | :white_circle: | :white_circle: | :white_circle: |

### C - Climate Data
|    | Open Data product | generated | integrated | accessible |
|:-----:|:-----|:-----:|:-----:|:-----:|
| C1 | [Climate stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations-homogeneous-measurements) | :red_circle: | :red_circle: | :red_circle: |
| C2 | [Climate precipitation stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#2-climate-precipitation-stations-homogeneous-measurements) | :red_circle: | :red_circle: | :red_circle: |
| C3 | [Ground-based spatial climate data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#3-ground-based-spatial-climate-data) | :red_circle: | :red_circle: | :red_circle: |
| C4 | [Satellite-based spatial climate data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#4-satellite-based-spatial-climate-data) | :red_circle: | :red_circle: | :red_circle: |
| C5 | [Radar-based spatial climate data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#5-radar-based-spatial-climate-data) | :red_circle: | :red_circle: | :red_circle: |
| C6 | [Climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals) | :red_circle: | :red_circle: | :red_circle: |
| C7 | [Spatial climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#7-spatial-climate-normals) | :red_circle: | :red_circle: | :red_circle: |
| C8 | [Climate scenarios](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#8-climate-scenarios) | :red_circle: | :red_circle: | :red_circle: |

### D - Radar Data
|    | Open Data product | generated | integrated | accessible |
|:-----:|:-----|:-----:|:-----:|:-----:|
1. [Basic radar data](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#1-basic-radar-data)
2. [Extended radar data](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#2-extended-radar-data)
3. [Combined precipitation calculations](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#3-combined-precipitation-calculations)

### E - Forecast Data
1. [Short-term forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#1-short-term-forecast-data)
2. [Numerical weather forecasting model](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#2-numerical-weather-forecasting-model)
3. [Local forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#3-local-forecast-data)
