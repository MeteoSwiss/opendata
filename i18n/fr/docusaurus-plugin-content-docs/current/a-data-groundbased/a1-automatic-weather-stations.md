---
sidebar_position: 1
title: Stations météorologiques automatiques
---

# Stations météorologiques automatiques

Vers [la documentation en anglais](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a1-automatic-weather-stations).

La traduction suivra.

<!-- @NOSPELL@ -->

## Structure des données

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="Structure des données">
  <TabItem value="fichiers-par-station" label="Fichiers par station">
    The data is split by measuring station. A file for a station contains all available parameters in one file. There are files with 10-minute `t`, hourly `h`, daily `d`, monthly `m` and yearly `y` values.

    We strongly recommend that you download the corresponding aggregated [data granularity](/general/download#data-granularity).
   
    Depending on the granularity there are files with [update frequency](/general/download#update-frequency) `now`, `recent` and `historical`.

    The update interval for files with 10-minute values is set to 20 minutes. If you require a higher update frequency, use the **One file with all stations** instead.
    
    <!-- See e.g. files for station `Salen-Reutenen (HAI)` with all granularities and update frequencies mentioned: [`ogd-smn_hai_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn/items/hai?.language=en) -->
    
    Time series can begin before the introduction of automatic measurements in the year 1981. Before 1981 at least three values per day were manually measured. They are stored as individual 10-minute values ([synoptic observations](https://community.wmo.int/en/observation-components-global-observing-system)).
  </TabItem>
  <TabItem value="un-fichier-contenant-toutes-les-stations" label="Un fichier contenant toutes les stations">
    In addition we offer the [main parameters of all stations (in one file) – every 10 minutes, most recent values](https://data.geo.admin.ch/ch.meteoschweiz.messwerte-aktuell/VQHA80.csv).

    The update interval for this file is around 10 minutes.
    
    Time in UTC: 00:40 UTC = 02:40 local (CH) summer time, 01:40 winter time
    
    Main parameters are:
    | Identifier | Description |
    |:----------:|:------------|
    | `tre200s0` | Air temperature 2 m above ground; current value | 
    | `rre150z0` | Precipitation; ten minutes total |
    | `sre000z0` | Sunshine duration; ten minutes total |
    | `gre000z0` | Global radiation; ten minutes mean |
    | `ure200s0` | Relative air humidity 2 m above ground; current value |
    | `tde200s0` | Dew point 2 m above ground; current value |
    | `dkl010z0` | Wind direction; ten minutes mean |
    | `fu3010z0` | Wind speed; ten minutes mean in km/h |
    | `fu3010z1` | Gust peak (one second); maximum in km/h |
    | `prestas0` | Atmospheric pressure at barometric altitude (QFE<sup>1</sup>); current value |
    | `pp0qffs0` | Pressure reduced to sea level (QFF<sup>2</sup>); current value |
    | `pp0qnhs0` | Pressure reduced to sea level according to standard atmosphere (QNH<sup>3</sup>); current value |
    | `ppz850s0` | Geopotential height of the 850 hPA level; current value |
    | `ppz700s0` | Geopotential height of the 700 hPA level; current value |
    | `dv1towz0` | Wind direction vectorial tower<sup>4</sup>; ten minutes mean |
    | `fu3towz0` | Wind speed scalar tower<sup>4</sup>; ten minutes mean in km/h |
    | `u3towz1` | Gust peak (one second) tower<sup>4</sup>; maximum in km/h |
    | `ta1tows0` | Air temperature tower<sup>4</sup>; current value |
    | `uretows0` | Relative air humidity tower<sup>4</sup>; current value |
    | `tdetows0` | Dew point tower<sup>4</sup>; current value |

    <sup>1</sup> QFE = the isobaric surface pressure at the reference point

    <sup>2</sup> QFF = the air pressure at the measuring site, reduced to the sea level. It is used in the field of meteorology in order to ­compare the air pressures of different places at different heights.

    <sup>3</sup> QNH = the air pressure at the measuring station, reduced to sea level acc. to "standard atmosphere".

    <sup>4</sup> Information about the [automatic tower stations](/a-data-groundbased/a3-automatic-tower-stations) dataset/collection.
  </TabItem>
</Tabs>

<!-- @ENDNOSPELL@ -->