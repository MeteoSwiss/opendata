*Status:* public, in preparation / [change log](https://github.com/MeteoSwiss/opendata/commits/main) <br>
*Maintainer:* Federal Office of Meteorology and Climatology MeteoSwiss, [opendata.en@meteoswiss.ch](mailto:opendata.en@meteoswiss.ch)

<!-- [![GitHub commit](https://img.shields.io/github/last-commit/MeteoSwiss/opendata)](https://github.com/MeteoSwiss/opendata/commits/master) -->

<!-- [Auf Deutschj](#meteoschweiz-open-data) | [En français](#meteosuisse-open-data) | [In italiano](#meteosvizzera-open-data) -->

# MeteoSwiss - Open Data
Welcome to MeteoSwiss' Open Data documentation.

<!-- For now MeteoSwiss provides its Open Data to be consumed by **[downloading the data as files](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#getting-started-with-download)**. -->

From April 2025, MeteoSwiss will make its data freely available to the public as Open Government Data (OGD).

The data can be **[downloaded as pre-processed files](https://github.com/MeteoSwiss/opendata/blob/main/README.md#getting-started-with-download)**. In a later stage, customised queries via API will also be possible.

| A <br> [Ground-based Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#a---ground-based-measurements) | B <br> [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#b---atmosphere-measurements) | C <br> [Climate Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#c---climate-data) | D <br> [Radar Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#d---radar-data) | E <br> [Forecast Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#e---forecast-data) |
|-----|-----|-----|-----|-----|

> [!NOTE]
> In order to also provide **[access to the data via APIs](https://github.com/MeteoSwiss/opendata-api/blob/main/README.md) in future**, the necessary preparatory work is underway. As soon as an introduction date for this second type of access can be estimated, it will be communicated here.

## General information

### Terms of Use
[Here](https://github.com/MeteoSwiss/opendata-terms-of-use/blob/main/README.md) *[upcoming]* you'll find information about data license and conditions for usage.

### Frequently asked Questions
[Here](https://github.com/MeteoSwiss/opendata-faq/blob/main/README.md) *[upcoming]* you'll find answers to the most frequently asked questions. 

We continuously update these based on questions received.

### Getting Started with Download
[Here](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md) you'll find information about data granularity, structure and update cycle, time stamps and time intervals as well as on column separators, decimal dividers and missing values.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/en/Download --> 

### Staying up to Date
geo.admin.ch's download service will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](https://www.swisstopo.admin.ch/en) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, 
- please check [Release Notes](..) (upcoming) where swisstopo announces released changes that might affect your integration.

In the event of malfunctions at land-based stations, 
- check for according messages of [interruptions in data availability](https://www.meteoswiss.admin.ch/services-and-publications/applications/data-availability.html).

#### Operational Status & Contact 
| System | Contact Point | Status |
|:-----|:-----|:-----:|
| Open Data generation & integration | MeteoSwiss' [Open Data Support](https://www.meteoswiss.admin.ch/about-us/contact/contact-form.html) | [see below per Open Data product](https://github.com/MeteoSwiss/opendata/blob/main/README.md#understanding-meteoswiss-open-data)
| Open Data download service | swisstopo's [geo.admin.ch Operations](https://www.geo.admin.ch/en/impressum-responsibilities-and-contacts) | :green_circle: UP |
| ... | CSCS' [... Operations](...) | :white_circle: |
| Geodata metadata catalog | swisstopo's [geocat.ch ](https://info.geocat.ch/en/contact) | :yellow_circle: PoC |
| opendata.swiss metadata catalog | FSO's [OGD Office](https://opendata.swiss/en/contact) | :white_circle: |

<br>

<!-- For operational status, see [Download API Status & Contact](https://github.com/MeteoSwiss/opendata-status/blob/main/README.md) (upcoming). --> 

<!-- We keep interested parties and users up to date on our plans and changes:
- Register here for [our mailing list](...). --> 

## Understanding MeteoSwiss' Open Data
The documentations of the Open Data products linked below explain what the data represents, its models, abstractions and terminology.

The *Open Data products in italics* are not yet realised.

### A - Ground-based Measurements
|    |    | latest Open Data generated | latest Open Data integrated |
|:-----:|:-----|:-----:|:-----:|
| A1 | [Automatic weather stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a1---automatic-weather-stations---measured-values) | :green_circle: | :yellow_circle: [POC](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn/items/hai?.language=en) <br> available as BETA in Q1-2025 |
| A2 | [Automatic precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a2---automatic-precipitation-stations---measured-values) | :green_circle: | available as BETA in Q1-2025 |
| A3 | [Automatic tower stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/tree/main?tab=readme-ov-file#a3---automatic-tower-stations---measured-values) | :green_circle: | available as BETA in Q1-2025 |
| A4 | *[Automatic soil stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a4---automatic-soil-stations---measured-values)* | *not yet realised* |  |
| A5 | [Manual precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a5---manual-precipitation-stations---measured-values) | :green_circle: | available as BETA in Q1-2025 |
| A6 | [Totaliser precipitation stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a6---totaliser-precipitation-stations---measured-values) | :green_circle: | available as BETA in Q1-2025 |
| A7 | [Pollen stations – Measured values](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a7---pollen-stations---measured-values) | :green_circle: | available as BETA in Q1-2025 |
| A8 | [Meteorological visual observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a8---meteorological-visual-observations) | :green_circle: | available as BETA in Q1-2025 |
| A9 | [Phenological observations](https://github.com/MeteoSwiss/opendata-ground-based-measurements/blob/main/README.md#a9---phenological-observations) | :green_circle: | available as BETA in Q1-2025 |

### B - Atmosphere Measurements
|    |    | latest Open Data generated | latest Open Data integrated |
|:-----:|:-----|:-----:|:-----:|
| B1 | [Radio soundings](https://github.com/MeteoSwiss/opendata-atmosphere-measurements/blob/main/README.md#1-radio-soundings) | :white_circle: | :white_circle: |
| B2 | *Raman-LIDAR for Meteorological Observation (RALMO)* | *not yet realised* |  |
| B3 | *LIDAR Ceilometer CHM15K* | *not yet realised* |  |
| B4 | *Ozone measurements – Total column (Dobson, Brewer)* | *not yet realised* |  |
| B5 | *Ozone measurements – Profiles (O3 radio soundings, SOMORA)* | *not yet realised* |  |
| B6 | *Swiss Alpine Climate Radiation Monitoring (SACRaM)* | *not yet realised* |  |

### C - Climate Data
|    |    | latest Open Data generated | latest Open Data integrated |
|:-----:|:-----|:-----:|:-----:|
| C1 | [Climate stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations-homogeneous-measurements) | :green_circle: | available as BETA in Q1-2025 |
| C2 | [Climate precipitation stations – Homogeneous measurements](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#2-climate-precipitation-stations-homogeneous-measurements) | :green_circle: | available as BETA in Q1-2025 |
| C3 | [*Ground-based* spatial climate data - Precipitation, Temperature, Relative Sunshine Duration](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#c3---ground-based-spatial-climate-data) | :yellow_circle: PoC | :yellow_circle: PoC |
| C4 | [*Satellite-based* spatial climate data - Global, Diffuse & Direct Radiation, Cloud Fractional Cover](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#c4---satellite-based-spatial-climate-data) | :yellow_circle: PoC | :yellow_circle: PoC |
| C5 | [*Radar-based* spatial climate data - Maximum Hailstone Size, Number of Hail Days](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#c5---radar-based-spatial-climate-data) | :white_circle: | *will be available in May 2025* |
| C6 | [Climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals) | :white_circle: | :white_circle: |
| C7 | [Spatial climate normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#7-spatial-climate-normals) | :white_circle: | :white_circle: |
| C8 | [Climate scenarios](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#8-climate-scenarios) | :white_circle: | :white_circle: |

### D - Radar Data
|    |    | latest Open Data generated | latest Open Data integrated |
|:-----:|:-----|:-----:|:-----:|
| D1 | [Precipitation radar products](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) | :white_circle: | :white_circle: |
| D2 | [Reflectivity-based radar products - ... ?](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) | :white_circle: | :white_circle: |
| D3 | [Hail radar products - Probability of Hail, Maximum Expected Severe Hail Size](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data) | :white_circle: | :white_circle: |
| D4 | *[Convection radar products](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data)* | *not yet realised* | *not yet realised* |
| D5 | *[Polar 3D radar products](https://github.com/MeteoSwiss/opendata-radar-data/blob/main/README.md#d-radar-data)* | *not yet realised* | *not yet realised* |

### E - Forecast Data
|    |    | latest Open Data generated | latest Open Data integrated |
|:-----:|:-----|:-----:|:-----:|
| E1 | [Short-term forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#1-short-term-forecast-data) | :white_circle: | :white_circle: |
| E2 | [Numerical weather forecasting model CH1](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#2-numerical-weather-forecasting-model) | :white_circle: | :white_circle: |
| E3 | [Numerical weather forecasting model CH2](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#2-numerical-weather-forecasting-model) | :white_circle: | :white_circle: |
| E4 | [Local forecast data](https://github.com/MeteoSwiss/opendata-forecast-data/blob/main/README.md#3-local-forecast-data) | :white_circle: | :white_circle: |

<br>
