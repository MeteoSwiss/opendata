---
sidebar_position: 1
---

# E1 - Short-term forecast data
[Nowcasting](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/nowcasting.html) involves high spatial and temporal resolution forecasts of weather developments for the next few minutes and up to a maximum of six hours ahead. MeteoSwiss uses these short-term forecasts to, among other things, predict thunderstorms, hail and heavy rainfall.

As MeteoSwiss is planning to replace the current 'INCA' nowcasting software, the following datasets are available from the start of our open data provision:
- **Precipitation (10min values): quantitative chain (based on CombiPrecip, RR)**
- **Wind, wind gust and wind direction (10min values)**
- *Relative sunshine duration* (10min values)
- **Total cloudiness (10min values)**

The following datsets will be provided next:
- **Snowfall (10min values): quantitative chain (based on CombiPrecip, RS)**
- ...
- ...

## 1.1. Data granularity, update frequency, format and volume
Data granularity is every 10min. Update frequency for the period 0h- +6h is specified per dataset in the table below.

Data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf).

| Dataset | Update frequency | Example data file | Productive version file name | Estimated volume per file (MB) |
|:----- | ----- |:----- |:----- | ----- |
| **Precipitation (10min values): quantitative chain (based on CombiPrecip, RR)** | every 10min | [RR_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/RR_INCA_202106280700.nc) | `ogd-nowcasting_RR-INCA_(date and time code).nc` | 1.7 |
| **Wind, wind gust and wind direction (10min values)** | every 10min | [...](#not-available) | `ogd-nowcasting_(product name)_(date and time code).nc` | ... |
| *Relative sunshine duration* (10min values) | 10min | [SU_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/SU_INCA_202106280700.nc) | `ogd-nowcasting_SU-INCA_(date and time code).nc` | 6.4 |
| *Total cloudiness* (10min values) | 10min | [SU_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/SU_INCA_202106280700.nc) | `ogd-nowcasting_SU-INCA_(date and time code).nc` | 6.4 |
|       |       |       |       |       |
| **Snowfall (10min values): quantitative chain (based on CombiPrecip, RS)** | every 10min | [RS_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/RS_INCA_202106280700.nc) | `ogd-nowcasting_RS-INCA_(date and time code).nc` | 0.4 |

## 1.2. Parameter metadata
Parameter metadata is part of each NetCDF-File. See example data files in the table above.

<!-- ### Codes -->
<!-- ... -->

## 1.3. Coordinate system
The coordinate system is Swiss LV95 EPSG:2056.

## 1.4. Data visualisation
See e.g. MeteoSwiss' [...](#not-available).