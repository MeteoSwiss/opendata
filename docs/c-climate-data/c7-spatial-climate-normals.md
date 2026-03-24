---
sidebar_position: 7
---

# Spatial climate normals

Spatial climate analyses depict the geographic distribution of a meteorological parameter. They are derived from measurements at weather stations, satellites and radar. The data is represented comprehensively on a grid covering all of Switzerland.

Spatial analyses of long-term averages (climate normals) are available for:
- Temperature, Precipitation and Sunshine. 30-year periods defined by the World Meteorological Organisation WMO are used to allow for international comparability.
- Radiation and Clouds. The average period of 2004-2024 is available.

The following parameters are available: 

**Temperature, Precipitation and Sunshine**
| Identifier | Description |
|---|---|
| RnormM9120 | Mean monthly precipitation (norm value, 1991–2020) |
| RnormY9120 | Mean yearly precipitation (norm value, 1991–2020) |
| RnormM6190 | Mean monthly precipitation (norm, 1961–1990) |
| RnormY6190 | Mean yearly precipitation (norm, 1961–1990) |
| TnormM9120 | Mean monthly mean temperature (norm, 1991–2020) |
| TnormY9120 | Mean yearly mean temperature (norm, 1991–2020) |
| TnormM6190 | Mean monthly mean temperature (norm, 1961–1990) |
| TnormY6190 | Mean yearly mean temperature (norm, 1961–1990) |
| TminnormM9120 | Mean monthly daily minimum temperature (norm, 1991–2020) |
| TminnormY9120 | Mean yearly daily minimum temperature (norm, 1991–2020) |
| TmaxnormM9120 | Mean monthly daily maximum temperature (norm, 1991–2020) |
| TmaxnormY9120 | Mean yearly daily maximum temperature (norm, 1991–2020) |
| SnormM9120 | Mean monthly relative sunshine duration (norm, 1991–2020) |
| SnormY9120 | Mean yearly relative sunshine duration (norm, 1991–2020) |
| SnormM6190 | Mean monthly relative sunshine duration (norm, 1961–1990) |
| SnormY6190 | Mean yearly relative sunshine duration (norm, 1961–1990) |

**Radiation and Clouds**  
| Identifier | Description |
|---|---|
| ALBaverageM0420 | Average monthly albedo (average 2004–2020) |
| ALBaverageY0420 | Average yearly albedo (average 2004–2020) |
| CFCaverageM0420 | Average monthly cloud fractional cover (average 2004–2020) |
| CFCaverageY0420 | Average yearly cloud fractional cover (average 2004–2020) |
| NLRaverageM0420 | Average monthly net longwave radiation (average 2004–2020) |
| NLRaverageY0420 | Average yearly net longwave radiation (average 2004–2020) |
| NSRaverageM0420 | Average monthly net shortwave radiation (average 2004–2020) |
| NSRaverageY0420 | Average yearly net shortwave radiation (average 2004–2020) |
| SDLaverageM0420 | Average monthly surface downward longwave radiation (average 2004–2020) |
| SDLaverageY0420 | Average yearly surface downward longwave radiation (average 2004–2020) |
| SISaverageM0420 | Average monthly surface incoming solar radiation (average 2004–2020) |
| SISaverageY0420 | Average yearly surface incoming solar radiation (average 2004–2020) |
| SOLaverageM0420 | Average monthly surface outgoing longwave radiation (average 2004–2020) |
| SOLaverageY0420 | Average yearly surface outgoing longwave radiation (average 2004–2020) |
| SRBaverageM0420 | Average monthly surface radiation budget (average 2004–2020) |
| SRBaverageY0420 | Average yearly surface radiation budget (average 2004–2020) |


## Data download {#data-download}

You can access the available Open Data for the Normal periods of 1991-2020 and 1961-1990 for surface based gridded data amd for the average period of 2004-2024 for satellite derived gridded data via [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-climate-normals-grid/items/ch`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-climate-normals-grid/items/ch?.language=en):


## Data format {#data-format}

The data formats are 
- [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 1 MB for yearly and 5 MB for monthly values.

## Coordinate system {#coordinate-system}

The coordinate system for the surface based data is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056)  
and for the satellite based data is [`WGS84`](https://www.swisstopo.admin.ch/en/reference-system-as-basis-for-coordinates) / [`EPSG:4326`](https://epsg.io/4326). 

## Data usage {#data-usage}

See e.g. MeteoSwiss' [Norm value charts](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-norm-maps-public.html#https%3A%2F%2Fservice.meteoswiss.ch%2Fproductbrowser%2FproductDisplay%2Fclimate-norm-maps-public%3Flang=en&cg1.parameter=FrostDays&cg1.normalPeriod=1961-1990&cg1.productName=climate-indicators-maps-norm) application.
