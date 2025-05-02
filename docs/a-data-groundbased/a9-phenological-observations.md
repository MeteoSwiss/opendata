---
sidebar_position: 9
---

# Phenological observations
The [Swiss Phenology Network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/swiss-phenology-network.html) consists of around 160 stations. Some 26 different plant species are observed in order to describe the vegetation development. 

On the basis of this information, it is possible to investigate the impact of climate change on the vegetation. The observations also serve to generate forecasting models for the start of flowering.

## Data download

:::info

We are currently setting up our service as Beta. During this phase everything is subject to change without prior notice.
- All files are available for all stations.

:::

You can access the available Open Data via [https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-phenology](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-phenology)

## Data structure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-station" label="Files per station">
    The data is split by measuring station. A file for a station contains **all available parameters in one file**. There are files with yearly `y` values.
   
    See e.g. files for station `Nyon / Changins (CHI)`: [`ogd-phenology_chi_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-phenology/items/chi)

    The files include *[to be verified]*:

    | Variable name      | Description              | Datatype         | Note                                              |
    | :---               | :---                     | :---             | :---                                              |
    | *`param_id`*       | Parameter identification | `Number`         | see [Parameter metadata](#92-parameter-metadata)  |
    | *`nat_abbr`*       | Station abbreviation     | `Text`           | see [Station metadata](#93-station-metadata)      |
    | *`reference_year`* | Reference year           | `YYYY`           |                                                   |
    | *`value`*          | Date of observation      | `YYYYMMDD`       |                                                   |
    | *`doy`*            | Day of year              | `Number`         | `negative values`: Observation in the year preceding the reference year; `values greater than 365`: Observation in the year following the reference year. |
  </TabItem>
</Tabs>

## Data format

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤7.1 MB per file.

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier <!-- (e.g. `dkl010z0` for "wind direction; ten-minute average") -->.
    
    [`ogd-phenology_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-phenology/ogd-phenology_meta_parameters.csv) provides a list of all parameter identifiers with explanation, *time interval, decimal places, data type and unit of measurement [to be verified]*.

    | Variable name       | Description                                      | Datatype         | Example value                                   | Note                     |
    | :---                | :---                                             | :---             | :---                                            | :---                     |
    | *`param_id`*        | Parameter identification                         | `Number`         | `601`                                           |                          |
    | *`param_shortname`* | Parameter shortname                              | `Integer`        | `maesh13d`                                      |                          |
    | *`scientific name`* | Plant's scientific name + phenophase* in English | `String`         | `Aesculus hippocastanum - leaf unfolding (50%)` | *`phenophase`: An observable stage or phase in the annual life cycle of a plant that can be defined by a start and end point. <!-- Phenophases generally have a duration of a few days or weeks. Examples include the period over which newly emerging leaves are visible, or the period over which open flowers are present on a plant. --> |
    | *`desc_english`*    | Plant's common name + phenophase* in English     | `String`         | `Horse chestnut - leaf unfolding (50%)`         |                          |
    | *`desc_deutsch`*    | Plant's common name + phenophase* in German      | `String`         | `Rosskastanie - Blattentfaltung (50%)`          |                          |
    | *`desc_italiano`*   | Plant's common name + phenophase* in Italian     | `String`         | `Ippocastano - spiegamento delle foglie (50%)`  |                          |
    | *`desc_français`*   | Plant's common name + phenophase* in Italian     | `String`         | `Marronnier - déploiement des feuilles (50%)`   |                          |
  </TabItem>
  <TabItem value="stations" label="Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-phenology_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-phenology/ogd-phenology_meta_stations.csv) provides a list of all station identifiers with *name, Canton, Wigos ID, station type, altitude, coordinates, orientation and URL of the station details pages [to be verified]*.

    | Variable name     | Description                               | Datatype/Unit           | Example value       | Note                     |
    | :---              | :---                                      | :---                    | :---                | :---                     |
    | *`Station`*         | Station name                              | `Text`                  | `St. Gallen`        |                          |
    | *`Abbr.`*           | Station abbreviation                      | `Text`                  | `STG`               |                          |
    | *`WIGOS-ID`*        | WIGOS Station identifier (`WSI`)          | `4 Block Number`        | `0-20000-0-06681`   | [`WSI`](https://community.wmo.int/en/activity-areas/WIGOS/implementation-WIGOS/WIGOS-station-identifier) is used to register an observing station or platform in the [OSCAR/Surface database](https://space.oscar.wmo.int/). |
    | *`Station type`*    | Station type                              | `Text`                  | `Phenology station` |                          |
    | *`Data Owner`*      | Data Owner                                | `Text`                  | `MeteoSwiss`        |                          |
    | *`Station height m a. sea level`* | Station height              | `Meter above sea level` | `711`               |                          |
    | *`CoordinatesE`*    | [Swiss coordinates system LV95](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system), East      | `Number`          | `2746301`  |    |
    | *`CoordinatesN`*    | [Swiss coordinates system LV95](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system), North     | `Number`          | `1255286`  |    |
    | *`Latitude`*        | [Global WGS84 GPS coordinates](https://www.swisstopo.admin.ch/en/coordinates-conversion-navref), Latitude  | `Decimal degrees` | `47.432103`|    |
    | *`Longitude`*       | [Global WGS84 GPS coordinates](https://www.swisstopo.admin.ch/en/coordinates-conversion-navref), Longitude | `Decimal degrees` | `9.378022` |    |
    | *`Exposition`*      | *to be explained*                         | `Text`                  | `plain`             |                          |
    | *`Canton`*          | Swiss canton abreviation                  | `Text`                  | `SG`                |                          |
    | *`Measurements`*    | List of observed plants, scientific names | `Text`                  | `Aesculus hippocastanum, Fagus sylvatica, Acer pseudoplatanus, Sorbus aucuparia, Corylus avellana, Tilia platyphyllos, Sambucus nigra, Tilia cordata, Larix decidua, Picea abies, Robinia pseudoacacia, Betula pendula, Castanea sativa, Tussilago farfara, Anemone nemorosa, Dactylis glomerata, Taraxacum officinale, Cardamine pratensis, Leucanthemum vulgare, Colchicum autumnale, Prunus avium, Pyrus communis, Malus domestica, Hay` |    |
    | *`Link`*            | More information about the station and the start date of observations (per plant) | `URL`                   | `https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-phaenologie&station=STG` |   |    
  </TabItem>
  <TabItem value="data-inventory" label="Data inventory">
    [`ogd-phenology_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-phenology/ogd-phenology_meta_datainventory.csv) provides a list of all stations and parameters with start and end date of the measurements.
  </TabItem>
</Tabs>

## Data usage

See e.g. MeteoSwiss' [PHENOLOGY network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-phaenologie&lang=en&table=false).


*[to be verified]*
Phenological observations
*************************
https://data.geo.admin.ch/ch.meteoschweiz.klima/phaenologie/phaeno_previous.csv                             Data from previous years (verified data) 
https://data.geo.admin.ch/ch.meteoschweiz.klima/phaenologie/phaeno_current.csv                              Data from current year
https://data.geo.admin.ch/ch.meteoschweiz.klima/phaenologie/Legende_Parameter.csv                           Parameter list
https://data.geo.admin.ch/ch.meteoschweiz.messnetz-phaenologie/ch.meteoschweiz.messnetz-phaenologie_en.csv  Station list

Data file structure
param_id;nat_abbr;reference_year;value;doy

param_id           Parameter identification: see parameter list  
nat_abbr           Station abbreviation: see station list 
reference_year     Reference year
value              Date of observation, format yyyymmdd 
doy                Day of year
                   Negative values: observation in the year preceding the reference year 
                   Values greater than 365: observation in the year following the reference year	

Delivery times
phaeno_previous.csv Delivery once a year after checking the data (beginning of February)
phaeno_current.csv  Delivery daily at 3:15 UTC

