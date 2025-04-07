---
sidebar_position: 1
---

# Automatic weather stations - Measured values

Around 160 stations of the [automatic measurement network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-measurement-network.html) SwissMetNet comprise a complete measurement programme. They deliver temperature, humidity, precipitation, wind, radiation, pressure and sunshine duration every ten minutes.

The network is supplemented by around 100 [automatic precipitation stations](/a-data-groundbased/a2-automatic-precipitation-stations). Together, these stations form the basis for the creation of reliable local weather forecasts as well as severe weather and flood warnings. Additionally MeteoSwiss operates 3 [automatic tower stations](/a-data-groundbased/a3-automatic-tower-stations) at 150m to 230m above ground for boundary layer measurements.

## Data

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data">
  <TabItem value="data-structure" label="Data structure">
    The data is split by measuring station.
    
    Per station there are files with 10-minute `t`, hourly `h`, daily `d`, monthly `m` and yearly `y` values.

    :::tip
    
    We strongly recommend that you download the corresponding aggregated [data granularity](https://opendatadocs.meteoswiss.ch/general/download#data-granularity).

    :::
   
    Depending on their granularity there are files with [update frequency](https://opendatadocs.meteoswiss.ch/general/download#update-frequency) `now`, `recent` and `historical`.
    
    :::info
    
    Time series can begin before the introduction of automatic measurements in the year 1981. Before 1981 at least three values per day were manually measured. They are stored as individual 10-minute values ([synoptic observations](https://community.wmo.int/en/observation-components-global-observing-system)).

    :::

    See e.g. files for station `Salen-Reutenen (HAI)` (abbreviation set in lower case) for all granularities and update frequencies mentioned: [`ogd-smn_hai_(data granularity)_(update frequency).csv`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn/items/hai?.language=en).

    In addition we offer the [main parameters of all stations (in one file) – every 10 minutes, most recent values](https://data.geo.admin.ch/ch.meteoschweiz.messwerte-aktuell/VQHA80.csv).
    - Time in UTC: 00:40 UTC = 02:40 local (CH) summer time, 01:40 winter time.
    - Main parameters: tre200s0; rre150z0; sre000z0; gre000z0; ure200s0; tde200s0; dkl010z0; fu3010z0; fu3010z1; prestas0; pp0qffs0; pp0qnhs0; ppz850s0; ppz700s0; dv1towz0; fu3towz0; u3towz1; ta1tows0; uretows0; tdetows0

  </TabItem>
  <TabItem value="data-format" label="Format">
    [`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤5.3 MB per file.
  </TabItem>
</Tabs>

## Metadata

<Tabs queryString="data">
  <TabItem value="metadata" label="Metadata">
    ## Parameters
    ...
    ## Stations
    ...
    ## Data inventory
    ...
  </TabItem>
</Tabs>

## Usage

See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en).

:::info

For **climate analyses**, use the corresponding [Climate stations - Homogeneous measurements](https://opendatadocs.meteoswiss.ch/climate-data) instead.

:::










## 1.2. Parameter metadata
See example parameter metadata files of [data granularity](https://github.com/MeteoSwiss/opendata-download?tab=readme-ov-file#data-granularity): [`t`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-smn-T.csv), [`h`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-smn-H.csv), [`d`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-smn-D.csv), [`m`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-smn-M.csv) and [`y`](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-surface/metadaten-parameter/metadata-parameter-smn-Y.csv).

The productive version will provide a single parameter metadata file for all granularities; file name: `ogd-smn_meta_parameters.csv`.

<!-- **Codes** -->
sremaxyv	1 	%	471 	Sonnenscheindauer; Verhältnis der Jahressumme zur maximal Möglichen
sremaxmv	1 	%	349 	Sonnenscheindauer; Verhältnis der Monatssumme zur maximal Möglichen
sremaxdv	1 	%	222 	Sonnenscheindauer; relativ zur absolut möglichen Tagessumme
<!-- ... -->

## 1.3. Station metadata
See example [station metadata file](https://data.geo.admin.ch/ch.meteoschweiz.messnetz-automatisch/ch.meteoschweiz.messnetz-automatisch_en.csv).

The productive version will provide a station metadata file with the file name: `ogd-smn_meta_stations.csv`.

## 1.4. Data visualisation
See e.g. MeteoSwiss' [SwissMetNet network map](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en).
