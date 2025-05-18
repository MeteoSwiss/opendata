---
sidebar_position: 2
---

# Daten herunterladen

:::info

**This part of the documentation** is primarily intended for technical users and **is available in English**.

:::

### Ground-based measurements
MeteoSwiss primarily uses the [Federal Spatial Data Infrastructure FSDI](https://www.geo.admin.ch/en/federal-spatial-data-infrastructure-fsdi), which is operated by [swisstopo](https://www.swisstopo.admin.ch/en/coordination-geo-information-and-services-cogis).

The documentation below relates to the data provided on the FSDI.

### Numerical weather forecasting model data
'Numerical weather forecasting model ICON-CH1/2-EPS' data are made available for download by the [CSCS - Swiss National Supercomputing Centre](https://www.cscs.ch/services/contractual-partners).

:::info

The **different download options** are documented [**here**](/e-forecast-data/e2-e3-numerical-weather-forecasting-model?download-options=pythonapi#download-options).

:::

---

## How to download files automatically  <!-- DO NOT CHANGE THIS TITLE ! -->
The [FSDI provides a REST API](https://www.geo.admin.ch/en/rest-interface-stac-api) which adheres to the OGC STAC API standard.

Each dataset is in its own collection - calling the `/collections` endpoint will **show all collections available**: [`https://data.geo.admin.ch/collections`](https://data.geo.admin.ch/api/stac/v1/collections)

Each collection has a description - calling the [`/getCollections`](https://data.geo.admin.ch/api/stac/static/spec/v1/api.html#operation/getCollections) endpoint, will **show all collection metadata of a particular collection**: e.g. get the details of the collection "Automatic weather stations": [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn)


### How to check for new data
When downloading data from the STAC API, you might want to make sure to always retrieve the most current data.

By default, asset objects are cached for 2 hours (Exception: Collections with 10 minute values are cached for 10 seconds). <!-- But there might be objects, that are updated more frequently. -->

We highly recommend to use preconditioning via the `If-Match` or `If-None-Match` headers (mostly the latter one) when making calls to the STAC API. This reduces unnecessary traffic.
- When the client sends an `If-None-Match` header containing the `ETag` of the current (local) version of the requested object, the server compares it to the currently available resource's `ETag` on the server.
- Only in case the two values don't match, the requested object is sent.
- Otherwise the server responds with a `304 Not Modified` without a body, which tells the user (i.e. the client) that his version of the asset is still good to use.

For more information check [swisstopo's STAC API documentation](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data/operation/getAssetObject).


### Examples

#### Ground-based measurements
This [Jupyter notebook](https://github.com/MeteoSwiss/opendata/blob/main/notebooks/MonthlyMeanGlobalRadiation_HAI.ipynb) shows a simplified workflow for downloading and processing ground-based measurements of station `Salen-Reutenen (HAI)` from the STAC API.
- The code used in the notebook is for demo purposes only. Code quality is not on production-grade level.
- The packages that are required in order to run the Jupyter notebook are specified in the [Pipfile](https://github.com/MeteoSwiss/opendata/blob/main/Pipfile). A simple `pipenv install` will install the dependencies in a virtual environment on your machine.

<!-- #### Radar data -->
<!-- See [Import Data into QGIS](...) to see how a downloaded *radar* file can be imported into QGIS. -->



## How CSV files are structured

### Data granularity
For all types of data MeteoSwiss uses standard granularities. Depending on the application not all granularites are available. 

For [Ground-based measurements](/de/a-data-groundbased) the lowest granulartiy is usually called 'original data' (Originalwert). Higher granularities are called 'aggregations' or 'aggregated values'. The World Meteorological Organization (WMO) does issue guidelines on how national weather services have to aggregate values and MeteoSwiss does follow these guidelines.

:::tip

If you need hourly, daily, monthly or yearly values, we strongly recommend that you download the according granularity. Downloading the raw data (10min) and calculating sums or means yourself, will not always lead to the same results! Furthermore for historic data it is possible that manual data corrections have only been applied on higher granularities (like hourly or daily data), which means that historic raw data can still contain errors.

:::

This is the overview of the granularities for [Ground-based](/de/a-data-groundbased) as well as for [Climate stations - Homogeneous data series](/de/c-climate-data/c1-climate-stations_homogeneous) and [Climate precipitation stations - Homogeneous data series](/de/c-climate-data/c2-climate-percipitation-stations_homogeneous) used by MeteoSwiss:

| Granularity | Name | Description | Used for |
| ----------- | ---- | ----------- | -------- |
| `t` | 10min value | At MeteoSwiss this is the standard granularity for realtime data of the automatic measurement network SwissMetNet (SMN) or the model output. Meteorological observations do also use this granularity but only offer values at fixed intervals like 6UTC, 12UTC and 18UTC (called "Terminwerte")! | [SMN](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-measurement-network.html), [OBS](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-observation-network.html) |
| `h` | Hourly value | Either aggregated from 10min values or provided by the instrument/network | [Pollen](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-pollen-monitoring-network-swisspollen.html) |
| `d` | Daily value | Used throughout the MeteoSwiss measurement network before automatization in 1981 started. Today still used for manual precipitation and snow measurements. For automatic stations daily values are calculated using 10min values according to WMO guidelines. | [NIME](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html) |
| `m` | Monthly value | Usually aggregated from daily values and widely used in climatology for homogenized data and norm values and for seasonal data. For some very old data series (pre 1864) only monthly data exists!| [Homogeneous climate data series](https://www.meteoswiss.admin.ch/climate/climate-change/changes-in-temperature-precipitation-and-sunshine/homogeneous-data-series-since-1864.html), [Climate normals](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/climate-normals.html) |
| `y` | Yearly value | Usually aggregated from daily values and mostly used in climatology or climate change screnarios. | [Climate change scenarios](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-change-scenarios.html)|


### Update frequency
For [Ground-based](/de/a-data-groundbased) and [Atmosphere measurements](/de/b-data-atmosphere) as well as for [Climate stations – Homogeneous data series](/de/c-climate-data/c1-climate-stations_homogeneous) and [Climate precipitation stations - Homogeneous data series](/de/c-climate-data/c2-climate-percipitation-stations_homogeneous) MeteoSwiss provides an optimized directory structure separating older historical data, which is not updated regularly, and more recent data, which is updated more often. For realtime data we provide a third "now" directory with a high update frequency.

This is the overview:

| Type | Description | Update frequency | Used for |
| ---- | ----------- | ------------ | -------- |
| `historical` | From the start of the measurement until December 31st of last year | Once a year | [Granularity](./download#data-granularity) `m`, `d`, `h`, `t` |
| `recent` | From January 1st of this year until yesterday | Daily at 12UTC | [Granularity](./download#data-granularity) `m`, `d`, `h`, `t` |
| `now` | The most recent realtime data from yesterday 12UTC to now | Every 10min | Only [Granularity](./download#data-granularity) `h`, `t` |
| `no type` | For certain data types this concept does not apply | varies | varies (e.g. [Granularity](./download#data-granularity) `y`) |


### Column separators and decimal dividers
Generally, columns are separated with a semicolon (`;`).

If you are using Windows Excel in a language version other than German, change the separator to `;` when opening the file (respectively use the 'Text Conversion Assistant' in the 'Data' menu).

:::note

Why did we choose the semicolon as a separator?
- Microsoft uses CSV files with a semicolon as separator in the default settings of the German Windows Excel version.
- We assume that a high proportion of users open our CSV files with this setting.
- We are monitoring the development of the proportion of users with this setting and reserve the right to reconsider our decision after weighing up the pros and cons.

:::

The decimal divider is a full stop (`.`).


### Encoding

CSV files are encoded in [`Windows-1252`](https://en.wikipedia.org/wiki/Windows-1252) to ensure that they are decoded correctly in Excel.

:::note

`UTF-8 BOM` would actually be a more versatile and widely used encoding that would ensure the same thing. For technical reasons, however, we still use `Windows-1252`.

:::



## How date/time, time intervals and missing values are represented

### Time stamps and time intervals
Date/Time is expressed as `dd.mm.yyyy HH:MM`.

All reference time stamps at MeteoSwiss are in [UTC](https://www.utctime.net)! Depending on the granularity the time stamp does define different intervals:
- `t`: The sum, mean or max/min of the last 10 minutes (ReferenceTS 16:00 = `15:50:01 to 16:00:00`)
- `h`: The sum, mean or max/min of the last six 10min-values (ReferenceTS 16:00 = `15:10 to 16:00`). Please note: Hourly values before 2018 were calculated differently based on the SYNOP schedule (ReferenceTS 16:00 = `15:50 to 16:40`)!
- `d`: For most parameters the sum, mean or max/min from 00:00 to 23:50 of the according date. Exception for precipitation and snow (manual measurement times used for consistency) where the interval is 6:00 UTC until 5:50 UTC tomorrow (ReferenceTS 22.6.2023 = `22.6.2023 6:10 UTC to 23.6.2023 6:00 UTC`)
- `m`: The sum, mean or max/min of the whole month from 1st to last day of month (ReferenceTS 1.6.2023 = `1.6.2023 00:10 UTC to 30.6.2023 24:00 UTC`)
- `y`: The sum, mean or max/min of the whole year (ReferenceTS 1.1.2023 = `1.1.2023 00:10 UTC to 31.12.2023 24:00 UTC`)

**Accordingly, it follows that:**
- for granularity `t` and `h` the time stamp defines the end of the measurement interval and
- for higher granularities (`d`, `m` and `y`) the time stamp defines the beginning of the interval!


### Missing values
Missing values (e.g. due to instrument failure) are empty fields. Empty columns are used when a parameter is not measured at all at a certain station.
