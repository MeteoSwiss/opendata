---
sidebar_position: 7
---

# Pollen stations

MeteoSwiss operates the [national pollen monitoring network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-pollen-monitoring-network-swisspollen.html). It consists of 15 monitoring stations which cover Switzerland's most important climatic and vegetation regions. The measurements obtained provide invaluable information for those who suffer from allergies.

Until 2022, daily average pollen concentrations were measured with a [manual method](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/pollen-monitoring-network-manual-method.html). Since 1 January 2023, the measurements have been made with an automatic method rather than a manual one. From this date, airborne pollen concentrations (No/m³, number of grains per cubic metre of air) of Alder, Ash, Birch, Beech, Hasel, Oak, and Grasses are available in real time at an hourly resolution.

The manual and the automatic data may differ in terms of the concentration intensity and should therefore be used separately. Homogeneous series will be made available in a future release. The coordinates of the stations are those of the current automatic locations. The coordinates of the historical manual locations will be added in a future release.

The scientific names of the plants are available in the English version of the documents.

## Data download

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically

Download **files per station** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-pollen`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-pollen)

Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically--).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-pollen`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-pollen)

### Download data manually

Select and download **files per station** manually via MeteoSwiss' [Open Data Explorer](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/download-data-without-coding-skills.html#lang=en&mdt=normal&pgid=Pollen&sid=&col=&di=&tr=&hdr=)

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. A file for a station contains **all available parameters in one file**. There are files with hourly `h` and daily `d` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](https://opendatadocs.meteoswiss.ch/general/download#data-granularity).

    :::note 

    Granularities `h` and `d` contain average pollen concentrations. <!-- , while the granularities `m` and `y` contain pollen integrals. -->

    :::
   
    Depending on the granularity there are files with [update frequency](https://opendatadocs.meteoswiss.ch/general/download#update-frequency) `now`,`recent` and `historical`.
    
    See e.g. files for station `Lausanne (PLS)` with all granularities and update frequencies mentioned: [`ogd-pollen_pls_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-pollen/items/pls).
  </TabItem>
</Tabs>

## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤0.6 MB per file.

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier that depends on the time resolution <!-- (e.g. `dkl010z0` for "wind direction; ten-minute average") -->.
    
    [`ogd-pollen_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-pollen/ogd-pollen_meta_parameters.csv) provides a list of all parameter identifiers with explanation, time interval, decimal places, data type and unit of measurement.
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-pollen_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-pollen/ogd-pollen_meta_stations.csv) provides a list of all station identifiers with name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages.
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-pollen_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-pollen/ogd-smn-precip_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>

## Data usage

See e.g. MeteoSwiss' [POLLEN network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-pollen&lang=en&table=false&station=PLZ&chart=day).
