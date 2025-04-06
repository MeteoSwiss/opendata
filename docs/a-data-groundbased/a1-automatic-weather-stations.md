---
sidebar_position: 1
---

# A1 - Automatic weather stations - Measured values
Around 160 stations of the [automatic measurement network](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations/automatic-measurement-network.html) SwissMetNet comprise a complete measurement programme. They deliver temperature, humidity, precipitation, wind, radiation, pressure and sunshine duration every ten minutes.

The network is supplemented by around 100 [automatic precipitation stations](/a-data-groundbased/a2-automatic-precipitation-stations). Together, these stations form the basis for the creation of reliable local weather forecasts as well as severe weather and flood warnings. Additionally MeteoSwiss operates 3 [automatic tower stations](/a-data-groundbased/a3-automatic-tower-stations) at 150m to 230m above ground for boundary layer measurements.

:::warning

For **climate analyses**, use the corresponding [homogeneous time series data](/c-climate-data) instead.

:::

<Tabs queryString="file-metadata">
  <TabItem value="data-structure" label="Data structure">
    ...
  </TabItem>
  <TabItem value="file-format-and-volume" label="File format and volume">
    [`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of ≤5.3 MB per file.
  </TabItem>
</Tabs>




## 1.1. Data granularity, update frequency, format and volume
If you require hourly, daily, monthly or annual values, we strongly recommend that you download the corresponding aggregated [data granularity](/general/download#32---data-granularity) `t`, `h`, `d`, `m`, `y` and [update frequency](/general/download#33---update-frequency) hourly (`now`), daily (`recent`) or yearly (`historical`) for each station.

Time series can begin before the introduction of automatic measurements in the year 1981. Before 1981 at least three values per day were manually measured. They are stored as individual 10-minute values ([synoptic observations](https://community.wmo.int/en/observation-components-global-observing-system)).

Data format of all files is [`CSV`](/general/download#31---column-separators-and-decimal-dividers) with an estimated volume of ≤5.3 MB per file.

See example data files for station `Salen-Reutenen (HAI)` (abbreviation set in lower case) for all granularities and update frequencies mentioned: [`ogd-smn_hai_(data granularity)_(update frequency).csv`](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn/items/hai?.language=en).

:::note

In addition we offer the [current measured values of the main parameters of all stations](#) *(URL to follow)* in a single data file, i.e. [data granularity](/general/download#32---data-granularity) `t`. *The main parameters included are: ...*

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
