---
sidebar_position: 2
---

# Download data

For the Open Data download, MeteoSwiss uses the [Federal Spatial Data Infrastructure FSDI](https://www.geo.admin.ch/en/federal-spatial-data-infrastructure-fsdi), which is operated by the Federal Office of Topography swisstopo. See [Terms of Use, chapter 4. Use of the Infrastructure](https://meteoswiss.github.io/opendata-terms-of-use/#4-nutzung-der-infrastruktur).

You want to download files [manually](#1--manually-download-files) *[upcoming]* or [automatically](#2--automatically-download-files).

You want to learn how [data files are structured](#3--how-data-files-are-structured) or [date/time, time intervals and missing values are represented](#4--how-datetime-time-intervals-and-missing-values-are-represented).

<br/>

## 1 - Manually download Files
*[MeteoSwiss' Data Explorer upcoming]*

...

## 2 - Programmatically download Files
The [FSDI provides a REST API](https://www.geo.admin.ch/en/rest-interface-stac-api) which adheres to the OGC STAC API standard.

Each type of data is in its own collection - calling the `/collections` endpoint will show all collections available: <br/>
**Example:** [`https://data.geo.admin.ch/collections`](https://data.geo.admin.ch/api/stac/v0.9/collections) <br/>
**Description:** Will return all available collections in the API. 

??? - A list for **all MeteoSwiss' Open Data collections** available can be seen here: <br/>
**Example:** [`https://data.geo.admin.ch/ch.meteoschweiz.ogd...`](https://data.geo.admin.ch/ch.meteoschweiz.ogd)... <br/>
**Description:** Will return all available MeteoSwiss' Open Data collections in the API.

??? - A list for Ground-based Measurements' can be seen [here](https://meteoswiss.github.io/opendata/#a---ground-based-measurements), for Atmosphere Measurements [here](https://meteoswiss.github.io/opendata/#b---atmosphere-measurements), for Climate Data [here](https://meteoswiss.github.io/opendata/#c---climate-data), for Radar Data [here](https://meteoswiss.github.io/opendata/#d---radar-data) and for Forecast Data [here](https://meteoswiss.github.io/opendata/#e---forecast-data).

To download a file call the `/collections/<collectionname>/items?` endpoint for a list of items and a link to the files is in the asset property in each feature returned. <!-- The picture below illustrates this. -->

...

See [Import Data into QGIS](#) *[upcoming]* to see how a downloaded *radar* file can be imported into QGIS.

<br/>

## 3 - How Data Files are structured
Below you'll find information about:

- [3.1 - Column Separators and Decimal Dividers](#31---column-separators-and-decimal-dividers)
- [3.2 - Data Granularity](#32---data-granularity)
- [3.3 - Update Frequency](#33---update-frequency)

### 3.1 - Column Separators and Decimal Dividers
Generally, columns are separated with a semicolon (`;`).

The decimal divider is a full stop (`.`).

### 3.2 - Data Granularity
For all types of data MeteoSwiss uses standard granularities. Depending on the application not all granularites are available. 

For [*Ground-based* Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#a-ground-based-measurements) the lowest granulartiy is usually called 'original data' (Originalwert). Higher granularities are called 'aggregations' or 'aggregated values'. The World Meteorological Organization (WMO) does issue guidelines on how national weather services have to aggregate values and MeteoSwiss does follow these guidelines.

If you need hourly, daily, monthly or yearly values, we strongly recommend that you download the according granularity. Downloading the raw data (10min) and calculating sums or means yourself, will not always lead to the same results! Furthermore for historic data it is possible that manual data corrections have only been applied on higher granularities (like hourly or daily data), which means that historic raw data can still contain errors.

This is the overview of the granularities for [Ground-based](https://github.com/MeteoSwiss/opendata/blob/main/README.md#a-ground-based-measurements) and [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/blob/main/README.md#b-atmosphere-measurements) as well as for [Homogenous Climate Data Series](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations) and [Climate Normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals) used by MeteoSwiss:

| Granularity | Name | Description | Used for |
| ----------- | ---- | ----------- | -------- |
| `t` | 10min value | At MeteoSwiss this is the standard granularity for realtime data of the automatic measurement network SwissMetNet (SMN) or the model output. Meteorological observations do also use this granularity but only offer values at fixed intervals like 6UTC, 12UTC and 18UTC (called "Terminwerte")! | [SMN](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-measurement-network.html), [OBS](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-observation-network.html) |
| `h` | Hourly value | Either aggregated from 10min values or provided by the instrument/network | [Pollen](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-pollen-monitoring-network-swisspollen.html) |
| `d` | Daily value | Used throughout the MeteoSwiss measurement network before automatization in 1981 started. Today still used for manual precipitation and snow measurements. For automatic stations daily values are calculated using 10min values according to WMO guidelines. | [NIME](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html) |
| `m` | Monthly value | Usually aggregated from daily values and widely used in climatology for homogenized data and norm values and for seasonal data. For some very old data series (pre 1864) only monthly data exists!| [Homogeneous climate data series](https://www.meteoswiss.admin.ch/climate/climate-change/changes-in-temperature-precipitation-and-sunshine/homogeneous-data-series-since-1864.html), [Climate normals](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/climate-normals.html) |
| `y` | Yearly value | Usually aggregated from daily values and mostly used in climatology or climate change screnarios. | [Climate change scenarios](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-change-scenarios.html)|

### 3.3 - Update Frequency
For [Ground-based](https://github.com/MeteoSwiss/opendata/blob/main/README.md#a-ground-based-measurements) and [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/blob/main/README.md#b-atmosphere-measurements) as well as for [Homogenous Climate Data Series](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations) and [Climate Normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals) MeteoSwiss provides an optimized directory structure separating older historical data, which is not updated regularly, and more recent data, which is updated more often. For realtime data we provide a third "now" directory with a high update frequency.

This is the overview:

| Type | Description | Update frequency | Used for |
| ---- | ----------- | ------------ | -------- |
| `historical` | From the start of the measurement until December 31st of last year | Once a year | [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `m`, `d`, `h`, `t` |
| `recent` | From January 1st of this year until yesterday | Daily at 12UTC | [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `m`, `d`, `h`, `t` |
| `now` | The most recent realtime data from yesterday 12UTC to now | Every 10min | Only [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `h`, `t` |
| `no type` | For certain data types this concept does not apply | varies | varies (e.g. [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `y`) |

<br/>

## 4 - How Date/Time, Time Intervals and Missing Values are represented
Below you'll find information about:

- [4.1 - Time Stamps and Time Intervals](#41---time-stamps-and-time-intervals)
- [4.2 - Missing Values](#42---missing-values)

### 4.1 - Time Stamps and Time Intervals
Date/Time is expressed as `dd.mm.yyyy HH:MM`.

All reference time stamps at MeteoSwiss are in [UTC](https://www.utctime.net)! Depending on the granularity the time stamp does define different intervals:
- `t`: The sum, mean or max/min of the last 10 minutes (ReferenceTS 16:00 = `15:50:01 to 16:00:00`)
- `h`: The sum, mean or max/min of the last six 10min-values (ReferenceTS 16:00 = `15:10 to 16:00`). Please note: Hourly values before 2018 were calculated differently based on the SYNOP schedule (ReferenceTS 16:00 = `14:50 to 15:40`)!
- `d`: For most parameters the sum, mean or max/min from 00:00 to 23:50 of the according date. Exception for precipitation and snow (manual measurement times used for consistency) where the interval is 6:00 UTC until 5:50 UTC tomorrow (ReferenceTS 22.6.2023 = `22.6.2023 6:10 UTC to 23.6.2023 6:00 UTC`)
- `m`: The sum, mean or max/min of the whole month from 1st to last day of month (ReferenceTS 1.6.2023 = `1.6.2023 00:10 UTC to 30.6.2023 24:00 UTC`)
- `y`: The sum, mean or max/min of the whole year (ReferenceTS 1.1.2023 = `1.1.2023 00:10 UTC to 31.12.2023 24:00 UTC`)

**Accordingly, it follows that:**
- for granularity `t` and `h` the time stamp defines the end of the measurement interval and
- for higher granularities (`d`, `m` and `y`) the time stamp defines the beginning of the interval!

### 4.2 - Missing Values
Missing values (e.g. due to instrument failure) are empty fields. Empty columns are used when a parameter is not measured at all at a certain station.
