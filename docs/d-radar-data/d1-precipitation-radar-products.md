---
sidebar_position: 1
---

# Precipitation radar products

[Here](https://www.meteoswiss.admin.ch/weather/measurement-systems/atmosphere/weather-radar-network.html) you'll find general information about the Swiss weather radar network.

The **PRECIP product** is the baseline weather radar product for precipitation estimation at ground, in Switzerland. It combines the data from all 5 C-band, Swiss weather radar stations.

The **PRECIP-SV** product is a version of the precip product with additional "Side-View" (SV) to visualize the vertical cross-sections along the x- and y-axis. 

<img width="655" height="537" alt="Precip_SV_Visualization" src="https://github.com/user-attachments/assets/fad2cba2-f41e-4fba-99eb-5fab1c086b4d" />

*Illustration of the SV-product with the SV-parts marked in blue*


The **CombiPrecip (CPC) product** combines in real-time the precipitation information from the weather radar network with the MeteoSwiss ground stations (rain-gauges). Furthermore, a so-called "reanalysis" of CombiPrecip is computed with an 8 days delay as to account for a-posteriori corrections in the rain-gauge values. 

:::info

The reanalysis version of CombiPrecip is being calculated for the hourly values only (00:00h, 01:00h, 02:00h etc.) and is published 8 days later automatically, where the original hourly files will be overwritten. If you are interested in these reanalysis values, please check out the hourly files 8 days later. You will find in the Metadata the "Updated" timestamp showing, that the file has been updated 8 days later.

:::


## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

Download **files per parameter** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-precip`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-precip)

<!-- Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically). -->

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-precip`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-precip)

:::info

In the STAC Browser, click on the 'Next' button under 'Items' to find data from the previous few days.

Please note that the STAC item for the following day has already been created. From midnight onwards, this item will continuously fill with files ('Assets').

:::


## Data structure {#data-structure}
The data is split by parameter, calendar date (see STAC 'items' respectively 'features') and time resolution. It is provided via a rolling time window covering the last 14 days.

**The available parameters are:**

| Parameter                              | Time resolution; Update frequency | Filename format                |
| -------------------------------------- | --------------------------------- | ------------------------------ |
| PRECIP                                 | 5 minutes                         | `RZCyyjjjHHMM\*.\*01.h5`       |
| PRECIP-SV                              | 5 minutes                         | `TZCyyjjjHHMM\*.\*01.h5`       |
| Combiprecip 60-minute total            | 5 minutes                        | `CPCyyjjjHHMM\*_00060.\*01.h5` |
| Combiprecip 60-minute total reanalysis | 60 minutes; 8 days later          | `...\*_00060.\*01.h5`          |

**Naming convention of the files:**

For **PRECIP**: `RZCyyjjjHHMMKK.XYZ.h5`
- `RZC` = product code
- `yy` = two last digit of the year
- `jjj` = Gregorian day of product creation (1-366)
- `HHMM` = time of product creation (UTC)
- `KK` = (reserved)
- `XYZ` = x01 (reserved)

For **PRECIP-SV**: `TZCyyjjjHHMMKK.XYZ.h5`
- `TZC` = product code
- `yy` = two last digit of the year
- `jjj` = Gregorian day of product creation (1-366)
- `HHMM` = time of product creation (UTC)
- `KK` = (reserved)
- `XYZ` = x01 (reserved)

For **CombiPrecip**: `CPCyyjjjHHMMQ_nnnnn.XYZ.h5`
- `CPC` = product code
- `yy` = two last digit of the year
- `jjj` = Gregorian day of product creation (1-366)
- `HHMM` = product time (UTC)
- `Q` = CombiPrecip quality code (from 0 to 9, where 9 is the best) 
- `nnnnn` = accumulation time (in minutes)
- `XYZ` = x01 (reserved)


## Data format {#data-format}

The data is provided in the `ODIM HDF5` standard format, [described here](https://www.eumetnet.eu/wp-content/uploads/2021/07/ODIM_H5_v2.4.pdf) with an estimated volume of less than 1 MB per file.

:::info

Please note, that for the processing of HDF5 files, specialised software packages may be needed. 

:::

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 


## Metadata {#metadata}

The metadata is included in each HDF5-File.

| Parameter | Long Name                              | Standard Unit | Temporal Aggregation                   |
| --------- | -------------------------------------- | ------------- | -------------------------------------- |
| `CPC`     | Combiprecip 60-minute total            | mm            | Precipitation accumulation over 1 hour |
| `CPCH`    | Combiprecip 60-minute total reanalysis | mm            | Precipitation accumulation over 1 hour |
| `RZC`     | PRECIP                                 | mm/h          | Instantaneous rain rate                |
| `TZC`     | PRECIP-SV                              | mm/h          | Instantaneous rain rate                |





