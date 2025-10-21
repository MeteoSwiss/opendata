---
sidebar_position: 3
---

# Hail radar products

[Here](https://www.meteoswiss.admin.ch/weather/measurement-systems/atmosphere/weather-radar-network.html) you'll find general information about the Swiss weather radar network.

The C-band, Swiss weather radar network is able to provide information about the precipitation type, thanks to its dual-polarization capabilities.

The **Probability of Hail (POH) product** provides the probability of hail presence for each pixel of the raster, the values ranging from 0 to 100%. 

The **Maximum Expected Severe Hail Size (MESHS)** provides an information of the maximum expected hailstone size within a radar pixel, starting from 2 cm and above.

:::info 

Please be aware that Hail products (POH and MESHS) are only calculated between 1 April and 30 September each year. 
If there are files published outside this date range, they will be empty.

:::


## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

Download **files per parameter** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-hail`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-hail)

<!-- Read our [information on how you can obtain data automatically](/general/download#how-to-download-files-automatically). -->

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-hail`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-hail)

:::info

In the STAC Browser, click on the 'Next' button under 'Items' to find data from the previous few days.

Please note that the STAC item for the following day has already been created. From midnight onwards (between 1 April and 30 September), this item will continuously fill with files ('Assets').

:::


## Data structure {#data-structure}
The data is split by parameter, calendar date (see STAC 'items' respectively 'features') and time resolution. It is provided via a rolling time window covering the last 14 days.

**The available parameters are:**

| Parameter | Time resolution; Update frequency | Filename format          |
| --------- | --------------------------------- | ------------------------ |
| POH       | 5 minutes                         | `BZCyyjjjHHMM\*.\*01.h5` |
| MESHS     | 5 minutes                         | `MZCyyjjjHHMM\*.\*01.h5` |

:::info

All timestamps are the respective 5-minute values, except for:
- BZCyyjjj**2400**vl.845.h5 is the 24-hour sum (between 00:00 and 24:00 UTC) and
- MZCyyjjj**3000**vl.850.h5 is the 24-hour sum (between 06:00 and 06:00 UTC).

:::

**Naming convention of the files:**

For **POH**: `BZCyyjjjHHMMKK.XYZ.h5`
- `BZC` = product code
- `yy` = two last digit of the year
- `jjj` = Gregorian day of product creation (1-366)
- `HHMM` = product time (UTC)
- `KK` = (reserved)
- `XYZ` = x01 (reserved)

For **MESHS**: `MZCyyjjjHHMMKK.XYZ.h5`
- `MZC` = product code
- `yy` = two last digit of the year
- `jjj` = Gregorian day of product creation (1-366)
- `HHMM` = time of product creation (UTC)
- `KK` = (reserved)
- `XYZ` = x01 (reserved)


## Data format {#data-format}

The data is provided in the `ODIM HDF5` standard format, [described here](https://www.eumetnet.eu/wp-content/uploads/2021/07/ODIM_H5_v2.4.pdf) with an estimated volume of less than 1 MB per file.

:::info

Please note, that for the processing of HDF5 files, specialised software packages may be needed. 

:::

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 


## Metadata {#metadata}

The metadata is included in each HDF5-File.

| Parameter | Long Name                         | Standard Unit | Temporal Aggregation |
| --------- | --------------------------------- | ------------- | -------------------- |
| POH       | Probability of Hail               | %             | 5 minutes            |
| MESHS     | Maximum Expected Severe Hail Size | mm            | 5 minutes            |

