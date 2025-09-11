---
sidebar_position: 1
---

# Precipitation radar products

:::warning

Currently available as beta; expected to go live on 18 September 2025.

:::

Supplementing the conventional precipitation measurements taken at ground level meteorological stations, MeteoSwiss operates a network of five weather radar stations which record every type of precipitation and storms in real time, are fully automated and, between them, cover the whole of Switzerland.

The sites are
- Albis near Zurich (equipped with the latest technology (dual polarisation) in 2012, monitors the atmosphere of the whole of northern Switzerland)
- Monte Lema in the Canton of Ticino (equipped with the latest technology (dual polarisation) in 2011, monitors the atmosphere of the whole of southern Switzerland)
- La Dôle near Geneva (equipped with the latest technology (dual polarisation) in 2011)
- Pointe de la Plaine Morte in the Canton of Valais (equipped with the latest technology (dual polarisation), commenced operation in 2014 and monitors the atmosphere in the inner Alpine region)
- Weissfluhgipfel in the Canton of Graubünden (equipped with the latest technology (dual polarisation), commenced operation in 2016, and monitors the atmosphere in the inner Alpine region)

:::info 

*Information on 'recalculated CPC data' will be added here.*

:::

...


## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically {#download-data-automatically}

Download **files per parameter** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-precip`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-precip)

Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically).

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-precip`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-precip)


## Data structure {#data-structure}
The data is split by parameter, calendar date (see STAC 'items' respectively 'features') and time resolution. It is provided via a rolling time window covering the last 14 days.

The available parameters are:
| Parameter                              | Time resolution / Update frequency   | Filename format                                              |
| -------------------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| Combiprecip 60-minute total            | 10 minutes                           | CPCyyjjjHHMM\*_00060.\*01.h5                                 |
| Combiprecip 60-minute total reanalysis | 60 minutes / 8 days later            | [...]\*_00060.\*01.h5                                        |
| PRECIP                                 | 5 minutes                            | RZCyyjjjHHMM\*.\*01.h5                                       |
| PRECIP-SV                              | 5 minutes                            | TZCyyjjjHHMM\*.\*01.h5                                       |
  </TabItem>
</Tabs>


## Data format {#data-format}

The data format is [`HDF5`](https://www.hdfgroup.org/solutions/hdf5/) with an estimated volume of ... MB per file.

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 


## Metadata {#metadata}

The metadata is included in each HDF5-File.

| Parameter | Long Name                              | Standard Unit | Temporal Aggregation   | ...                           |
| --------- | -------------------------------------- | ------------- | ---------------------- | ----------------------------- |
| CPC       | Combiprecip 60-minute total            | ...           | Instantaneous          | ..                            |
| ...       | Combiprecip 60-minute total reanalysis | ...           | Instantaneous          | ..                            |
| RZC       | PRECIP                                 | ...           | Instantaneous          | ..                            |
| TZC       | PRECIP-SV                              | ...           | Instantaneous          | ..                            |


## Data usage {#data-usage}

See e.g. MeteoSwiss' [...](...).

