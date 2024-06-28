# MeteoSwiss - Open Data

## Getting Started

### Introduction
MeteoSwiss provides its various datasets to be consumed by downloading the data as one or more files. 

In order to also provide access to the data via APIs in future, the necessary design and implementation work is currently underway.

### Understanding MeteoSwiss' Open Data
The data of each Open Data product has documentation on what it represents, its models, abstractions and terminology. <!-- These can be found under Data in the left menu. --> 

For reference, here are the direct links:

[Data from Ground-based Stations](..)
- [Automatic Weather Stations](https://github.com/MeteoSwiss/ogd-smn/tree/main?tab=readme-ov-file#readme)
- [Automatic Precipitation Stations](..)
- ..

[Atmospheric Data ](..)
- [](..)

[Data from Observations](..)
- [](..)

[Climate Data](..)
- [](..)

[Radar Data](..)
- [](..)

[Forecast Data](..)
- [](..)

### Getting Started with Download
<!-- As stated above, you will need your API key in order to download the data as one or more files. --> 
*See [Download](..) for more information.*

*See [General information](..) on data granularity, structure, and update cycle as well as on time stamps and intervals as well as on column separators, decimal dividers and missing values.
 
### Staying up to Date
Our *Download* API will not be subject to big breaking changes, because it adheres to the OGC STAC API standard. Our partner [swisstopo](..) continuously develops and improves it, so minor changes and bug fixes might change the behavior of the API. If you suspect your integration has broken due to changed behavior, please check [Release Notes](..) where they announce released changes that might affect your integration.

For operational status, see [API Status & Contact](..).


---
---


### 2.3. Surface data
MeteoSwiss operates a network of [land-based weather stations](https://www.meteoswiss.admin.ch/weather/measurement-systems/land-based-stations.html) where current weather and climate data are automatically recorded. It covers all parts of the country and all altitude levels. The measurements are supplemented with a wide array of additional observations, ranging from manual recording of cloud cover and vegetation development, to measurements of fine particulate matter, through to a network of cameras that covers all major sections of terrain and mountain passes in Switzerland.

All MeteoSwiss surface stations have a name and an identfier consisting of three letters (e.g. `BER` for [Bern / Zollikofen](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en&station=BER&chart=hour) or `LUG` for [Lugano](https://www.meteoswiss.admin.ch/services-and-publications/applications/measurement-values-and-measuring-networks.html#param=messnetz-automatisch&lang=en&station=LUG&chart=hour)). Data files use this station identifier in the file name throughout all directories. A list of all station identfiers with station names, coordinates, height etc. can be found in the according metadata section.
