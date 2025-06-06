---
sidebar_position: 5
---

# Manual precipitation stations

In addition to its automatic precipitation measurements (see [automatic weather stations](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a1-automatic-weather-stations), [automatic precipitation stations](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a2-automatic-precipitation-stations) and [automatic tower stations](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a3-automatic-tower-stations)), MeteoSwiss operates a [manual precipitation monitoring network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-precipitation-monitoring-network.html).

Measurements are taken once a day and transmitted to MeteoSwiss via SMS. The network comprises around 240 locations, about 190 stations measure rainfall and snow, and about 50 stations measure snow only.

In mountainous areas that are difficult to access, the network is supplemented by around 60 totalisers which record the volume of precipitation for an entire year (see [Totaliser precipitation stations](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a6-totaliser-precipitation-stations)).

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically {#download-data-automatically}

Download **files per station** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nime`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nime)

Read our [documentation on how to download files automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nime`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nime)

### Download data manually {#download-data-manually}

Select and download **files per station** manually via MeteoSwiss' [Open Data Explorer](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/download-data-without-coding-skills.html#lang=en&mdt=normal&pgid=&sid=&col=&di=&tr=&hdr=).

## Data structure {#data-structure}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station.  A file for a station contains **all available parameters in one file**. There are files with daily `d`, monthly `m` and yearly `y` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](https://opendatadocs.meteoswiss.ch/general/download#data-granularity).
   
    Depending on the granularity there are files with [update frequency](https://opendatadocs.meteoswiss.ch/general/download#update-frequency) `recent` and `historical`.
    
    See e.g. files for station `Aigle (AIG)` with all granularities and update frequencies mentioned: [`ogd-nime-aig_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nime/items/aig).    
  </TabItem>
</Tabs>

## Data format {#data-format}

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.6 MB per file.

## Metadata {#metadata}

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

## Data usage {#data-usage}

See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-manuell&lang=en&table=false).

:::info 

For **climate analyses (long-term evolution or change)**, use the [homogeneous data series](https://opendatadocs.meteoswiss.ch/c-climate-data) instead.

:::
