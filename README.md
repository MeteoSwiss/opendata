# MeteoSwiss - Open Data

## Getting Started

### Introduction
MeteoSwiss provides its various datasets to be consumed by downloading the data as one or more files. 

In order to also provide access to the data via APIs in future, the necessary design and implementation work is currently underway.

### Understanding MeteoSwiss' Open Data
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> 

For reference, here are the direct links:

**Data from Ground-based Stations**
- [Automatic Weather Stations](https://github.com/MeteoSwiss/ogd-smn/tree/main?tab=readme-ov-file#readme)
- [Automatic Precipitation Stations](..)
- ..

**Atmospheric Data**
- [](..)

**Data from Observations**
- [](..)

**Climate Data**
- [](..)

**Radar Data**
- [Extended radar data](https://github.com/MeteoSwiss/ogd-advanced-radar/tree/main?tab=readme-ov-file#readme)
- [Combined precipitation calculations](https://github.com/MeteoSwiss/ogd-combiprecip/tree/main?tab=readme-ov-file#readme)

**Forecast Data**
- [Short-term forecast data](https://github.com/MeteoSwiss/ogd-nowcasting/tree/main?tab=readme-ov-file#readme)
- ICON-CH1 & -CH2 forecast data
- [Local forecast data](https://github.com/MeteoSwiss/ogd-local-forecasting/tree/main?tab=readme-ov-file#readme)

### Getting Started with Download
<!-- As stated above, you will need your API key in order to download the data as one or more files. --> 
*See [Download](..) for more information.*

*See [General information](..) on data granularity, structure, and update cycle as well as on time stamps and intervals as well as on column separators, decimal dividers and missing values.
 
### Staying up to Date
Our *Download* API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](..) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, please check [Release Notes](..) where they announce released changes that might affect your integration.

For operational status, see [API Status & Contact](..).

---
