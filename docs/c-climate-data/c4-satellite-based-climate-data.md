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

The controled and corrected datasets containing the data of the last month will be published at the end of the following month. These files are in the respective monthly items (e.g. "CH at 12.2025", "CH at 01.2026" etc.) and are only available for the last 14 months and will be deleted continously. 

In the item "CH archive" you can find all the data as yearly files (except hourly data, which are monthly files due to the size of the files), starting with 2025. At the beginning of each February, the yearly data of the previous year will be published. 
More archive data will be added later in 2026. 

Please also check out the illustration below: 

<img width="1280" height="480" alt="Climate Grid Dataflow" src="https://github.com/user-attachments/assets/909b31e2-bc67-4d2c-85cf-77d3a96507cc" />

*Delivery and update cycles of gridded datasets*

**If you need controled and corrected gridded data, you should only use data from the monthly or archive items.** 

:::

## Data download {#data-download}

[Dowload data from our Open Data Portal](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid)



## Data format {#data-format}

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 0.1 MB per file for a daily product. Hourly data as monthly files or daily as yearly can be up to the size of 45 MB.

## Coordinate system {#coordinate-system}

The coordinate system is [`WGS84`](https://www.swisstopo.admin.ch/en/reference-system-as-basis-for-coordinates) / [`EPSG:4326`](https://epsg.io/4326). 

## Data usage {#data-usage}

Follows.


