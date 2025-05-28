---
sidebar_position: 3
---

# Ground-based spatial climate data – Precipitation, temperature, sunshine

These grid data products are statistically derived from ground-based measurements (for more see the linked detailed product documentations).

**Precipitation**
- [Daily Precipitation (Preliminary analysis)](https://www.meteoswiss.admin.ch/dam/jcr:86ca15d3-2b56-4753-84fb-135e40d6a5a1/ProdDoc_RprelimD.pdf)
- [Daily Precipitation (Final analysis)](https://www.meteoswiss.admin.ch/dam/jcr:4f51f0f1-0fe3-48b5-9de0-15666327e63c/ProdDoc_RhiresD.pdf)
- [Monthly and Yearly Precipitation (Final analysis)](https://www.meteoswiss.admin.ch/dam/jcr:d4f53a4a-d7f4-4e1e-a594-8ff4bfd1aca5/ProdDoc_RhiresM.pdf)

**Temperature**
- [Daily Mean, Minimum and Maximum Temperature](https://www.meteoswiss.admin.ch/dam/jcr:818a4d17-cb0c-4e8b-92c6-1a1bdf5348b7/ProdDoc_TabsD.pdf)
- [Monthly and Yearly Mean Temperature](https://www.meteoswiss.admin.ch/dam/jcr:33e26211-9937-4f80-80a3-09cfe54663bc/ProdDoc_TabsM.pdf)

**Sunshine**
- [Daily Relative Sunshine Duration](https://www.meteoswiss.admin.ch/dam/jcr:981891db-30d1-47cc-a2e1-50c270bdaf22/ProdDoc_SrelD.pdf)
- [Monthly and Yearly Relative Sunshine Duration](https://www.meteoswiss.admin.ch/dam/jcr:94421f3c-47f3-46fa-9939-1d494a0ce5fe/ProdDoc_SrelM.pdf)

## Data download {#data-download}

The following **example data files** are available for download:

<!-- @NOSPELL@ -->

| *Parameter*                        | *Product*            | Time interval      | Update cycle             | *Example Data files*                   |
|:-----------------------------------|:---------------------|:-------------------|:-------------------------|:---------------------------------------|
| **Precipitation**                  | Preliminary analysis | Daily              | previous_day             | RprelimD_ch01h.swiss.lv95              |
|                                    | Final analysis       | Daily              | previous_month           | *[RhiresD_ch01h.swiss.lv95_202305010000_202305310000.nc](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/RhiresD_ch01h.swiss.lv95_202305010000_202305310000.nc)* |
|                                    | Final analysis       | Monthly            | previous_month           | [RhiresM_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | Final analysis       | Yearly             | previous_year            | *[RhiresY_ch01r.swiss.lv95_202201010000_202201010000.nc](https://github.com/MeteoSwiss/publication-opendata-spatial-climate-data/blob/main/RhiresY_ch01r.swiss.lv95_202201010000_202201010000.nc)* |
|                                    | *? [to be verified]* | Monthly            | previous_month           | [RanomM9120_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
| **Temperature**                    | *Absolute or Mean ? [to be verified]* | Daily              | previous_day             | [TabsD_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | *Absolute or Mean ? [to be verified]* | Monthly            | previous_month           | [TabsM_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | *Absolute or Mean ? [to be verified]* | Yearly             | previous_year            | TabsY_ch01r.swiss.lv95             |
|                                    | Maximum              | Daily              | previous_day             | [TmaxD_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | Maximum              | Monthly            | previous_month           | [TmaxM_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | Maximum              | Yearly             | previous_year            | TmaxY_ch01r.swiss.lv95             |
|                                    | Minimum              | Daily              | previous_day             | [TminD_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | Minimum              | Monthly            | previous_month           | [TminM_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    | Minimum              | Yearly             | previous_year            | TminY_ch01r.swiss.lv95             |
|                                    | *? [to be verified]* | Monthly            | previous_month           | [TanomM9120_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
| **Sunshine**                       |                      | Daily              | previous_day             | [SrelD_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    |                      | Monthly            | previous_month           | [SrelM_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |
|                                    |                      | Yearly             | previous_year            | SrelY_ch01r.swiss.lv95      |
|                                    | *? [to be verified]* | Monthly            | previous_month           | [SanomM9120_ch01r.swiss.lv95](https://sys-data.int.bgdi.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid/items/ch?.language=en) |

<!-- @ENDNOSPELL@ -->

## Data format {#data-format}

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of 1.1 MB for *individual files [to be verified]*, and 13 MB for monthly files with daily data.

## Coordinate system {#coordinate-system}

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 

## Data usage {#data-usage}

Follows.
