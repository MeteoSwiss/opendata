---
sidebar_position: 4
---

# C4 - Satellite-based spatial climate data
The following *grid data products* are derived from [MeteoSat satellite data](#not-available) together with *surface data* (see links for detailed product documentations):

**Global Radiation**
- *Hourly*, [Daily, Monthly and Yearly *satellite-based* Global Radiation](https://www.meteoswiss.admin.ch/dam/jcr:b0bbcbac-1a17-481b-aea4-e87e56183613/ProdDoc_SIS.pdf)

**Diffuse Radiation**
- *Hourly*, Daily, Monthly and Yearly *satellite-based* Diffuse Radiation « 🟡 *ProdDoc (PDF) URL ?*

**Direct Radiation**
- *Hourly*, Daily, Monthly and Yearly *satellite-based* Direct Radiation « 🟡 *ProdDoc (PDF) URL ?*

**Cloud Fractional Cover**
- *Hourly*, [Daily, Monthly and Yearly satellite-based Cloud Fractional Cover](https://www.meteoswiss.admin.ch/dam/jcr:af0c491c-4bfc-4efd-bcee-5d019004afd1/ProdDoc_CFC.pdf)

<br/>

The coordinate system is [`WGS84`](https://www.swisstopo.admin.ch/en/reference-system-as-basis-for-coordinates) / [`EPSG:4326`](https://epsg.io/4326). 

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 0.1 MB per file.

<br/>

The following *example* data files are available for download:

| *Parameter*                    | *Product*            | Time interval      | Update cycle             | *Example* Data files (see STAC Assets) |
|:-------------------------------|:---------------------|:-------------------|:-------------------------|:---------------------------------------|
| **Global Radiation**           |                      | Hourly ?           | previous_day             | [msg_sis_h_ch02.lonlat](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid/items/ch?.language=en) |
|                                |                      | Daily              | previous_day             | *[msg.SIS.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SIS.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly            | previous_month           | *[msg.SIS.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SIS.M_ch02.lonlat_20210401000000.nc)* |
|                                |                      | Yearly             | previous_year            | *[msg.SIS.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SIS.Y_ch02.lonlat_20210101000000.nc)* |
| **Diffuse Radiation**          |                      | Hourly ?           | previous_day             | msg.SISDIF-No-Horizon.H_ch02.lonlat    |
|                                |                      | Daily              | previous_day             | *[msg.SISDIF-No-Horizon.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIF-No-Horizon.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly            | previous_month           | *[msg.SISDIF-No-Horizon.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIF-No-Horizon.M_ch02.lonlat_20200401000000.nc)* |
|                                |                      | Yearly             | previous_year            | *[msg.SISDIF-No-Horizon.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIF-No-Horizon.Y_ch02.lonlat_20200101000000.nc)* |
| **Direct Radiation**           |                      | Hourly ?           | previous_day             | msg.SISDIR.H_ch02.lonlat               |
|                                |                      | Daily              | previous_day             | *[msg.SISDIR.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIR.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly            | previous_month           | *[msg.SISDIR.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIR.M_ch02.lonlat_20210401000000.nc)* |
|                                |                      | Yearly             | previous_year            | *[msg.SISDIR.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.SISDIR.Y_ch02.lonlat_20210101000000.nc)* |
| **Cloud Fractional Cover**     |                      | Hourly ?           | previous_day             |                                        |
|                                |                      | Daily              | previous_day             | *[msg.CFC.D_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.CFC.D_ch02.lonlat_20201206000000.nc)* |
|                                |                      | Monthly            | previous_month           | *[msg.CFC.M_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.CFC.M_ch02.lonlat_20210401000000.nc)* |
|                                |                      | Yearly             | previous_year            | *[msg.CFC.Y_ch02.lonlat](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/msg.CFC.Y_ch02.lonlat_20210101000000.nc)* |

<!--
| ?                              |                      | H                  | previous_day             | msg.ALB.H_ch02.lonlat                 | LL84                   | EPSG:4326          |
| ?                              |                      | D                  | previous_day             | msg.ALB.D_ch02.lonlat                 | LL84                   | EPSG:4326          |
| ?                              |                      | M                  | previous_month           | msg.ALB.M_ch02.lonlat                 | LL84                   | EPSG:4326          |
| ?                              |                      | Y                  | previous_year            | msg.ALB.Y_ch02.lonlat                 | LL84                   | EPSG:4326          |
| ?                              |                      | H                  | previous_day             | msg.SISCF-No-Horizon.H_ch02.lonlat    | LL84                   | EPSG:4326          |
| ?                              |                      | H                  | previous_day             | msg.SISDIRCF-No-Horizon.H_ch02.lonlat | LL84                   | EPSG:4326          |
| ?                              |                      | H                  | previous_day             | msg.SISDIR-No-Horizon.H_ch02.lonlat   | LL84                   | EPSG:4326          |
| ?                              |                      | D                  | previous_day             | msg.SISDIR-No-Horizon.D_ch02.lonlat   | LL84                   | EPSG:4326          |
| ?                              |                      | M                  | previous_month           | msg.SISDIR-No-Horizon.M_ch02.lonlat   | LL84                   | EPSG:4326          |
| ?                              |                      | Y                  | previous_year            | msg.SISDIR-No-Horizon.Y_ch02.lonlat   | LL84                   | EPSG:4326          |
| ?                              |                      | H                  | previous_day             | msg.SISDNI-No-Horizon.H_ch02.lonlat   | LL84                   | EPSG:4326          |
| ?                              |                      | H                  | previous_day             | msg.SIS-No-Horizon.H_ch02.lonlat      | LL84                   | EPSG:4326          |
| ?                              |                      | D                  | previous_day             | msg.SIS-No-Horizon.D_ch02.lonlat      | LL84                   | EPSG:4326          |
| ?                              |                      | M                  | previous_month           | msg.SIS-No-Horizon.M_ch02.lonlat      | LL84                   | EPSG:4326          |
| ?                              |                      | Y                  | previous_year            | msg.SIS-No-Horizon.Y_ch02.lonlat      | LL84                   | EPSG:4326          |
-->
