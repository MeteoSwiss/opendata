# MeteoSwiss - Open Data

MeteoSwiss provides its various datasets to be consumed by downloading the data as one or more files. 

In order to also provide access to the data via APIs in future, the necessary design and implementation work is currently underway.

## Getting Started with Download
<!-- As stated above, you will need your API key in order to download the data as one or more files. --> 
*See [Download](..) for more information.*

*See [General information](..) on data granularity, structure, and update cycle as well as on time stamps and intervals as well as on column separators, decimal dividers and missing values.*
 
### Staying up to Date
Our *Download* API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](..) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, please check [Release Notes](..) where they announce released changes that might affect your integration.

For operational status, see [API Status & Contact](..).

## Understanding MeteoSwiss' Open Data
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> 

<!-- For reference, here are the direct links: --> 

### Ground-based measurements
- [Automatic weather stations](https://github.com/MeteoSwiss/ogd-smn/tree/main?tab=readme-ov-file#readme)
- [Automatic precipitation stations](https://github.com/MeteoSwiss/ogd-smn-precip/tree/main?tab=readme-ov-file#readme)
- [Automatic boundary layer stations](https://github.com/MeteoSwiss/ogd-smn-tower/tree/main?tab=readme-ov-file#readme)
- [Manual precipitation stations](https://github.com/MeteoSwiss/ogd-nime/tree/main?tab=readme-ov-file#readme)
- [Totaliser precipitation stations](https://github.com/MeteoSwiss/ogd-tot/tree/main?tab=readme-ov-file#readme)
- [Pollen stations](https://github.com/MeteoSwiss/ogd-pollen/tree/main?tab=readme-ov-file#readme)

### Atmosphere
- [Radiosoundings](https://github.com/MeteoSwiss/ogd-radiosounding/tree/main?tab=readme-ov-file#readme)

### Observations
- [Meteorological visual observations](https://github.com/MeteoSwiss/ogd-obs/tree/main?tab=readme-ov-file#readme)
- [Phenological observations](https://github.com/MeteoSwiss/ogd-phenology/tree/main?tab=readme-ov-file#readme)

### Climate
#### Homogenous data series
- [Climate stations](https://github.com/MeteoSwiss/ogd-nbcn/tree/main?tab=readme-ov-file#readme)
- [Climate precipitation stations](https://github.com/MeteoSwiss/ogd-nbcn-precip/tree/main?tab=readme-ov-file#readme)
#### Spatial representations
- [Ground-based spatial climate data](https://github.com/MeteoSwiss/ogd-surface-derived-grid/tree/main?tab=readme-ov-file#readme)
- [Satellite-based spatial climate data](https://github.com/MeteoSwiss/ogd-satellite-derived-grid/tree/main?tab=readme-ov-file#readme)
- [Radar-based spatial climate data](https://github.com/MeteoSwiss/ogd-radar-derived-grid/tree/main?tab=readme-ov-file#readme)
#### Norm values & scenarios
- [Climate normals](https://github.com/MeteoSwiss/ogd-climate-normals/tree/main?tab=readme-ov-file#readme)
- [Spatial climate normals](https://github.com/MeteoSwiss/ogd-climate-normals-grid/tree/main?tab=readme-ov-file#readme)
- [Climate scenarios](https://github.com/MeteoSwiss/ogd-climate-scenarios/tree/main?tab=readme-ov-file#readme)

### Radar
- [Basic radar data](https://github.com/MeteoSwiss/ogd-basic-radar/tree/main?tab=readme-ov-file#readme)
- [Extended radar data](https://github.com/MeteoSwiss/ogd-advanced-radar/tree/main?tab=readme-ov-file#readme)
- [Combined precipitation calculations](https://github.com/MeteoSwiss/ogd-combiprecip/tree/main?tab=readme-ov-file#readme)

### Forecasts
- [Short-term forecast data](https://github.com/MeteoSwiss/ogd-nowcasting/tree/main?tab=readme-ov-file#readme)
- ICON-CH1 & -CH2 forecast data
- [Local forecast data](https://github.com/MeteoSwiss/ogd-local-forecasting/tree/main?tab=readme-ov-file#readme)
