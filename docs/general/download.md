---
sidebar_position: 2
---

# Download data

For the Open Data download, MeteoSwiss uses the [Federal Spatial Data Infrastructure FSDI](https://www.geo.admin.ch/en/federal-spatial-data-infrastructure-fsdi), which is operated by [swisstopo](https://www.swisstopo.admin.ch/en/coordination-geo-information-and-services-cogis).

Read the terms and conditions for [using the infrastructure](https://opendatadocs.meteoswiss.ch/general/terms-of-use#4-use-of-the-infrastructure).

You want to learn about how to [download files automatically](#automatically-download-files).

You want to learn about how data files are structured:
- 'data granularities' respectively 'time resolutions',
- 'update cycles' respectively 'time periods'.

You want to learn about how date/time, time intervals and missing values are represented.


## Automatically download files

The [FSDI provides a REST API](https://www.geo.admin.ch/en/rest-interface-stac-api) which adheres to the OGC STAC API standard.

Each dataset is in its own collection - calling the `/collections` endpoint will show **all collections available**:
- **Example:** [`https://data.geo.admin.ch/collections`](https://data.geo.admin.ch/api/stac/v1/collections)

Each collection has a description - calling the [GET collections](https://data.geo.admin.ch/api/stac/static/spec/v1/api.html#operation/getCollections) endpoint, will show **all collection metadata of a particular collection**:
- **Example:** Get the details of the collection "Automatic weather stations – Measured values": [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn)

<!--

### Get the available download possibilities of a dataset
Use the [GET features](https://data.geo.admin.ch/api/stac/static/spec/v0.9/api.html#operation/getFeatures) endpoint.

E.G [Get the all downloads of the dataset "Wind Energy Plants](https://data.geo.admin.ch/api/stac/v0.9/collections/ch.bfe.windenergieanlagen/items):
```
https://data.geo.admin.ch/api/stac/v0.9/collections/ch.bfe.windenergieanlagen/items
```

### Get all datasets published within a time period
Use the [GET search](https://data.geo.admin.ch/api/stac/static/spec/v0.9/api.html#operation/getSearchSTAC) endpoint.

E.G [Get the all dataset acquired after 2022-02-01](https://data.geo.admin.ch/api/stac/v0.9/search?datetime=2022-02-01/..):
```
https://data.geo.admin.ch/api/stac/v0.9/search?datetime=2022-02-01/..
```
Time intervalls can be expressed as followed:
* A date-time: "2018-02-12T23:20:50Z"
* A closed interval: "2018-02-12T00:00:00Z/2018-03-18T12:31:12Z"
* Open intervals: "2018-02-12T00:00:00Z/.." or "../2018-03-18T12:31:12Z"

-->

<!-- To download a file call the `/collections/<collectionname>/items?` endpoint for a list of items and a link to the files is in the asset property in each feature returned. The picture below illustrates this. -->

### How to check for new data

When downloading data from the STAC API, you might want to make sure to always retrieve the most current data.

By default, asset objects are cached for 2 hours (Exception: Collections with 10 minute values are cached for 10 seconds). <!-- But there might be objects, that are updated more frequently. -->

We highly recommend to use preconditioning via the `If-Match` or `If-None-Match` headers (mostly the latter one) when making calls to the STAC API. This reduces unnecessary traffic.
- When the client sends an `If-None-Match` header containing the `ETag` of the current (local) version of the requested object, the server compares it to the currently available resource's `ETag` on the server.
- Only in case the two values don't match, the requested object is sent.
- Otherwise the server responds with a `304 Not Modified` without a body, which tells the user (i.e. the client) that his version of the asset is still good to use.

For more information check [swisstopo's STAC API documentation](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data/operation/getAssetObject).

### Examples

#### Ground-based measurements - Point data

This [Jupyter notebook](./docs/assets/notebooks/MonthlyMeanGlobalRadiation_HAI.ipynb) shows a simplified workflow for downloading and processing ground-based measurements of station `Salen-Reutenen (HAI)` from the STAC API.
- The code used in the notebook is for demo purposes only. Code quality is not on production-grade level.
- The packages that are required in order to run the Jupyter notebook are specified in the [Pipfile](./Pipfile). A simple `pipenv install` will install the dependencies in a virtual environment on your machine.

<!-- #### Radar data - Grid data

See [Import Data into QGIS](...) to see how a downloaded *radar* file can be imported into QGIS. -->







## 3. How data files are structured

### 3.1 Column separators and decimal dividers
Generally, columns are separated with a semicolon (`;`).

The decimal divider is a full stop (`.`).



### 3.2 Data granularity
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



### 3.3 Update frequency
For [Ground-based](https://github.com/MeteoSwiss/opendata/blob/main/README.md#a-ground-based-measurements) and [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/blob/main/README.md#b-atmosphere-measurements) as well as for [Homogenous Climate Data Series](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#1-climate-stations) and [Climate Normals](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#6-climate-normals) MeteoSwiss provides an optimized directory structure separating older historical data, which is not updated regularly, and more recent data, which is updated more often. For realtime data we provide a third "now" directory with a high update frequency.

This is the overview:

| Type | Description | Update frequency | Used for |
| ---- | ----------- | ------------ | -------- |
| `historical` | From the start of the measurement until December 31st of last year | Once a year | [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `m`, `d`, `h`, `t` |
| `recent` | From January 1st of this year until yesterday | Daily at 12UTC | [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `m`, `d`, `h`, `t` |
| `now` | The most recent realtime data from yesterday 12UTC to now | Every 10min | Only [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `h`, `t` |
| `no type` | For certain data types this concept does not apply | varies | varies (e.g. [Granularity](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#data-granularity) `y`) |

## Automatically download files
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







## 4. How date/time, time intervals and missing values are represented

### 4.1 Time stamps and time intervals
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



### 4.2 Missing values
Missing values (e.g. due to instrument failure) are empty fields. Empty columns are used when a parameter is not measured at all at a certain station.


