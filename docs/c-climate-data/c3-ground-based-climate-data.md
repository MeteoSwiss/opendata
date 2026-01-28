---
sidebar_position: 3
---

# Spatial climate analyses – Precipitation, temperature, sunshine

These grid data products are statistically derived from ground-based measurements (for more see the linked detailed product documentations).

**Precipitation**
- [Daily Precipitation (Preliminary analysis)](https://www.meteoswiss.admin.ch/dam/jcr:86ca15d3-2b56-4753-84fb-135e40d6a5a1/ProdDoc_RprelimD.pdf)
- [Daily Precipitation (Final analysis)](https://www.meteoswiss.admin.ch/dam/jcr:4f51f0f1-0fe3-48b5-9de0-15666327e63c/ProdDoc_RhiresD.pdf)
- [Monthly and Yearly Precipitation (Final analysis)](https://www.meteoswiss.admin.ch/dam/jcr:d4f53a4a-d7f4-4e1e-a594-8ff4bfd1aca5/ProdDoc_RhiresM.pdf)
- [Monthly differences to the 1991-2020 norm values](missing document)
- [Monthly and Yearly Reconstructions](https://www.meteoschweiz.admin.ch/dam/jcr:ae895312-b104-4ab3-9e8a-9c74ea8d7963/ProdDoc-rec.pdf) 

**Temperature**
- [Daily Mean, Minimum and Maximum Temperature](https://www.meteoswiss.admin.ch/dam/jcr:818a4d17-cb0c-4e8b-92c6-1a1bdf5348b7/ProdDoc_TabsD.pdf)
- [Monthly and Yearly Mean Temperature](https://www.meteoswiss.admin.ch/dam/jcr:33e26211-9937-4f80-80a3-09cfe54663bc/ProdDoc_TabsM.pdf)
- [Monthly differences to the 1991-2020 norm values](https://www.meteoschweiz.admin.ch/dam/jcr:d63db113-7c08-4f5f-9a22-d20ae90c23fe/ProdDoc_TanomM9120.pdf)

**Sunshine**
- [Daily Relative Sunshine Duration](https://www.meteoswiss.admin.ch/dam/jcr:981891db-30d1-47cc-a2e1-50c270bdaf22/ProdDoc_SrelD.pdf)
- [Monthly and Yearly Relative Sunshine Duration](https://www.meteoswiss.admin.ch/dam/jcr:94421f3c-47f3-46fa-9939-1d494a0ce5fe/ProdDoc_SrelM.pdf)
- [Monthly differences to the 1991-2020 norm values](missing document)

:::info

The gridded data files are updated daily, monthly and yearly and are being published accordingly. 
Please note, that the daily files are preliminary results. They are available for the last 60 days only in the respective items (e.g. "CH at 31.12.2025", "CH at 01.01.2026" etc.) and will be deleted continuously. 

The controled and corrected datasets containing the data of the last month will be published at the end of the following month. These files are in the respective monthly items (e.g. "CH at 12.2025", "CH at 01.2026" etc.) and are only available for the last 14 months and will be deleted continously. 

In the item "CH archive" you can find all the data as yearly files (except hourly data, which are monthly files due to the size of the files), starting with 2025. At the beginning of each February, the yearly data of the previous year will be published. 
More archive data will be added later in 2026. 

Please also check out the illustration below: 

<img width="1280" height="720" alt="Climate Grid Dataflow" src="https://github.com/user-attachments/assets/909b31e2-bc67-4d2c-85cf-77d3a96507cc" />

*Delivery and update cycles of gridded datasets*

**If you need controled and corrected gridded data, you should only use data from the monthly or archive items.** 

:::

## Data download {#data-download}

[Dowload data from our Open Data Portal](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid)

<!-- @NOSPELL@ -->


<!-- @ENDNOSPELL@ -->

## Data format {#data-format}

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 1.1 MB for *individual files [to be verified]*, and 13 MB for monthly files with daily data and up to 200MB for yearly files with daily data.

## Coordinate system {#coordinate-system}

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 

## Data usage {#data-usage}

Follows.


