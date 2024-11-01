*Status:* public, in preparation / [change log](https://github.com/MeteoSwiss/opendata/commits/main) <br>
*Maintainer:* Federal Office of Meteorology and Climatology MeteoSwiss, [opendata@meteoswiss.ch](mailto:opendata@meteoswiss.ch)

<!-- [![GitHub commit](https://img.shields.io/github/last-commit/MeteoSwiss/opendata)](https://github.com/MeteoSwiss/opendata/commits/master) -->

<!-- [Auf Deutschj](#meteoschweiz-open-data) | [En français](#meteosuisse-open-data) | [In italiano](#meteosvizzera-open-data) -->

# MeteoSwiss - Open Data
Welcome to MeteoSwiss' Open Data documentation.

<!-- For now MeteoSwiss provides its Open Data to be consumed by **[downloading the data as files](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#getting-started-with-download)**. -->

From April 2025, MeteoSwiss will make its data freely available to the public as Open Government Data (OGD).

The data can be **[downloaded as pre-processed files](https://github.com/MeteoSwiss/opendata/blob/main/README.md#getting-started-with-download)**. In a later stage, customised queries via API will also be possible.

| A <br> [Ground-based Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#a-ground-based-measurements) | B <br> [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#b-atmosphere-measurements) | C <br> [Climate Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#c-climate-data) | D <br> [Radar Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#d-radar-data) | E <br> [Forecast Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#e-forecast-data) |
|-----|-----|-----|-----|-----|

> [!NOTE]
> In order to also provide **[access to the data via APIs](https://github.com/MeteoSwiss/opendata-api/blob/main/README.md) in future**, the necessary preparatory work is underway. As soon as an introduction date for this second type of access can be estimated, it will be communicated here.

## General information

<!-- ### Terms of Use
[Here](https://github.com/MeteoSwiss/opendata-terms-of-use/blob/main/README.md) you'll find information about data license and conditions for usage. -->

<!-- cf. https://opendatadocs.dmi.govcloud.dk/Terms_of_Use -->

<!-- ### FAQ
[Here](https://github.com/MeteoSwiss/opendata-faq/blob/main/README.md) you'll find answers to the most frequently asked questions. 

We continuously update these based on questions received. -->

### Getting Started with Download
[Here](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md) you'll find information about data granularity, structure and update cycle, time stamps and time intervals as well as on column separators, decimal dividers and missing values.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/en/Download --> 

### Staying up to Date
Our Download API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](https://www.swisstopo.admin.ch/en) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, 
- please check [Release Notes](..) (upcoming) where swisstopo announces released changes that might affect your integration.
- For operational status, see [Download API Status & Contact](..) (upcoming). 

In the event of malfunctions at land-based stations, 
- check for according messages of [interruptions in data availability](https://www.meteoswiss.admin.ch/services-and-publications/applications/data-availability.html).

<!-- We keep interested parties and users up to date on our plans and changes:
- Register here for [our mailing list](...). --> 

## Understanding MeteoSwiss' Open Data products
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> 

For reference, here are the direct links:

### A. Ground-based Measurements
| Open Data product | generated | integrated | accessible |
|:-----|-----|-----|-----|
| 1. [Automatic weather stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#1-automatic-weather-stations) | :green_circle: | :yellow_circle: | :yellow_circle: |
| 2. [Automatic precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#2-automatic-precipitation-stations) | :red_circle: | :red_circle: | :red_circle: |

1. [Automatic weather stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#1-automatic-weather-stations)
2. [Automatic precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#2-automatic-precipitation-stations)
3. [Automatic tower stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#3-automatic-tower-stations)
4. Automatic soil stations – Measured values *(not yet realised)*
5. [Manual precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#4-manual-precipitation-stations)
6. [Totaliser precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#5-totaliser-precipitation-stations)
7. [Pollen stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#6-pollen-stations)
8. [Meteorological visual observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#7-meteorological-visual-observations)
9. [Phenological observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#8-phenological-observations)

### B. Atmosphere Measurements
1. [Radiosoundings](https://github.com/MeteoSwiss/opendata-atmosphere-measurements/blob/main/README.md#1-radio-soundings)

The following measurements are planned to be made available for after the start of MeteoSwiss' Open Data provision:

- Raman-LIDAR for Meteorological Observation (RALMO)
- LIDAR Ceilometer CHM15K
- Ozone measurements: a. Total column (Dobson, Brewer), b. Profiles (O3 radio soundings, SOMORA)
- Swiss Alpine Climate Radiation Monitoring (SACRaM)

### C. Climate Data
<!-- Climate Data consists of homogenous time series data (1, 2), spatial climate data (3-5), climate normals (6, 7) and scenarios (8): -->

1. [Climate stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations)
2. [Climate precipitation stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#2-climate-precipitation-stations)
3. [Ground-based spatial climate data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#3-ground-based-spatial-climate-data)
4. [Satellite-based spatial climate data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#4-satellite-based-spatial-climate-data)
5. [Radar-based spatial climate data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#5-radar-based-spatial-climate-data)
6. [Climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals)
7. [Spatial climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#7-spatial-climate-normals)
8. [Climate scenarios](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#8-climate-scenarios)

### D. Radar Data
1. [Basic radar data](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#1-basic-radar-data)
2. [Extended radar data](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#2-extended-radar-data)
3. [Combined precipitation calculations](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#3-combined-precipitation-calculations)

### E. Forecast Data
1. [Short-term forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#1-short-term-forecast-data)
2. [Numerical weather forecasting model](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#2-numerical-weather-forecasting-model)
3. [Local forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#3-local-forecast-data)
