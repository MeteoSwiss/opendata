![MeteoSwiss Logo](/docs/assets/img/mch_logo_en.png)

<!-- [![GitHub commit](https://img.shields.io/github/last-commit/MeteoSwiss/opendata)](https://github.com/MeteoSwiss/opendata/commits/master) -->

<!-- [Auf Deutschj](#meteoschweiz-open-data) | [En français](#meteosuisse-open-data) | [In italiano](#meteosvizzera-open-data) -->

# MeteoSwiss - Open Data
Welcome to MeteoSwiss' Open Data documentation.
> ⚠️ **Status:** in preparation / [change log](https://github.com/MeteoSwiss/opendata/commits/main).

<!-- For now MeteoSwiss provides its Open Data to be consumed by **[downloading the data as files](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#getting-started-with-download)**. -->

From April 2025, MeteoSwiss will make its data freely available to the public as Open Government Data (OGD). The data can be [downloaded as pre-processed files](#getting-started-with-download). In a later stage, customised queries via API will also be possible.

In order to also provide [access to the data via APIs](https://github.com/MeteoSwiss/opendata-api/blob/main/README.md) in future, the necessary preparatory work is underway. As soon as an introduction date for this second type of access can be estimated, it will be communicated here.

## Available Data
|   | Category |
|:-:|:---------|
| A | [Ground-based Measurements](#a---ground-based-measurements) |
| B | [Atmosphere Measurements](#b---atmosphere-measurements) |
| C | [Climate Data](#c---climate-data) |
| D | [Radar Data](#d---radar-data) |
| E | [Forecast Data](#e---forecast-data) |

<br>

## General information

### Terms of Use
[Here](https://github.com/MeteoSwiss/opendata-terms-of-use/blob/main/README.md) *[upcoming]* you'll find information about data license and conditions for usage.

### Frequently asked Questions
[Here](https://github.com/MeteoSwiss/opendata-faq/blob/main/README.md) *[upcoming]* you'll find answers to the most frequently asked questions. 

We continuously update these based on questions received. If you cannot find an answer to your question, please contact: [opendata.en@meteoswiss.ch](mailto:opendata.en@meteoswiss.ch)

### Getting Started with Download
[Here](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md) you'll find information about data granularity, structure and update cycle, time stamps and time intervals as well as on column separators, decimal dividers and missing values.

### Staying up to Date
For **operational status**, see [Download API Status & Contact](https://github.com/MeteoSwiss/opendata-status/blob/main/README.md) *[upcoming]*

geo.admin.ch's download service will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](https://www.swisstopo.admin.ch/en) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, 
- check [release notes](..) *[upcoming]* where swisstopo announces released changes that might affect your integration.

In the event of malfunctions at land-based stations, 
- check for according messages of [interruptions in data availability](https://www.meteoswiss.admin.ch/services-and-publications/applications/data-availability.html).

We keep interested parties and users up to date on our plans and changes:
- **[register for our newsletter](...)** *[upcoming]*

If you cannot find an answer to your question here in our documentation or in our [FAQ](...) *[upcoming]*:
- contact: [opendata.en@meteoswiss.ch](mailto:opendata.en@meteoswiss.ch).

<br>

## Understanding MeteoSwiss' Open Data
The documentations of the Open Data products linked below explain what the data represents, its models, abstractions and terminology.

<!-- The *Open Data products in italics* are not yet realised. -->

> ⚠️ **Status:** We are currently **setting up our service as ALPHA**. Everything is subject to change without prior notice.

<br>

### A - Ground-based Measurements
|    | Dataset/Collection | latest Open Data processed | latest Open Data available |
|:-----:|:-----|:-----:|:-----:|
| A1 | [Automatic weather stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a1---automatic-weather-stations---measured-values) | 🟢 | 🟡 [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn) <!-- available as BETA in Q1-2025 --> |
| A2 | [Automatic precipitation stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a2---automatic-precipitation-stations---measured-values) | 🟢 | 🟡 [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn-precip) <!-- available as BETA in Q1-2025 --> |
| A3 | [Automatic tower stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/tree/main?tab=readme-ov-file#a3---automatic-tower-stations---measured-values) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn-tower) <!-- available as BETA in Q1-2025 --> |
| A4 | [Automatic soil stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a4---automatic-soil-stations---measured-values) *- Data not yet available* |   |   |
| A5 | [Manual precipitation stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a5---manual-precipitation-stations---measured-values) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nime) <!-- available as BETA in Q1-2025 --> |
| A6 | [Totaliser precipitation stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a6---totaliser-precipitation-stations---measured-values) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot) <!-- available as BETA in Q1-2025 --> |
| A7 | [Pollen stations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a7---pollen-stations---measured-values) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-pollen) <!-- available as BETA in Q1-2025 --> |
| A8 | [Meteorological visual observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a8---meteorological-visual-observations) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-obs) <!-- available as BETA in Q1-2025 --> |
| A9 | [Phenological observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a9---phenological-observations) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-phenology) <!-- available as BETA in Q1-2025 --> |

<br>

### B - Atmosphere Measurements
|    | Dataset/Collection | latest Open Data processed | latest Open Data available |
|:-----:|:-----|:-----:|:-----:|
| B1 | [Radio soundings](https://github.com/MeteoSwiss/opendata-atmosphere-measurements/blob/main/README.md#1-radio-soundings) | ⚪ | ⚪ |
| B2 | Raman-LIDAR for Meteorological Observation (RALMO) *- not yet realised* |  |  |
| B3 | LIDAR Ceilometer CHM15K *- not yet realised* |  |  |
| B4 | Ozone measurements – Total column (Dobson, Brewer) *- not yet realised* |  |  |
| B5 | Ozone measurements – Profiles (O3 radio soundings, SOMORA) *- not yet realised* |  |  |
| B6 | Swiss Alpine Climate Radiation Monitoring (SACRaM) *- not yet realised* |  |  |

<br>

### C - Climate Data
|    | Dataset/Collection | latest Open Data processed | latest Open Data available |
|:-----:|:-----|:-----:|:-----:|
| C1 | [Climate stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations-homogeneous-measurements) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn) <!-- available as BETA in Q1-2025 --> |
| C2 | [Climate precipitation stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#2-climate-precipitation-stations-homogeneous-measurements) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn-precip) <!-- available as BETA in Q1-2025 --> |
| C3 | [*Ground-based* spatial climate data - Precipitation, Temperature, Relative Sunshine Duration](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#c3---ground-based-spatial-climate-data) | 🟡 | ⚪ [PoC]() |
| C4 | [*Satellite-based* spatial climate data - Global, Diffuse & Direct Radiation, Cloud Fractional Cover](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#c4---satellite-based-spatial-climate-data) | 🟡 | ⚪ [PoC]() |
| C5 | [*Radar-based* spatial climate data - Maximum Hailstone Size, Number of Hail Days](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#c5---radar-based-spatial-climate-data) *- expected to be available in May 2025* |  |  |
| C6 | [Climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals) | 🟡 | ⚪ |
| C7 | [Spatial climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#7-spatial-climate-normals) | 🟡 | ⚪ |
| C8 | [Climate scenarios](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#8-climate-scenarios) | 🟢 CH2018 | ⚪ |

<br>

### D - Radar Data
|    | Dataset/Collection | latest Open Data processed | latest Open Data available |
|:-----:|:-----|:-----:|:-----:|
| D1 | [Precipitation radar products](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) | ⚪ | ⚪ |
| D2 | [Reflectivity-based radar products - ... ?](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) || ⚪ | ⚪ |
| D3 | [Hail radar products - Probability of Hail, Maximum Expected Severe Hail Size](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) | ⚪ | ⚪ |
| D4 | [Convection radar products](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) *- not yet realised* |  |  |
| D5 | [Polar 3D radar products](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) *- not yet realised* |  |  |

<br>

### E - Forecast Data
|    | Dataset/Collection | latest Open Data processed | latest Open Data available |
|:-----:|:-----|:-----:|:-----:|
| E1 | [Short-term forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#1-short-term-forecast-data) | ⚪ | ⚪ |
| E2 | [Numerical weather forecasting model CH1](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#2-numerical-weather-forecasting-model) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/#/collections/ch.meteoschweiz.ogd-forecasting-icon-ch1) |
| E3 | [Numerical weather forecasting model CH2](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#2-numerical-weather-forecasting-model) | 🟡 | ⚪ [ALPHA](https://sys-data.int.bgdi.ch/browser/#/collections/ch.meteoschweiz.ogd-forecasting-icon-ch2) |
| E4 | [Local forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#3-local-forecast-data) | 🟡 | ⚪ |

<br>
