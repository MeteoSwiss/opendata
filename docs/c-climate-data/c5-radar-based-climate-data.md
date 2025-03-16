---
sidebar_position: 5
---

# C5 - Radar-based spatial climate data
The following *grid data products* are derived from *radar data*, which were [further processed for statistical statements with the use of the HailStoRe resampling approach](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology/data-and-methods.html), among other things (*see links for detailed product documentation*s). The [hail climatology](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html) was developed in a user-oriented manner in a public-private partnership and represents a nationally uniform basis for the risk assessment of hail events.

The following data are planned to be made available in May 2025:

**Maximum Hailstone Size**
- Monthly and Yearly radar-based Maximum Hailstone Size <<< 🟡 *ProdDoc (PDF) URL ?*

**Number of Hail Days**
- Monthly and Yearly radar-based Number of Hail Days <<< 🟡 *ProdDoc (PDF) URL ?*
- Monthly and Yearly radar-based Number of Hail Days with Hail >2cm <<< 🟡 *ProdDoc (PDF) URL ?*
- Monthly and Yearly radar-based Number of Hail Days with Hail >4cm <<< 🟡 *ProdDoc (PDF) URL ?*

<br />

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) with an estimated volume of ... MB per file.

<br />

The following data files are available for download:

<!-- Bezeichnungen gemäss https://meteoswiss.atlassian.net/wiki/spaces/AK/pages/492699723/TABELLEN+3+und+4+Neue+KLIMAHAGELDATEN+-+Betrieb -->

| *Parameter*                            | *Product*                          | Time interval | Update cycle   | Data files (see STAC Assets)                                       |
|:---------------------------------------|:-----------------------------------|:------------- |:---------------|:-------------------------------------------------------------------|
| **Maximum Hailstone Size**             | Absolute *values*                  | Monthly       | previous_month | hailsizeM_ch01r.swiss.lv95        |
|                                        | Absolute *values*                  | Yearly        | previous_year  | hailsizeY_ch01r.swiss.lv95        |
|                                        | Anomaly/deviation from Climatology | Monthly       | previous_month | hailsizeanomM_ch01r.swiss.lv95    |
|                                        | Anomaly/deviation from Climatology | Yearly        | previous_year  | hailsizeanomY_ch01r.swiss.lv95    |
| **Number of Hail Days**                | Absolute *values*                  | Monthly       | previous_month | haildaysM_ch01r.swiss.lv95        |
|                                        | Absolute *values*                  | Yearly        | previous_year  | haildaysY_ch01r.swiss.lv95        |
|                                        | Anomaly/deviation from Climatology | Monthly       | previous_month | haildaysanomM_ch01r.swiss.lv95    |
|                                        | Anomaly/deviation from Climatology | Yearly        | previous_year  | haildaysanomY_ch01r.swiss.lv95    |
|                                        | Climatology (mean 2002-last year)  | Monthly       | previous_month | haildaysclimM_ch01r.swiss.lv95    |
|                                        | Climatology (mean 2002-last year)  | Yearly        | previous_year  | haildaysclimY_ch01r.swiss.lv95    |
|                                        | *Standard deviation of Climatology* | Monthly       | previous_month | *haildaysclimstdM_ch01r.swiss.lv95* |
|                                        | *Standard deviation of Climatology* | Yearly        | previous_year  | *haildaysclimstdY_ch01r.swiss.lv95* |
| **Number of Hail Days with Hail >2cm** | Absolute *values*                  | Monthly       | previous_month | haildays2cmM_ch01r.swiss.lv95        |
|                                        | Absolute *values*                  | Yearly        | previous_year  | haildays2cmY_ch01r.swiss.lv95        |
|                                        | Anomaly/deviation from Climatology | Monthly       | previous_month | haildays2cmanomM_ch01r.swiss.lv95    |
|                                        | Anomaly/deviation from Climatology | Yearly        | previous_year  | haildays2cmanomY_ch01r.swiss.lv95    |
|                                        | Climatology (mean 2002-last year)  | Monthly       | previous_month | haildays2cmclimM_ch01r.swiss.lv95    |
|                                        | Climatology (mean 2002-last year)  | Yearly        | previous_year  | haildays2cmclimY_ch01r.swiss.lv95    |
|                                        | *Standard deviation of Climatology* | Monthly       | previous_month | *haildays2cmclimstdM_ch01r.swiss.lv95* |
|                                        | *Standard deviation of Climatology* | Yearly        | previous_year  | *haildays2cmclimstdY_ch01r.swiss.lv95* |
| **Number of Hail Days with Hail >4cm** | Absolute *values*                  | Monthly       | previous_month | haildays4cmM_ch01r.swiss.lv95        |
|                                        | Absolute *values*                  | Yearly        | previous_year  | haildays4cmY_ch01r.swiss.lv95        |
|                                        | Anomaly/deviation from Climatology | Monthly       | previous_month | haildays4cmanomM_ch01r.swiss.lv95    |
|                                        | Anomaly/deviation from Climatology | Yearly        | previous_year  | haildays4cmanomY_ch01r.swiss.lv95    |
|                                        | Climatology (mean 2002-last year)  | Monthly       | previous_month | haildays4cmclimM_ch01r.swiss.lv95    |
|                                        | Climatology (mean 2002-last year)  | Yearly        | previous_year  | haildays4cmclimY_ch01r.swiss.lv95    |
|                                        | *Standard deviation of Climatology* | Monthly       | previous_month | *haildays4cmclimstdM_ch01r.swiss.lv95* |
|                                        | *Standard deviation of Climatology* | Yearly        | previous_year  | *haildays4cmclimstdY_ch01r.swiss.lv95* |

<!-- alle stdM, /Y weglassen -->