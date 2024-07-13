*Status:* draft in preparation / [change log](https://github.com/MeteoSwiss/opendata/commits/main) <br>
*Maintainer:* Federal Office of Meteorology and Climatology MeteoSwiss, [opendata@meteoswiss.ch](mailto:opendata@meteoswiss.ch)

<!-- [![GitHub commit](https://img.shields.io/github/last-commit/MeteoSwiss/opendata)](https://github.com/MeteoSwiss/opendata/commits/master) -->

<!-- [Auf Deutschj](#meteoschweiz-open-data) | [En français](#meteosuisse-open-data) | [In italiano](#meteosvizzera-open-data) -->

# MeteoSwiss - Open Data
Welcome to MeteoSwiss' Open Data documentation.

MeteoSwiss provides its various Open Data products to be consumed by [downloading the data as files](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#getting-started-with-download). 

| A <br> [Ground-based Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#a-ground-based-measurements) | B <br> [Atmosphere Measurements](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#b-atmosphere-measurements) | C <br> [Observations Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#c-observations-data) | D <br> [Climate Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#d-climate-data) | E <br> [Radar Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#e-radar-data) | F <br> [Forecast Data](https://github.com/MeteoSwiss/opendata/tree/main?tab=readme-ov-file#f-forecast-data) |
|-----|-----|-----|-----|-----|-----|

> [!NOTE]
> In order to also provide access to the data via APIs in future, the necessary preparatory work is underway. As soon as an introduction date for this second type of access can be estimated, it will be communicated here.

## General information

### Terms of Use
[Here](...) you'll find information about data license and conditions for usage.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/Terms_of_Use -->

### FAQ
[Here](https://github.com/MeteoSwiss/opendata-faq/tree/main?tab=readme-ov-file) you'll find answers to the most frequently asked questions. We continuously update these based on questions received.

### Getting Started with Download
[Here](https://github.com/MeteoSwiss/opendata-download/tree/main?tab=readme-ov-file) you'll find information about data granularity, structure and update cycle, time stamps and time intervals as well as on column separators, decimal dividers and missing values.

<!-- cf. https://opendatadocs.dmi.govcloud.dk/en/Download --> 

### Staying up to Date
Our *Download* API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](..) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, please check [Release Notes](..) where they announce released changes that might affect your integration.

For operational status, see [API Status & Contact](..).

## Understanding MeteoSwiss' Open Data products
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> 

<!-- For reference, here are the direct links: --> 
### A. Ground-based Measurements
- [Automatic weather stations](https://github.com/MeteoSwiss/ogd-smn/tree/main?tab=readme-ov-file#readme)
- [Automatic precipitation stations](https://github.com/MeteoSwiss/ogd-smn-precip/tree/main?tab=readme-ov-file#readme)
- [Automatic boundary layer stations](https://github.com/MeteoSwiss/ogd-smn-tower/tree/main?tab=readme-ov-file#readme)
- [Manual precipitation stations](https://github.com/MeteoSwiss/ogd-nime/tree/main?tab=readme-ov-file#readme)
- [Totaliser precipitation stations](https://github.com/MeteoSwiss/ogd-tot/tree/main?tab=readme-ov-file#readme)
- [Pollen stations](https://github.com/MeteoSwiss/ogd-pollen/tree/main?tab=readme-ov-file#readme)

### B. Atmosphere Measurements
- [Radiosoundings](https://github.com/MeteoSwiss/ogd-radiosounding/tree/main?tab=readme-ov-file#readme)

### C. Observations Data
- [Meteorological visual observations](https://github.com/MeteoSwiss/ogd-obs/tree/main?tab=readme-ov-file#readme)
- [Phenological observations](https://github.com/MeteoSwiss/ogd-phenology/tree/main?tab=readme-ov-file#readme)

### D. Climate Data
#### Homogenous Data Series
- [Climate stations](https://github.com/MeteoSwiss/ogd-nbcn/tree/main?tab=readme-ov-file#readme)
- [Climate precipitation stations](https://github.com/MeteoSwiss/ogd-nbcn-precip/tree/main?tab=readme-ov-file#readme)
#### Spatial Representations
- [Ground-based spatial climate data](https://github.com/MeteoSwiss/ogd-surface-derived-grid/tree/main?tab=readme-ov-file#readme)
- [Satellite-based spatial climate data](https://github.com/MeteoSwiss/ogd-satellite-derived-grid/tree/main?tab=readme-ov-file#readme)
- [Radar-based spatial climate data](https://github.com/MeteoSwiss/ogd-radar-derived-grid/tree/main?tab=readme-ov-file#readme)
#### Normals & Scenarios
- [Climate normals](https://github.com/MeteoSwiss/ogd-climate-normals/tree/main?tab=readme-ov-file#readme)
- [Spatial climate normals](https://github.com/MeteoSwiss/ogd-climate-normals-grid/tree/main?tab=readme-ov-file#readme)
- [Climate scenarios](https://github.com/MeteoSwiss/ogd-climate-scenarios/tree/main?tab=readme-ov-file#readme)

### E. Radar Data
- [Basic radar data](https://github.com/MeteoSwiss/ogd-basic-radar/tree/main?tab=readme-ov-file#readme)
- [Extended radar data](https://github.com/MeteoSwiss/ogd-advanced-radar/tree/main?tab=readme-ov-file#readme)
- [Combined precipitation calculations](https://github.com/MeteoSwiss/ogd-combiprecip/tree/main?tab=readme-ov-file#readme)

### F. Forecast Data
- [Short-term forecast data](https://github.com/MeteoSwiss/ogd-nowcasting/tree/main?tab=readme-ov-file#readme)
- ICON-CH1 & -CH2 forecast data
- [Local forecast data](https://github.com/MeteoSwiss/ogd-local-forecasting/tree/main?tab=readme-ov-file#readme)
