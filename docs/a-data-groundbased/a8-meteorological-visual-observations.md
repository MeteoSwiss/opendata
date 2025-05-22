---
sidebar_position: 8
---

# Meteorological visual observations
MeteoSwiss' data on current weather events is supplemented by [visual human observations](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/manual-observation-network.html), which describe the atmospheric conditions around the observation sites in detail.

Meteorological observers make visual observations and take readings from measurement instruments between two and eight times per day every day of the year at around 20 locations in Switzerland. The following aspects are observed:
- Meteorological visibility
- Current weather: e.g. moderate rain showers, snowfall, fog with formation of hoarfrost
- Past weather: the main weather phenomena during the past 3, 6 or 12 hours, e.g. thunderstorms, drizzle, drifting snow
- Ground conditions: e.g. powder snow covering the entire ground surface; frozen; damp
- Clouds: extent of total cloud cover, type and shape of visible clouds, the altitude of the cloud base
- Measurement of fresh and total snow depth *[to be verified]*

## Data download

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically

Download **files per station** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-obs`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-obs)

Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-obs`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-obs)

### Download data manually

Select and download **files per station** manually via MeteoSwiss' [Open Data Explorer](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/download-data-without-coding-skills.html#lang=en&mdt=normal&pgid=Visual+observation&sid=&col=&di=&tr=&hdr=).

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. A file for a station contains **all available parameters in one file**. There are files with daily `d`, monthly `m` and yearly `y` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](/general/download#data-granularity).
   
    Depending on the granularity there are files with [update frequency](/general/download#update-frequency) `recent` and `historical`.
    
    See e.g. files for station `Chur (CHU)` with all granularities and update frequencies mentioned: [`ogd-obs_chu_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-obs/items/chu?.language=en)
  </TabItem>
</Tabs>

## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.04 MB per file.

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier *that depends on the time resolution C <!-- (e.g. `dkl010z0` for "wind direction; ten-minute average") -->.
    
    [`ogd-obs_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-obs/ogd-obs_meta_parameters.csv) provides a list of all parameter identifiers with explanation, *time interval, decimal places, data type and unit of measurement [to be verified]*.

<!--
**Codes**
sremaxyv	1 	%	471 	Sonnenscheindauer; Verhältnis der Jahressumme zur maximal Möglichen
sremaxmv	1 	%	349 	Sonnenscheindauer; Verhältnis der Monatssumme zur maximal Möglichen
sremaxdv	1 	%	222 	Sonnenscheindauer; relativ zur absolut möglichen Tagessumme
-->
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-obs_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-obs/ogd-obs_meta_stations.csv) provides a list of all station identifiers with name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages.
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-obs_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-obs/ogd-obs_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>

## Data usage

See e.g. MeteoSwiss' [OBS network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-beobachtungen&lang=en&table=false).
