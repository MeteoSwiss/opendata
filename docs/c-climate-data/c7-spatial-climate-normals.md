---
sidebar_position: 7
---

# Spatial climate normals

The maps of normal values show the long-time averages for temperature, precipitation, sunshine duration and various climate indicators in Switzerland. 30-year periods defined by the World Meteorological Organisation WMO are used as standard for climate normals worldwide. Several normal periods as well as their differences are illustrated. The spatial illustration is based on a 1 km grid point data set, calculated using all available measurements from ground-based measuring stations.

MeteoSwiss provides monthly and annual maps for normal periods 1961-1990 (WMO standard reference period for long-term climate change assessments) and 1991-2020 (current WMO climatological standard period).

<!--
| PERIOD_TX    | BOUND_BOX_COORD_SYS_TX | OUTPUT_COORDSYS_TX | OUTPUT_FORMAT_TX | filename                                                  |
| ------------ | ---------------------- | ------------------ | ---------------- | --------------------------------------------------------- |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | RnormM9120 Normwert Monatsniederschalg 1991-2020          |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | RnormY9120 Normwert Jahressniederschalg 1991-2020         |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | TnormM9120 Normwert Monats-Mitteltemperatur 1991-2020     |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | TnormY9120 Normwert Jahres-Mitteltemperatur 1991-2020     |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | TminnormM9120 Normwert Monats-Minimumtemperatur 1991-2020 |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | TminnormY9120 Normwert Jahres-Minimumtemperatur 1991-2020 |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | TmaxnormM9120 Normwert Monats-Maximumtemperatur 1991-2020 |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | TmaxnormM9120 Normwert Jahres-Maximumtemperatur 1991-2020 |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | SnormM9120 Normwert Monats-Sonnenscheindauer 1991-2020    |
| previous_day | CH1995                 | EPSG:2056          | NETCDF           | SnormY9120 Normwert Monats-Sonnenscheindauer 1991-2020    |
-->

## Data download {#data-download}

You can access the available Open Data via [opendata.swiss](https://opendata.swiss/en/dataset?q=klimanormwerte&sort=score%20desc%2C%20metadata_modified%20desc&organization=bundesamt-fur-meteorologie-und-klimatologie-meteoschweiz&res_format=SERVICE):

**Normal period 1991-2020**
- [Mean precipitation (Monthly and yearly averages)](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.klimanormwerte-niederschlag_aktuelle_periode/items/klimanormwerte-niederschlag_aktuelle_periode) 
- [Mean relative sunshine duration (Monthly averages)](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.klimanormwerte-sonnenscheindauer_aktuelle_periode/items/klimanormwerte-sonnenscheindauer_aktuelle_periode)
- [Mean temperature (Monthly and yearly averages)](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.klimanormwerte-temperatur_aktuelle_periode/items/klimanormwerte-temperatur_aktuelle_periode)

**Normal period 1961-1990**
- [Mean precipitation (Monthly and yearly averages)](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.klimanormwerte-niederschlag_1961_1990/items/klimanormwerte-niederschlag_1961_1990) 
- [Mean relative sunshine duration (Monthly and yearly averages)](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.klimanormwerte-sonnenscheindauer_1961_1990/items/klimanormwerte-sonnenscheindauer_1961_1990) 
- [Mean temperature (Monthly and yearly averages)](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.klimanormwerte-temperatur_1961_1990/items/klimanormwerte-temperatur_1961_1990)

## Data format {#data-format}

The data formats are 
- [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 1.1 MB for *individual files [to be verified]*, and 13 MB for monthly files with daily data.

## Coordinate system {#coordinate-system}

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 

## Data usage {#data-usage}

See e.g. MeteoSwiss' [Norm value charts](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-norm-maps-public.html#https%3A%2F%2Fservice.meteoswiss.ch%2Fproductbrowser%2FproductDisplay%2Fclimate-norm-maps-public%3Flang=en&cg1.parameter=FrostDays&cg1.normalPeriod=1961-1990&cg1.productName=climate-indicators-maps-norm) application.
