---
sidebar_position: 1
---

# Short-term forecast data ('nowcasting')

:::warning

The following documentation is currently being prepared and may be subject to change.

:::

[Nowcasting](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/nowcasting.html) involves high spatial and temporal resolution forecasts of weather developments for the next few minutes and up to a maximum of six hours ahead. The forecasts are updated every 5 or 10 minutes taking into account the latest available observations.

The Meteoswiss nowcasting system is calculated every 5-10 minutes and consists of a continuous nowcasting integrating different information sources, covering Switzerland and the neighbouring regions. The horizontal resolution is 1km. The 6-hour interval includes the seamless combination of observed, extrapolated and predicted data from the deterministic run of the ICON-CH1-EPS numerical weather pediction model.

The current deterministic implementation (INCA-CH) computes just one ensemble member. A new generation of nowcasting systems is in development. For this reason only a subset of the current INCA-CH parameters will become available trough our open data provision. In the next years additional parameters will be added.

The following parameters are currently under discussion to be made available:

**Precipitation**
- Total precipitation (RP, 5 min values every 5 min, radar based precipitation product)
- Precipitation type (NT, 5 min values every 5 min)
- Snowfall (PN, 5 min values every 5 min)

**Wind**
- Wind mean 10 m (FF_10min, 10 min values every 10 min)
- Wind gust 10 m (WG_10min, 10 min values every 10 min)
- Wind direction 10 m (DD_10min, 10 min values every 10 min)

**Temperature**
- Temperature 2 m (TT, 10 min values every 60 min)
- Dew point temperature 2 m (TD, 10 min values every 60 min)

## Data download

The following **example data file**s are available for download:

| Parameter | Update frequency | Time granularity | *Example data file* | Productive version file name | Estimated volume per file (MB) |
|:----- | ----- |:----- |:----- | ----- |:----- |
| **Total precipitation (RP)** | 5 min | 5 min | [RP_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/RP_INCA_202106280700.nc) | `ogd-nowcasting_RP_(date and time code).nc` | 1-60 |
| **Precipitation type (NT)** | 5 min | 5 min | [NT_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/NT_INCA_202106280700.nc) | `ogd-nowcasting_NT_(date and time code).nc` | 1-2 |
| **Snowfall (PN)** | 5 min | 5 min | [PN_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/PN_INCA_202106280700.nc) | `ogd-nowcasting_PN_(date and time code).nc` | 1-40 |
| **Wind mean (FF_10min)** | 10 min | 10 min | [FF_10min_INCA_202106280700.nc](https://zenodo.org/records/6470725/files/FF_10min_INCA_202204131500.nc) | `ogd-nowcasting_FF_10min_(date and time code).nc` | 60 |
| **Wind gust (WG_10min)** |  10 min |  10 min | [WG_10min_INCA_202106280700.nc](https://zenodo.org/records/6470725/files/WG_10min_INCA_202204131500.nc)| `ogd-nowcasting_WG_10min_(date and time code).nc` | 60 |
| **Wind direction (DD_10min)** | 10 min | 10 min | [DD_10min_INCA_202106280700.nc](https://zenodo.org/records/6470725/files/DD_10min_INCA_202204131500.nc)| `ogd-nowcasting_DD_10min_(date and time code).nc` | 60 |
| **Temperature 2 m (TT)** | 10 min | 60 min | [TT_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/TT_INCA_202106280700.nc) | `ogd-nowcasting_TT_(date and time code).nc` | 13 |
| **Dew point temperature 2 m (TD)** | 10 min | 60 min | [TD_INCA_202106280700.nc](https://github.com/MeteoSwiss/publication-opendata-inca-data-nowcasting/blob/main/TD_INCA_202106280700.nc) | `ogd-nowcasting_TD_(date and time code).nc` | 13 |

## Data format

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf).

## Coordinate system

The coordinate system is [`Swiss LV03`](https://www.swisstopo.admin.ch/en/national-triangulation-network-lv03) / [`EPSG 21781`](https://epsg.io/21781).

## Metadata

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    Parameter metadata is part of each NetCDF-File. See **example data files** in the [table above](./e-forecast-data/e1-short-term-forecast-data#data-download).
  </TabItem>
</Tabs>

## Data usage

Examples of INCA data reading and visualisation can be found here: [INCA-examples](https://inca-examples.readthedocs.io/en/latest/) and [jupyter notebooks](https://github.com/MeteoSwiss/inca-examples).
