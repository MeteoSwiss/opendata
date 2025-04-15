---
sidebar_position: 6
---

# Climate normals

The characteristics of the Swiss climate are described using long-term averages, the variations from these averages, as well as extreme and record values. 

Climate is commonly described using the long-term averages of meteorological parameters (such as temperature, precipitation and hours of sunshine), as well as the differences from these averages. The 30-year average and 30-year averaging period are used as standard for climate normals worldwide. Normal periods are regularly updated in light of the changing climate.

Monthly and annual [climate normals](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/climate-normals.html) for the norm periods 1961-1990, 1981-2010 and 1991-2020 are available from all measuring stations with long-time series of measurements.

## Data download

You can download the available Open Data via [opendata.swiss](https://opendata.swiss/dataset/klimanormwerte), as ZIP (in TXT format).


<!--

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. Per station there are files with daily `d`, monthly `m` and yearly `y` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](https://opendatadocs.meteoswiss.ch/general/download#data-granularity).
   
    Depending on the granularity there are files with [update frequency](https://opendatadocs.meteoswiss.ch/general/download#update-frequency) `recent` and `historical`.
    
    See e.g. files for station `Aigle (AIG)` with all granularities and update frequencies mentioned: [`ogd-nime-aig_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nime/items/aig).    
  </TabItem>
</Tabs>

## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.6 MB per file.

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier that depends on the time resolution <!-- (e.g. `dkl010z0` for "wind direction; ten-minute average") -->.
    
    [`ogd-nime_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nime/ogd-nime_meta_parameters.csv) provides a list of all parameter identifiers with explanation, time interval, decimal places, data type and unit of measurement.
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-nime_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nime/ogd-nime_meta_stations.csv) provides a list of all station identifiers with name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages.
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-nime_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nime/ogd-nime_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>

## Data usage

See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-manuell&lang=en&table=false).




## Data granularity, update frequency, format and volume
There are files of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity) `...`, `...`, `...`, `...` and [update frequency](https://github.com/MeteoSwiss/opendata-download/blob/main/README.md#update-frequency) hourly (`now`), daily (`recent`) or yearly (`historical`) for each station.

Data format is [`CSV`](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#column-separators-decimal-dividers-and-missing-values) with an estimated volume of ... MB per file.

See example data files: [`...`](#).

## Parameter metadata
See example parameter metadata files of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity): [`...`](#) and [`...`](#).

<!-- ### Codes -->
<!-- ... -->

## Station metadata
See example [station metadata file](#).

## Data visualisation
See e.g. MeteoSwiss' [...](#).

-->
