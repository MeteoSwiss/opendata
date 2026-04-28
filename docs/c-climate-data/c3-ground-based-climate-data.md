---
sidebar_position: 3
---

# Spatial climate analyses – Precipitation, Temperature, Sunshine

[Spatial climate analyses](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/spatial-climate-analyses.html) are datasets that describe the geographic distribution and temporal evolution of near-surface climate variables. The data is represented comprehensively in space on a km-scale grid, covering all of Switzerland. It extends back over several decades to more than a century and is updated continuously in near-real time. The data values are estimated statistically from measurements at weather stations, satellites and radar, and can be understood as pseudo observations of the conditions in the respective grid pixel. 

MeteoSwiss provides a broad palette of ready-made spatial climate analyses. A comprehensive list of data products and detailed documentations are available on our [Spatial Climate Analyses](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/spatial-climate-analyses.html) weppage. A compact overview can be found [here](https://www.meteoswiss.admin.ch/dam/jcr:ce0227c9-1f95-4919-ae6c-999053b6bcba/ProdDoc_Cover.pdf).

Key elements of the dataset are available via our Open Data service and are listed below, along with links to the detailed product documentation: 

**Precipitation**
- [Daily Precipitation (Preliminary analysis)](https://www.meteoswiss.admin.ch/dam/jcr:86ca15d3-2b56-4753-84fb-135e40d6a5a1/ProdDoc_RprelimD.pdf)
- [Daily Precipitation (Final analysis)](https://www.meteoswiss.admin.ch/dam/jcr:4f51f0f1-0fe3-48b5-9de0-15666327e63c/ProdDoc_RhiresD.pdf)
- [Monthly and Yearly Precipitation (Final analysis)](https://www.meteoswiss.admin.ch/dam/jcr:d4f53a4a-d7f4-4e1e-a594-8ff4bfd1aca5/ProdDoc_RhiresM.pdf)
- [Monthly Anomalies to the 1991-2020 Norm Values (see section "Related products")](https://www.meteoswiss.admin.ch/dam/jcr:d4f53a4a-d7f4-4e1e-a594-8ff4bfd1aca5/ProdDoc_RhiresM.pdf)
- [Monthly and Yearly Precipitation (Reconstructions back till 1864)](https://www.meteoschweiz.admin.ch/dam/jcr:ae895312-b104-4ab3-9e8a-9c74ea8d7963/ProdDoc-rec.pdf) 

**Temperature**
- [Daily Mean, Minimum and Maximum Temperature](https://www.meteoswiss.admin.ch/dam/jcr:818a4d17-cb0c-4e8b-92c6-1a1bdf5348b7/ProdDoc_TabsD.pdf)
- [Monthly and Yearly Mean Temperature](https://www.meteoswiss.admin.ch/dam/jcr:33e26211-9937-4f80-80a3-09cfe54663bc/ProdDoc_TabsM.pdf)
- [Monthly Anomalies to the 1991-2020 Norm Values](https://www.meteoschweiz.admin.ch/dam/jcr:d63db113-7c08-4f5f-9a22-d20ae90c23fe/ProdDoc_TanomM9120.pdf)
<!--  - [Monthly and Yearly Temperature (Reconstructions back till 1864)](https://www.meteoschweiz.admin.ch/dam/jcr:ae895312-b104-4ab3-9e8a-9c74ea8d7963/ProdDoc-rec.pdf) -->

**Sunshine**
- [Daily Relative Sunshine Duration](https://www.meteoswiss.admin.ch/dam/jcr:981891db-30d1-47cc-a2e1-50c270bdaf22/ProdDoc_SrelD.pdf)
- [Monthly and Yearly Relative Sunshine Duration](https://www.meteoswiss.admin.ch/dam/jcr:94421f3c-47f3-46fa-9939-1d494a0ce5fe/ProdDoc_SrelM.pdf)
- [Monthly Anomalies to the 1991-2020 Norm Values (see section "Related products")](https://www.meteoswiss.admin.ch/dam/jcr:94421f3c-47f3-46fa-9939-1d494a0ce5fe/ProdDoc_SrelM.pdf)
  <!--  - [Monthly and Yearly Sunshine (Reconstructions back till 1901)](https://www.meteoschweiz.admin.ch/dam/jcr:ae895312-b104-4ab3-9e8a-9c74ea8d7963/ProdDoc-rec.pdf) -->

:::info

The spatial climate datasets are continuously updated as time passes. To allow for near real-time coverage, analyses for the most recent past (e.g. yesterday's precipitation) are initially calculated before data collection and quality control have been completed. At this stage, these are preliminary analyses. Consolidated versions of the analyses are produced later in several post-processing steps using more complete and thoroughly checked station observations.

You can access preliminary and consolidated analyses via the following `Items`:
- The real-time daily analyses (preliminary) are available in `Items` "CH at DD.MM.YYYY" with DD.MM.YYYY indicating the day for which the analysis is valid. The preliminary items are available for the past 60 days, with the oldest items being deleted successively.
- Consolidated daily and monthly analyses of the past 14 months are available in `Items` "CH at MM.YYYY" with MM.YYYY indicating the month of interest. These items contain files with the daily analyses of all days of the month and files with single monthly analyses. The archive item for a specific month is established towards the end of the month following. Archive items older than 14 months are deleted successively.
- A final re-processing of all the analyses of a year is undertaken in early February of the year following. The results are archived in the `Item` "CH archive". Here, all the results of a data product are bundled into yearly files, independently of the time resolution of the product. <br></br> **"CH archive" is the key `Item` to look for fully consolidated climate data that is consistent with all currently operational controle procedures at MeteoSwiss.**

<img width="3535" height="2132" alt="Figure" src="https://github.com/user-attachments/assets/ab882739-db6d-4d41-8e25-952e0367dd7c" />

*Delivery and update cycles of gridded datasets*

:::

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download data automatically

Download **files** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-surface-derived-grid`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-surface-derived-grid)

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid)

### Download data manually

Select and download **files** manually via FSDI's [STAC Browser](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid).

⚠️ **Please refer to the information in the info box above to see in which `Items` you can find which files.**

## Data format {#data-format}

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 1.1 MB for daily files, 13 MB for monthly files with daily data and up to 200 MB for yearly files with daily data.

## Coordinate system {#coordinate-system}

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). <br></br>
For the "Reconstructions back till 1864" the coordinate system is [`WGS84`](https://www.swisstopo.admin.ch/en/reference-system-as-basis-for-coordinates) / [`EPSG:4326`](https://epsg.io/4326). 

## Data usage {#data-usage}

Follows.



