---
sidebar_position: 4
---

# Local forecast data

MeteoSwiss produces point forecasts for about 6'000 locations, which are displayed on our [MeteoSwiss App](https://www.meteoswiss.admin.ch/services-and-publications/service/weather-and-climate-products/meteoswiss-app.html) and [website](https://www.meteoswiss.admin.ch/local-forecasts/geneva/1201.html#forecast-tab=detail-view). These forecasts are produced by optimally combining the best sources of information available to generate seamless forecasts for nine full days (including the current day). Further information can be found in [Generation of high-quality localised forecasts](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/generation-of-high-quality-localised-forecasts.html).

New forecasts for temperature, precipitation, wind, clouds, sunshine, radiation and [weather symbols*](https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/weather-symbols.html) are available every hour. Please note that these forecasts are updated more frequently on our app.

*The MeteoSwiss graphics are proprietary and cannot be reused. However, the number and description of the weather symbols may be utilised and matched with graphics that are permitted for use.

## Data download

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically

Download **files per meteorological parameter** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-local-forecasting`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-local-forecasting)

Read our documentation on [how to download files automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-local-forecasting`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-local-forecasting)


## Data structure

The data is split by parameter. A file for a parameter contains all available locations in one file. Locations consist of postal codes, points of interest in the mountains (e.g peaks, mountain huts) as well as weather stations. There are files with hourly, 3-hourly and daily values. Each parameter is updated every hour.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="hourly-parameters" label="Hourly and 3-hourly parameters">
    Hourly parameters can be considered as an aggregation (mean, max, sum) over the preceeding hour or in some specific cases an instantaneous value (cloud cover, zero degree level). 3-hourly parameters are always an aggregation over the last 3 hours. As a result, the reference timestamp always defines the end of the aggregation interval*. Both hourly and 3-hourly parameters have an hourly temporal granularity although they represent different temporal aggregation intervals.

    Parameters are:
    | Identifier | Group         | Description                                                              |
    |:----------:|:-------------:|:-------------------------------------------------------------------------|
    | `dkl010h0` | Wind          | Wind direction; hourly mean                                              |
    | `fu3010h0` | Wind          | Wind speed scalar; hourly mean in km/h                                   |
    | `fu3010h1` | Wind          | Gust peak (one second); hourly maximum in km/h                           |
    | `fu3q10h0` | Wind          | Wind speed; hourly mean, 10% quantile in km/h                            |
    | `fu3q10h1` | Wind          | Gust peak; hourly maximum, 10% quantile in km/h                          |
    | `fu3q90h0` | Wind          | Wind speed; hourly mean, 90% quantile in km/h                            |
    | `fu3q90h1` | Wind          | Gust peak; hourly maximum, 90% quantile in km/h                          |
    | `gre000h0` | Radiation     | Global radiation; hourly mean                                            |
    | `jww003i0` | Graphics      | MeteoSwiss-Icon, weathertype, preceding 3 hours, forecast                |
    | `nprohihs` | Clouds        | High cloud cover                                                         |
    | `nprolohs` | Clouds        | Low cloud cover                                                          |
    | `npromths` | Clouds        | Medium cloud cover                                                       |
    | `ods000h0` | Radiation     | Diffuse radiation; hourly mean                                           |
    | `rp0003i0` | Precipitation | Probability of precipitation during 3 hours                              |
    | `rre003i0` | Precipitation | Total precipitation during 3 hours                                       |
    | `rre150h0` | Precipitation | Precipitation; hourly total                                              |
    | `rreq10h0` | Precipitation | Precipitation; hourly total, 10% quantile                                |
    | `rreq90h0` | Precipitation | Precipitation; hourly total, 90% quantile                                |
    | `sre000h0` | Sunshine      | Sunshine duration; hourly total                                          |
    | `tre200h0` | Temperature   | Air temperature 2 m above ground; hourly mean                            |
    | `treq10h0` | Temperature   | Air temperature 2 m above ground; hourly mean, 10% quantile              |
    | `treq90h0` | Temperature   | Air temperature 2 m above ground; hourly mean, 90% quantile              |
    | `zprfr0hs` | Temperature   | Zero degree level; hourly value, forecast                                |

