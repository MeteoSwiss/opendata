---
sidebar_position: 4
---

# Spatial climate analyses – Radiation, clouds

These grid data products are derived from [MeteoSat satellite data](https://www.meteoswiss.admin.ch/weather/measurement-systems/atmosphere/satellite-observations.html) together with ground-based measurements (for more see the linked detailed product documentations).

**Radiation**
- *Satellite-based Surface Radiation including [solar radiation, albedo, surface downward and upward longwave radiation, net radiation and the entire surface radiation budget](https://www.meteoswiss.admin.ch/dam/jcr:b6f29546-3e6f-45a3-bc64-227d1d6b623c/ProdDoc_RADIATION.pdf)

**Clouds**
- *Satellite-based Clouds including [cloud fractional cover, cloud top temperature and cloud top height](https://www.meteoswiss.admin.ch/dam/jcr:f244aad3-da48-4ae5-95b6-f8c77ce209ae/ProdDoc_CLOUDS.pdf)

<!--
**Land Surface Temperature**
- *Satellite-based land surface temperature (https://www.meteoswiss.admin.ch/dam/jcr:f244aad3-da48-4ae5-95b6-f8c77ce209ae/ProdDoc_CLOUDS.pdf](https://www.meteoswiss.admin.ch/dam/jcr:90f41d43-6a0d-40d0-bcee-549acc6167a0/ProdDoc_LST.pdf))
-->


:::info

The gridded data files are updated daily, monthly and yearly and are being published accordingly. 
Please note, that the daily files are preliminary results. They are available for the last 60 days only in the respective items (e.g. "CH at 31.12.2025", "CH at 01.01.2026" etc.) and will be deleted continuously.

**If you need controled and corrected gridded data, you should only use data from the monthly or archive items.** 

The controled and corrected datasets containing the data of the last month will be published at the end of the following month. These files are in the respective monthly items (e.g. "CH at 12.2025", "CH at 01.2026" etc.) and are only available for the last 14 months and will be deleted continously. 

In the item "CH archive" you can find all the data as yearly files (except hourly data, which are monthly files due to the size of the files), starting with 2025. At the beginning of each February, the yearly data of the previous year will be published. 
More archive data will be added later in 2026. 

Please also check out the illustration below: 

<img width="1280" height="480" alt="Climate Grid Dataflow" src="https://github.com/user-attachments/assets/909b31e2-bc67-4d2c-85cf-77d3a96507cc" />

*Delivery and update cycles of gridded datasets*

:::

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically

Download **files** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-satellite-derived-grid`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-satellite-derived-grid)

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid)



| *Parameter*                    | *Product*              | *Time interval*        | *Update cycle*             | *Example Data files*                   |
|:-------------------------------|:-----------------------|:-------------------  |:-------------------------|:---------------------------------------|
| **Surface Incoming Solar Radiation**           |                      | Hourly               | previous_day             | [msg_sis_h_ch02.lonlat](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid/items/ch?.language=en) |
|                                |                      | Daily                | previous_day             | *[msg.SIS.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SIS.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly              | previous_month           | *[msg.SIS.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SIS.M_ch02.lonlat_20210401000000.nc)* |
|                                |                      | Yearly               | previous_year            | *[msg.SIS.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SIS.Y_ch02.lonlat_20210101000000.nc)* |
| **Diffuse Radiation**          |                      | Hourly               | previous_day             | msg.SISDIF-No-Horizon.H_ch02.lonlat    |
|                                |                      | Daily                | previous_day             | *[msg.SISDIF-No-Horizon.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIF-No-Horizon.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly              | previous_month           | *[msg.SISDIF-No-Horizon.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIF-No-Horizon.M_ch02.lonlat_20200401000000.nc)* |
|                                |                      | Yearly               | previous_year            | *[msg.SISDIF-No-Horizon.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIF-No-Horizon.Y_ch02.lonlat_20200101000000.nc)* |
| **Direct Radiation**           |                      | Hourly               | previous_day             | msg.SISDIR.H_ch02.lonlat               |
|                                |                      | Daily                | previous_day             | *[msg.SISDIR.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIR.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly              | previous_month           | *[msg.SISDIR.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIR.M_ch02.lonlat_20210401000000.nc)* |
|                                |                      | Yearly               | previous_year            | *[msg.SISDIR.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIR.Y_ch02.lonlat_20210101000000.nc)* |
| **Cloud Cover**                |                      | Hourly               | previous_day             |                                        |
|                                |                      | Daily                | previous_day             | *[msg.CFC.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.CFC.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly              | previous_month           | *[msg.CFC.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.CFC.M_ch02.lonlat_20210401000000.nc)* |
|                                |                      | Yearly               | previous_year            | *[msg.CFC.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.CFC.Y_ch02.lonlat_20210101000000.nc)* |

## Data format {#data-format}

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 0.1 MB per file for a daily product. Hourly data as monthly files or daily as yearly can be up to the size of 45 MB.

## Coordinate system {#coordinate-system}

The coordinate system is [`WGS84`](https://www.swisstopo.admin.ch/en/reference-system-as-basis-for-coordinates) / [`EPSG:4326`](https://epsg.io/4326). 

## Data usage {#data-usage}

Follows.



