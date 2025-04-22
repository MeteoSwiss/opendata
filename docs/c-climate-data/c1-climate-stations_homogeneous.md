---
sidebar_position: 1
---

# Climate stations - Homogeneous measurements
The [Swiss National Basic Climatological Network "Swiss NBCN"](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/swiss-national-basic-climatological-network.html) connects the major ground-based stations within the MeteoSwiss monitoring network. It consists of around 30 climate monitoring stations.

They are able to provide the five parameters of temperature (average, minimum and maximum), precipitation and sunshine hours. Long data series for all five parameters are available predominantly from stations at an altitude of under 1,000 metres above sea level. In most cases, higher-altitude stations are only able to provide long data series for average temperature and precipitation.

The network is supplemented by around 45 [climate precipitation stations](/c-climate-data/c2-climate-percipitation-stations_homogeneous). 

The [homogenous time series data](https://www.meteoswiss.admin.ch/climate/climate-change/changes-in-temperature-precipitation-and-sunshine/homogeneous-data-series-since-1864.html) for temperature, precipitation, wind, sunshine, humidity, radiation and pressure date back, in some cases, to the mid-nineteenth century.

## Data download

:::warning

We are currently setting up our service as Beta. During this phase everything is subject to change without prior notice.
- Not all data granularities are available for all stations yet.
- Not all `historical` files (update frequency) are available for all stations yet.

:::

You can access the available Open Data via [https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn)

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. A file for a station contains **all available parameters in one file**. There are files with daily `d`, monthly `m` and yearly `y` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](/general/download#data-granularity).
   
    Depending on the granularity there are files with [update frequency](/general/download#update-frequency) `recent` and `historical`.
    
    See e.g. files for station `Segl-Maria (SIA)` with all granularities and update frequencies mentioned: [`ogd-nbcn_sia_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn/items/sia)
  </TabItem>
</Tabs>

## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.9 MB per file.

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier that depends on the time resolution (e.g. `th9120mv` for "Air temperature 2 m above ground; deviation of the homogeneous monthly mean to the norm 9120").
    
    [`ogd-nbcn_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn/ogd-nbcn_meta_parameters.csv) provides a list of all parameter identifiers with explanation, time interval, decimal places, data type and unit of measurement.
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-nbcn_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn/ogd-nbcn_meta_stations.csv) provides a list of all station identifiers with name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages.
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-nbcn_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn/ogd-nbcn_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>

## Data usage

See e.g. MeteoSwiss' [Swiss NBCN network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-klima&lang=en&table=false&compare=y).

Learn more about MeteoSwiss' [climate analyses and expertise](https://www.meteoswiss.admin.ch/services-and-publications/service/weather-and-climate-products/climate-analyses-and-expertise.html), and through [our blog articles, category ‘Climate’](https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog.html#order=date-desc&page=1&pageGroup=blog-article&tenant=mchweb&category=climate) (in German, French and Italian).
