---
sidebar_position: 3
---

# Local forecast data

MeteoSwiss produces point forecasts for about 6000 locations, which are displayed on our [MeteoSwiss App](https://www.meteoswiss.admin.ch/services-and-publications/service/weather-and-climate-products/meteoswiss-app.html) and [website](https://www.meteoswiss.admin.ch/local-forecasts/geneva/1201.html#forecast-tab=detail-view). These forecasts are produced by optimally combining the best sources of information available to generate seamless forecasts for nine full days (including the current day). Further information can be found in [Generation of high-quality localised forecasts](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/generation-of-high-quality-localised-forecasts.html).

New forecasts for temperature, precipitation, wind, clouds, sunshine, radiation and [weather symbols*](https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/weather-symbols.html) are available every hour. Please note that these forecasts are updated more frequently on our app.

*The MeteoSwiss graphics are proprietary and cannot be reused. However, the number and description of the weather symbols may be utilised and matched with graphics that are permitted for use.

## Data download

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically

Download **files per meteorological paramerer** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-local-forecasting`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-local-forecasting)

Read our documentation on [how to download files automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-local-forecasting`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-local-forecasting)


## Data structure

The data is split by parameter. A file for a parameter contains all available locations in one file. Locations consist of postal codes, points of interest in the mountains (e.g peaks, mountain huts) as well as weather stations. There are files with hourly, 3-hourly and daily values. Each parameter is updated every hour.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="hourly-parameters" label="Hourly and 3-hourly parameters">
    To explain time in UTC and conventions  

    Parameters are:
    | Identifier | Description |
    |:----------:|:------------|
    | `tre200s0` | Air temperature 2 m above ground; current value | 
    | `rre150z0` | Precipitation; ten minutes total |

  </TabItem>
  <TabItem value="daily-parameters" label="Daily parameters">
    To explain time in UTC and conventions
    
    Parameters are:
    | Identifier | Description |
    |:----------:|:------------|
    | `tre200s0` | Air temperature 2 m above ground; current value | 
    | `rre150z0` | Precipitation; ten minutes total |
    
  </TabItem>
</Tabs>


## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤5.3 MB per file.


## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier that depends on the time resolution (e.g. `dkl010z0` for "wind direction; ten-minute average").
    
    [`ogd-smn_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/ogd-smn_meta_parameters.csv) provides a list of all parameter identifiers with explanation, time interval, decimal places, data type and unit of measurement.
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-smn_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/ogd-smn_meta_stations.csv) provides a list of all station identifiers with name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages.
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-smn_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/ogd-smn_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>


## Data usage

See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en).

:::info

For **climate analyses (long-term evolution or change)**, use the [Homogeneous data series](https://opendatadocs.meteoswiss.ch/c-climate-data) instead.

:::



