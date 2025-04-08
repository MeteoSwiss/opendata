---
sidebar_position: 6
---

# Totaliser precipitation stations - Measured values

In supplement to [manual precipitation stations](/a-data-groundbased/a5-manual-precipitation-stations) in mountainous areas that are difficult to access, MeteoSwiss operates around 60 totalisers which record the volume of precipitation for an entire year (see section "Totaliser monitoring network – annual readings" [here](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html).

## Data download

:::warning

We are currently setting up our service as Beta. During this phase everything is subject to change without prior notice.
- Not all stations are available with data yet. 

:::

You can access the available Open Data via [https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot)

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. Per station there are files with yearly `y` values.
    
    See e.g. files for station `Mönchsgrat (MGR)`: [`ogd-tot_mgr_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot/items/mgr).    
  </TabItem>
</Tabs>

## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.6 MB per file.

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier that depends on the time resolution <!-- (e.g. `dkl010z0` for "wind direction; ten-minute average") -->.
    
    [`ogd-tot_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-tot/ogd-tot_meta_parameters.csv) provides a list of all parameter identifiers with explanation, time interval, decimal places, data type and unit of measurement.
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-tot_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-tot/ogd-tot_meta_stations.csv) provides a list of all station identifiers with name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages.
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-tot_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-tot/ogd-tot_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>

## Data usage

See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-manuell&lang=en&table=false). 

<!--
:::info 

For **climate analyses**, use the corresponding [homogeneous time series data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#d-climate-data) instead.

:::
-->
