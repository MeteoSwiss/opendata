---
sidebar_position: 1
---

# Climate stations - Homogeneous data series
Climate stations measure various meteorological parameters. In Switzerland the first nationwide network of climate stations was put into operation in 1864. The stations that are most important for research into climate change are combined in the [Swiss National Basic Climatological Network "Swiss NBCN"](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/swiss-national-basic-climatological-network.html). The Swiss NBCN consists of 29 climate monitoring stations and is supplemented by 46 [precipitation stations](/c-climate-data/c2-climate-percipitation-stations_homogeneous).

The measuring conditions under which meteorological data are collected may change over time. Statements about the past, long-time climatic development can only be made if the influence of such changes is removed. This is achieved by [homogenisation](https://www.meteoswiss.admin.ch/climate/climate-change/changes-in-temperature-precipitation-and-sunshine/homogeneous-data-series-since-1864/homogenisation-of-series-of-climatic-measurements.html) of the data.

::: info 

Homogenisation is conducted on monthly values and annual values are aggregated from these. For temperature, the monthly correction amounts are also applied to daily values after smoothing the monthly transitions. These series are referred to as statistically derived homogeneous series and contain greater uncertainties. For this reason, and because minimum, mean, and maximum temperature series are homogenised independently of each other, minor inconsistencies between these parameters may arise (e.g. daily minimum higher than daily mean). We recommend the use of monthly data for long term climatological analyses.  

:::

Homogeneous measurement series are available from the Swiss NBCN climate stations for the parameters temperature (average, minimum, maximum), precipitation, sunshine duration, vapour pressure, air pressure, global radiation, and wind speed. Data series for temperature, precipitation, and sunshine duration date back, in some cases, to the mid-nineteenth century.

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically {#download-data-automatically}

Download **files per station** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nbcn`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nbcn)

Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn)

### Download data manually {#download-data-manually}

Select and download **files per station** manually via MeteoSwiss' [Open Data Explorer](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/download-data-without-coding-skills.html#lang=en&mdt=homogenous&pgid=&sid=&col=&di=&tr=&hdr=).

## Data structure {#data-structure}

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

## Data format {#data-format}

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.9 MB per file.

## Metadata {#metadata}

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

## Data usage {#data-usage}

See e.g. MeteoSwiss' [Swiss NBCN network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-klima&lang=en&table=false&compare=y).

Learn more about MeteoSwiss' [climate analyses and expertise](https://www.meteoswiss.admin.ch/services-and-publications/service/weather-and-climate-products/climate-analyses-and-expertise.html), and through [our blog articles, category ‘Climate’](https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog.html#order=date-desc&page=1&pageGroup=blog-article&tenant=mchweb&category=climate) (in German, French and Italian).