*This is consistent with the [timestamp conventions for ground-based measurement data](/general/download#time-stamps-and-time-intervals).

  </TabItem>
  <TabItem value="daily-parameters" label="Daily parameters">
    Daily parameters can be considered as an aggregation (mean, max, min, sum) over calendar days. Days are usually defined in local time (00:00 - 24:00 LT), which is UTC+1 in winter and UTC+2 in summer. For some parameters, the equivalent also exists for UTC calendar days (00:00 - 24:00 UTC), but only available for weather stations as it is used primarily for verification purposes. In some specific cases, the daily parameter does not represent a full 24h aggregation interval, but only a subset of the day (e.g. daytime period or 06:00 - 18:00). All daily parameters have a daily temporal granularity (one value per day) with a reference timestamp a the beginning (00:00) of the respective day*. 
    
    Parameters are:
    | Identifier | Group         | Description                                                              |
    |:----------:|:-------------:|:-------------------------------------------------------------------------|
    | `jp2000d0` | Graphics      | MeteoSwiss pictogram number, daily value (valid for daytime period)      |
    | `rka150d0` | Precipitation | Precipitation; daily total 00:00 - 24:00 UTC                             |
    | `rka150p0` | Precipitation | Precipitation; daily total 00:00 - 24:00 local time                      |
    | `rreq10p0` | Precipitation | Precipitation; daily total 00:00 - 24:00 local time, 10% quantile        |
    | `rreq90p0` | Precipitation | Precipitation; daily total 00:00 - 24:00 local time, 90% quantile        |
    | `tre200dn` | Temperature   | Air temperature 2 m above ground; daily minimum 00:00 - 24:00 UTC        |
    | `tre200dx` | Temperature   | Air temperature 2 m above ground; daily maximum 00:00 - 24:00 UTC        |
    | `tre200pn` | Temperature   | Air temperature 2 m above ground; daily minimum 00:00 - 24:00 local time |
    | `tre200px` | Temperature   | Air temperature 2 m above ground; daily maximum 00:00 - 24:00 local time |

*This is consistent with the [timestamp conventions for ground-based measurement data](/general/download#time-stamps-and-time-intervals).
    
  </TabItem>
</Tabs>


## Data format

The data format is [`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤300 KB per file for daily parameters and ≤33 MB for hourly ones. 

:::note

Local forecast CSV files are encoded in [`Latin1 (ISO-8859-1)`](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) instead of `Windows-1252` as for the ground-based measurement data.

:::

Date/Time is expressed as `YYYYMMDDHHMM` and represents time in UTC.


## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameters">
    All parameters have a unique identifier that depends on the meteorological variable, the time resolution and possibly the ensemble statistic used (e.g. `rreq90h0` for "Precipitation; hourly total, 90% quantile").
    
    [`ogd-local-forecasting_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-local-forecasting/ogd-local-forecasting_meta_parameters.csv) provides a list of all parameter identifiers available for the local forecast data collection with description, time interval, decimal places, data type and units.
  </TabItem>
  <TabItem value="locations" label="Locations">
    All locations should be considered as point locations. There are three types of locations:
    - weather stations (`point_type_id`=1)
    - postal codes (`point_type_id`=2)
    - points of interest in the mountains such as peaks, passes and huts (`point_type_id`=3)
    
    :::note
    
    Each location has an identifier (`point_id`) which is unique only within its point type. Only the combination of `point_type_id` and `point_id` is unique accross all locations, so both labels should be used to identify a specific point in the data CSV files.
    
    :::

    [`ogd-local-forcasting_meta_point.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-local-forecasting/ogd-local-forcasting_meta_point.csv) provides a list of all points with their respective id, name, type, altitude and coordinates.
  </TabItem>
</Tabs>


## Data usage

See e.g. MeteoSwiss [website homepage](https://www.meteoswiss.admin.ch/#tab=forecast-map) or [local forecasts](https://www.meteoswiss.admin.ch/local-forecasts/geneva/1201.html#forecast-tab=detail-view).


