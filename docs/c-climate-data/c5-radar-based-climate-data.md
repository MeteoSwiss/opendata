---
sidebar_position: 5
---

# Spatial climate analyses - Hail

The [hail climatology](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html) was developed in a public-private partnership and represents a nationally uniform basis for the risk assessment of hail events. These grid data products are derived from [radar data](https://opendatadocs.meteoswiss.ch/d-radar-data/d3-hail-radar-products), which were [further processed for statistical statements with the use of the HailStoRe resampling approach](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology/data-and-methods.html), among other things (for more see the linked detailed product documentations). The Hail datasets are calculated in the Hail Season only (April – September).

[Spatial climate analyses](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/spatial-climate-analyses.html) are datasets that describe the geographic distribution and temporal evolution of near-surface climate variables. The data is represented comprehensively in space on a 1 km-scale grid, covering all of Switzerland. Some parameters extend back over several decades to more than a century and are updated continuously in near-real time. The data values are estimated statistically from measurements at weather stations, satellites and radar, and can be understood as pseudo observations of the conditions in the respective grid pixel.

MeteoSwiss provides a broad palette of ready-made spatial climate analyses. A comprehensive list of data products and detailed documentations are available on our [Spatial climate analyses](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/spatial-climate-analyses.html) webpage. A compact overview on other Spatial Climate Analyses than Hail can be found here: [Climate data (C3, C4)](https://opendatadocs.meteoswiss.ch/c-climate-data/c3-ground-based-climate-data)

The following Hail Climatology datasets are available via our Open Data service and are listed below, along with links to the detailed product documentation:

**Maximum Hailstone Size (MESHS)**
| Product | File name contains |
|:--------|:-------------------|
| Monthly and Yearly radar-based Maximum Hailstone Size - absolute values | `hailsizeM` / `hailsizeY` |
| Monthly and Yearly radar-based Maximum Hailstone Size - anomalies | `hailsizeanomM` / `hailsizeanomY` | 

The data contain the largest hailstone size by month and year, respectively. Hailstone sizes cannot be measured on the ground over a large areas. The size is derived from [radar measurements](https://opendatadocs.meteoswiss.ch/d-radar-data/d3-hail-radar-products) and describes the maximum expected hail size on one square kilometer based on the radar parameter MESHS (Maximum Expected Severe Hail Size). 
Hailstone sizes are given in classes from 2 cm to greater than 6 cm in 0.5 cm increments, with the lower end being inclusive and the upper end exclusive: the grid value 2 represents values from 2 cm (incl.) to 2.5 cm (excl.).
Documentation: [https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html) (cf. also under "Product Information" within the [Application "Hail Maps"](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-hail-maps.html)


**Number of Hail Days**
| Product | File name contains |
|:--------|:-------------------|
| Monthly and Yearly radar-based Number of Hail Days - absolute values | `haildaysM` / `haildaysY` |
| Monthly and Yearly radar-based Number of Hail Days - anomalies | `haildaysanomM` / `haildaysanomY` | 
| Monthly and Yearly radar-based Number of Hail Days with Hail >2cm - absolute values | `haildays2cmM` / `haildays2cmY` |
| Monthly and Yearly radar-based Number of Hail Days with Hail >2cm - anomalies | `haildays2cmanomM` / `haildays2cmanomY` |
| Monthly and Yearly radar-based Number of Hail Days with Hail >4cm - absolute values | `haildays4cmM` / `haildays4cmY` |
| Monthly and Yearly radar-based Number of Hail Days with Hail >4cm - anomalies | `haildays4cmanomM` / `haildays4cmanomY` |

The data contain the monthly and yearly number of hail days, per km2, as well as the average number of days with hailstone sizes from 2 cm and 4 cm, respectively. Hail cannot be measured on the ground over a wide area. The size is derived from [radar measurements](https://opendatadocs.meteoswiss.ch/d-radar-data/d3-hail-radar-products). A hail day is defined as a day on which a high probability of hail on the ground was concluded from the radar measurements (based on radar parameter POH). The 24 hours between 06 UTC and 06 UTC of the following day are considered.
Documentation: [https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html) (cf. also under "Product Information" within the [Application "Hail Maps"](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-hail-maps.html))


**Long-term Climatology of Number of Hail Days**
| Product | File name contains |
|:--------|:-------------------|
| Monthly and Yearly climatology (2002 – current) of Hail Days - absolute values | `haildaysclimM` / `haildaysclimY` |
| Monthly and Yearly climatology (2002 – current) of Hail Days - standard deviation | `haildaysclimstdM` / `haildaysclimstdY` |
| Monthly and Yearly climatology (2002 – current) of Hail Days with Hail >2cm - absolute values | `haildays2cmclimM` / `haildays2cmclimY` |
| Monthly and Yearly climatology (2002 – current) of Hail Days with Hail >2cm - standard deviation | `haildays2cmclimstdM` / `haildays2cmclimstdY` |
| Monthly and Yearly climatology (2002 – current) of Hail Days with Hail >4cm - absolute values | `haildays4cmclimM` / `haildays4cmclimY` |
| Monthly and Yearly climatology (2002 – current) of Hail Days with Hail >4cm - standard deviation | `haildays4cmclimstdM` / `haildays4cmclimstdY` |

The data contain the long-term average number of hail days per year or per month of the summer half-year (April to September), per km2. Due to the infrequent occurrence of hail, averaging of hailstone sizes over many years is not meaningful. Therefore, the number of days from hailstone sizes of at least 2 cm and 4 cm is provided as long-term climatology. These data allow a robust statement about the frequency of events of certain hailstone sizes. Hail cannot be measured on the ground over a wide area. The size is derived from [radar measurements](https://opendatadocs.meteoswiss.ch/d-radar-data/d3-hail-radar-products). A hail day is defined as a day on which a high probability of hail on the ground was concluded from the radar measurements (based on radar parameter POH). The 24 hours between 06 UTC and 06 UTC of the following day are considered.
Documentation: [https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html) (cf. also under "Product Information" within the [Application "Hail Climatology"](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-hailclim.html))


**Hail Hazard – Return Value Maps**
| Product | File name contains |
|:--------|:-------------------|
| Return Values for Maximum Hailstone Size (MESHS, scale 1 km2) for return periods of 2, 5, 10, 20, 30, 50, 70 and 100 years | `returnperiod[002, 005, ..., 100]ymeshs` |
| Return Values for Largest Expected Hail on a reference area (LEHA, scale 100 m2) for return periods of 2, 5, 10, 20, 30, 50, 70 and 100 years | `returnperiod[002, 005, ..., 100]yleha` |

The data contain the return values of the hailstone sizes MESHS and LEHA as a function of the return period T. They describe the hailstone size that is exceeded with a probability of 1/T per year under today's climate conditions, at a fixed location. The return values were determined using a resampling approach and describe the maximum hailstone size to be expected on a square kilometre (based on the radar parameter MESHS).
MESHS: Maximum Expected Severe Hail Size is defined as the maximum expected hail size per square kilometre. This means that most of the hail stones in this area of one square kilometre are smaller.
LEHA: Largest Expected Hail on a reference Area is a mathematical derivation from the hail size MESHS, which refers to an area of one square kilometre. LEHA describes the largest expected hail size that can be expected on a smaller reference area. In extreme cases, a hail stone of size MESHS can occur on the smaller reference area, but this will rarely happen.
Documentation: [https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology/hail-hazard.html](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology/hail-hazard.html) and Chapter 3 in [MeteoSwiss technical report 283](https://www.nccs.admin.ch/dam/nccs/de/dokumente/website/hagel/20230907_fachbericht_283.pdf.download.pdf/20230907_fachbericht_283.pdf) (cf. also under "Product Information" within the [Application "Hail Hazard"](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-hailhazard.html))


**Further documentation:** 
- Data and Methods: [https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology/data-and-methods.html](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology/data-and-methods.html)
- [Hagelklima Schweiz: Daten, Ergebnisse und Dokumentation](https://www.nccs.admin.ch/dam/nccs/de/dokumente/website/hagel/20230907_fachbericht_283.pdf.download.pdf/20230907_fachbericht_283.pdf) (PDF, 8 MB, 13.09.2023) (only in German)
- [Hail Climate Switzerland: Operational radar hail detection algorithms at MeteoSwiss: quality assessment and improvement](https://www.nccs.admin.ch/dam/nccs/de/dokumente/website/hagel/technical-report-284_200-90.pdf.download.pdf/technical-report-284_200-90.pdf) (PDF, 9 MB, 13.09.2023)

:::info

The hail datasets are continuously updated as time passes: 
- Monthly updates are available at the end of the following month
- Yearly updates are available at the end of October
- Hail Hazard - Return Values are static information 

The data files of the current month/year are available in the **items list** (see [STAC Browser](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-derived-grid). The older ones are stored in the item `CH archive`. Hazard Maps / return values are also stored in the item `CH archive`.

:::

## Data download

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

The Hail Climate dataset's DOI: [https://doi.org/10.18751/Climate/Griddata/CHHC/1.0](https://doi.org/10.18751/Climate/Griddata/CHHC/1.0)

### Download data automatically

Download **files** automatically via FSDI's REST API: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-derived-grid`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-radar-derived-grid)

The STAC Browser can be a useful tool to facilitate the use of the API: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-derived-grid`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-derived-grid)

### Download data manually

Select and download **files** manually via FSDI's [STAC Browser](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-radar-derived-grid).

⚠️ **Please refer to the information in the info box above to see in which items you can find which files.**

## Data format

The data format is [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/).

## Coordinate system

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 

## Data usage
 
- Application browsers on MeteoSwiss' [Hail Climatology](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/hail-climatology.html) webpage
- [NCCS brochure "Hail Climate Switzerland"](https://www.nccs.admin.ch/dam/nccs/en/dokumente/website/hagel/nccs_broschuere_hagelklima_schweiz.pdf.download.pdf/NCCS_Brochure_Hail_Climate_Switzerland.pdf) (PDF, 3 MB, 04.05.2021)
- [https://www.hagelforschung.ch/lernmodule](https://www.hagelforschung.ch/lernmodule)
