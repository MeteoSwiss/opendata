# MeteoSwiss - Open Data

## Getting Started

### Introduction
MeteoSwiss provides its various datasets to be consumed by downloading the data as one or more files. 

In order to also provide access to the data via APIs in future, the necessary design and implementation work is currently underway.

### Understanding MeteoSwiss' Open Data
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> For reference, here are the direct links:
- [Automatic weather stations – Measurement values](https://github.com/MeteoSwiss/ogd-smn/tree/main?tab=readme-ov-file#readme)
- [Automatic precipitation stations – Measurement values](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)
- [](..)

### Getting Started with Download

<!-- As stated above, you will need your API key in order to download the data as one or more files. --> See [Download](..) for more information. 
 
### Staying up to Date
Our *Download* API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](..) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, please check [Release Notes](..) where they announce released changes that might affect your integration.

For operational status, see [API Status & Contact](..).


---
---


### 2.2. General information on the data

#### 2.2.1. Data granularity
For all types of data MeteoSwiss uses standard granularities. Depending on the application not all granularites are available. For measurement data the lowest granulartiy is usually called 'raw data' (Rohwert) or 'original data' (Originalwert). Higher granularities are called 'aggregations' or 'aggregated values'. The World Meteorological Organization (WMO) does issue guidelines on how national weather services have to aggregate values and MeteoSwiss does follow these guidelines.

If you need hourly, daily, monthly or yearly values, we strongly recommend that you download the according granularity. Downloading the raw data (10min) and calculating sums or means yourself, will not always lead to the same results! Furthermore for historic data it is possibly that manual data corrections have only been applied on higher granularities (like hourly or daily data), which means that historic raw data can still contain errors.

This is the overview of the granularities used by MeteoSwiss:

| Granularity | Name | Description | Used for |
| ----------- | ---- | ----------- | -------- |
| T | 10min value | At MeteoSwiss this is the standard granularity for realtime data of the automatic measurement network SwissMetNet (SMN) or the model output. Meteorological observations do also use this granularity but only offer values at fixed intervals like 6UTC, 12UTC and 18UTC (called "Terminwerte")! | [SMN](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-measurement-network.html), [OBS](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-observation-network.html) |
| H | Hourly value | Either aggregated from 10min values or provided by the instrument/network | [Pollen](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-pollen-monitoring-network-swisspollen.html) |
| D | Daily value | Used throughout the MeteoSwiss measurement network before automatization in 1981 started. Today still used for manual precipitation and snow measurements. For automatic stations daily values are calculated using 10min values according to WMO guidelines. | [NIME](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html) |
| M | Monthly value | Usually aggregated from daily values and widely used in climatology for homogenized data and norm values and for seasonal data. For some very old data series (pre 1864) only monthly data exists!| [Homogeneous data series](https://www.meteoswiss.admin.ch/climate/climate-change/changes-in-temperature-precipitation-and-sunshine/homogeneous-data-series-since-1864.html), [Climate normals](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/climate-normals.html) |
| Y | Yearly value | Usually aggregated from daily values and mostly used in climatology or climate change screnarios. | [Climate change scenarios](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-change-scenarios.html)|

#### 2.2.2. Data structure and update cycle
For measurement data MeteoSwiss provides an optimized directory structure separating older historical data, which is not updated regularly, and more recent data, which is updated more often. For realtime data we provide a third "now" directory with a high update frequency.

This is the overview:

| Type | Description | Update cycle | Used for |
| ---- | ----------- | ------------ | -------- |
| historical | From the start of the measurement until December 31st of last year | Once a year | [Granularity](https://github.com/MeteoSwiss/publication-opendata/tree/main#221-data-granularity) M, D, H, T |
| recent | From January 1st of this year until yesterday | Daily at 12UTC | [Granularity](https://github.com/MeteoSwiss/publication-opendata/tree/main#221-data-granularity) M, D, H, T |
| now | The most recent realtime data from yesterday 12UTC to now | Every 10min | Only [Granularity](https://github.com/MeteoSwiss/publication-opendata/tree/main#221-data-granularity) H, T |
| `no type` | For certain data types this concept does not apply | varies | varies (e.g. [Granularity](https://github.com/MeteoSwiss/publication-opendata/tree/main#221-data-granularity) Y) |

#### 2.2.3. Time stamps and time intervals
All reference time stamps at MeteoSwiss are in [UTC](https://www.utctime.net)! Depending on the granularity the time stamp does define different intervals:
- T: The sum, mean or max/min of the last 10 minutes (ReferenceTS 16:00 = `15:50:01 to 16:00:00`)
- H: The sum, mean or max/min of the last six 10min-values (ReferenceTS 16:00 = `15:10 to 16:00`). Please note: Hourly values before 2018 were calculated differently based on the SYNOP schedule (ReferenceTS 16:00 = `14:50 to 15:40`)!
- D: For most parameters the sum, mean or max/min from 00:00 to 23:50 of the according date. Exception for precipitation and snow (manual measurement times used for consistency) where the interval is 6:00 UTC until 5:50 UTC tomorrow (ReferenceTS 22.6.2023 = `22.6.2023 6:10 UTC to 23.6.2023 6:00 UTC`)
- M: The sum, mean or max/min of the whole month from 1st to last day of month (ReferenceTS 1.6.2023 = `1.6.2023 00:10 UTC to 30.6.2023 24:00 UTC`)
- Y: The sum, mean or max/min of the whole year (ReferenceTS 1.1.2023 = `1.1.2023 00:10 UTC to 31.12.2023 24:00 UTC`)

**Accordingly, it follows that:**
- for granularity T and H the time stamp defines the end of the measurement interval and
- for higher granularities (D, M and Y) the time stamp defines the beginning of the interval!

#### 2.2.4. Column separators, decimal dividers and missing values
Generally, columns are separated with a semicolon (`;`). The decimal divider is a full stop (`.`). Missing values are indicated with a hyphen (`-`).


---


### 2.3. Surface data
MeteoSwiss operates a network of [land-based weather stations](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations.html) where current weather and climate data are automatically recorded. It covers all parts of the country and all altitude levels. The measurements are supplemented with a wide array of additional observations, ranging from manual recording of cloud cover and vegetation development, to measurements of fine particulate matter, through to a network of cameras that covers all major sections of terrain and mountain passes in Switzerland.

All MeteoSwiss surface stations have a name and an identfier consisting of three letters (e.g. `BER` for [Bern / Zollikofen](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en&station=BER&chart=hour) or `LUG` for [Lugano](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en&station=LUG&chart=hour)). Data files use this station identifier in the file name throughout all directories. A list of all station identfiers with station names, coordinates, height etc. can be found in the according metadata section.
