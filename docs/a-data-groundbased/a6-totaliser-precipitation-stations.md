---
sidebar_position: 6
---

# Totaliser precipitation stations

In supplement to [manual precipitation stations](/a-data-groundbased/a5-manual-precipitation-stations) in mountainous areas that are difficult to access, MeteoSwiss operates around 60 totalisers which record the volume of precipitation for an entire year (see section "Totaliser monitoring network – annual readings" [here](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html).

:::info

Totaliser precipitation data cover a so-called 'hydrological year', i.e. from 1 October to 30 September of the following year. They are therefore not comparable one-to-one with the annual totals of other precipitation datasets/collections.

:::

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically {#download-data-automatically}

Download **files per station** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-tot`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-tot)

Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot)

### Download data manually {#download-data-manually}

Select and download **files per station** manually via MeteoSwiss' [Open Data Explorer](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/download-data-without-coding-skills.html#lang=en&mdt=normal&pgid=Precipitation&sid=&col=&di=&tr=&hdr=).

## Data structure {#data-structure}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. A file for a station contains **all available parameters in one file**. There are files with yearly `y` values.
    
    See e.g. files for station `Mönchsgrat (MGR)`: [`ogd-tot_mgr_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-tot/items/mgr).    
  </TabItem>
</Tabs>

## Data format {#data-format}

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.6 MB per file.

## Metadata {#metadata}

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

## Data usage {#data-usage}

See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-manuell&lang=en&table=false). 

<!--
:::info 

For **climate analyses**, use the corresponding [homogeneous time series data](https://github.com/MeteoSwiss/opendata-climate-data/blob/main/README.md#d-climate-data) instead.

:::
-->
