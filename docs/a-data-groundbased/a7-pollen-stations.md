---
sidebar_position: 7
---

# Pollen stations - Measured values

MeteoSwiss operates the [national pollen monitoring network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/pollen-monitoring-network-manual-method.html). It consists of around 15 monitoring stations which cover Switzerland's most important climatic and vegetation regions. The measurements obtained provide invaluable information for those who suffer from allergies.

<!-- Daily average values are updated once a week and obtained from manual reference counts. -->

Additionally since 2023 the new [automatic pollen network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-pollen-monitoring-network-swisspollen.html) is operational: for the first time in the world, instead of daily averages being available after a week, airborne pollen concentrations (No/m³, number of grains per cubic metre of air) of Birch, Beech, Oak, Alder, Ash, Grasses and Hazel are available in real time at an hourly resolution.

## Data download

:::warning

We are currently setting up our service as Beta. During this phase everything is subject to change without prior notice.
- Not all stations are available with data yet.

:::

You can access the available Open Data via [https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-pollen](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-pollen)

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. Per station there are files with hourly `h`, daily `d`, monthly `m` and yearly `y` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](https://opendatadocs.meteoswiss.ch/general/download#data-granularity).

    :::note 

    Granularities `h` and `d` contain average pollen concentrations, while the granularities `m` and `y` contain pollen integrals.

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
