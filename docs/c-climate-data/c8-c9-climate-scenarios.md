---
sidebar_position: 8
---

# Climate scenarios

:::info

For `CH2018` data, see the [`NCCS` website](https://www.nccs.admin.ch/nccs/en/home/climate-change-and-impacts/swiss-climate-change-scenarios.html).

:::

The localized Climate CH2025 datasets consist of 30-year daily time series for different [Global Warming Levels (GWLs)](https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/global-warming-level-gwl.html)  and the reference period 1991–2020 for several climate variables at individual Swiss stations (DAILY-LOCAL) and on a regular 1 km grid covering the area of Switzerland (DAILY-GRIDDED). All datasets were produced by bias-adjusting and downscaling regional climate model data, including data for the 1991-2020 reference period. They do not directly reflect observations. This data is primarily useful for research purposes or professional consulting. 

A detailed description of the localized Climate CH2025 datasets is available on the MeteoSwiss Website: [Climate CH2025 datasets](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-scenarios/reports-data-and-graphs-of-climate-change-scenarios/climate-ch2025-datasets.html) 

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss & ETH Zurich (2025): Climate CH2025 - Daily Datasets. Federal Office of Meteorology and Climatology MeteoSwiss, Zurich, [https://doi.org/10.18751/climate/scenarios/ch2025/data/1.0](https://doi.org/10.18751/climate/scenarios/ch2025/data/1.0)**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

### Download options {#download-options}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="download-options">
  <TabItem value="browser" label="Manual download via STAC Browser">
    Users who prefer to use a web interface to browse and download individual files can use the STAC Browser for [DAILY-LOCAL](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-climate-scenarios-ch2025?.language=en) and [DAILY-GRIDDED](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-climate-scenarios-ch2025-grid?.language=en). 
  </TabItem>
  <TabItem value="bash" label="Download using bash">
  The script [download_ch2025_interactive.sh](guides/download_ch2025_interactive.sh) can be used to download *Climate* CH2025 files via the STAC API. 
  
  Prerequisites: `bash` with tools `curl`, `jq` and `wget` installed. The script was tested on Ubuntu Linux. 

  Example session: 

  Download the file (or copy the code) to your linux bash terminal and to the folder where to want to store the data.

  Run the bash script in a terminal:

  The console then lets you choose between DAILY-LOCAL and DAILY-GRIDDED datasets.
  Afterwards you can choose the speficications for DAILY-LOCAL (stations, parameters, GWLs, file format) or DAILY-GRIDDED (parameters, GWLs) to download the desired data.
  
  Example download session: 
    ```
    host:~$ ./download_ch2025_interactive.sh 
    Do you want to download DAILY-LOCAL or DAILY-GRIDDED? (local/gridded): local
    Enter station code (e.g. abo or all): abo
    Enter parameter (pr, tas, tasmin, tasmax, rsds, hurs, sfcwind or all): tasmin
    Enter GWL (ref91-20, gwl1.5, gwl2.0, gwl2.5, gwl3.0 or all): ref91-20
    Enter format (.csv or .zip): .csv
    Querying STAC API for collection: ch.meteoschweiz.ogd-climate-scenarios-ch2025
    ✅ Found 1 matching files:
    https://rgw.cscs.ch/mchogd:cscs.meteoswiss.ogd.climate/ogd-climate-scenarios-ch2025/abo/ogd-climate-scenarios-ch2025_abo_tasmin_ref91-20.csv
    ⚠️  Careful: 1 files will be downloaded. Estimated total size: 1.2 MB.
    Continue? (y/n): y
    Downloading files...
    Downloading: https://rgw.cscs.ch/mchogd:cscs.meteoswiss.ogd.climate/ogd-climate-scenarios-ch2025/abo/ogd-climate-scenarios-ch2025_abo_tasmin_ref91-20.csv
    ✅ Download complete. Files saved in folder: ogd-climate-scenarios-ch2025/abo
    ```
  </TabItem>
  <TabItem value="R" label="Download using R">
    The R package `rstac` implements some functionality to query a STAC API. However, it does not currently support pagination well. For this reason, we do not provide an R script here. 

    More information about the STAC specification and tutorials for R can be found on [stacspec.org](https://stacspec.org/en/tutorials/intro-to-stac/).
  </TabItem>
  <TabItem value="Python" label="Download using Python">
    The [download_ch2025_data.py](guides/download_ch2025_data.py) script shows how one could use the Python language with the `pystac` and `pystac_client` packages to query the STAC API and download files.

    More information about the STAC specification and python tutorials can be found on [stacspec.org](https://stacspec.org/en/tutorials/intro-to-stac/).
  </TabItem>
</Tabs>


## Data structure and format {#data-structure-format}

Here is a short overview of the datasets:

| **Attributes**                  | **DAILY-LOCAL**                       | **DAILY-GRIDDED** |
|---------------------------------|---------------------------------------|-------------------|
| Number of Parameters            | 7                                     | 4                 |
| Formats                         | CSV, NetCDF (in ZIPs)                 | NetCDF            |
| Data Volume per file            | CSV: ~1.5 MB <br></br> NetCDF: ~200KB | ~1-2 GB           |

Detailed information on the available simulations and variables, limitations and a list of available Swiss stations can be found in the user documentation of the localized Climate CH2025 datasets:
- [User documentation pdf on the MeteoSwiss website](https://www.meteoswiss.admin.ch/dam/jcr:f54fae36-9a40-4e45-8abb-0308d0a68a10/CH2025_documentation_localized_v1.0.pdf)
- [Climate CH2025 datasets on the MeteoSwiss Website](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-scenarios/reports-data-and-graphs-of-climate-change-scenarios/climate-ch2025-datasets.html)


## Metadata {#metadata}

<Tabs queryString="metadata">
  <TabItem value="daily-local-parameters" label="DAILY-LOCAL Parameters">
    [`ogd-climate-scenarios-ch2025_meta_parameters.csv`](https://rgw.cscs.ch/mchogd:cscs.meteoswiss.ogd.climate/ogd-climate-scenarios-ch2025/ogd-climate-scenarios-ch2025_meta_parameters.csv) provides a list of all parameter identifiers with description, parameter group and unit of measurement.
  </TabItem>
  <TabItem value="daily-local-stations" label="DAILY-LOCAL Stations">
    All stations have a three-letter identifier (e.g. `BER` for "Bern/Zollikofen" or `LUG` for "Lugano").
    
    [`ogd-climate-scenarios-ch2025_meta_stations.csv`](https://rgw.cscs.ch/mchogd:cscs.meteoswiss.ogd.climate/ogd-climate-scenarios-ch2025/ogd-climate-scenarios-ch2025_meta_stations.csv) provides a list of all station identifiers with full station name, altitude and coordinates.
  </TabItem>
  <TabItem value="daily-gridded-parameters" label="DAILY-GRIDDED Parameters">
    [`ogd-climate-scenarios-ch2025-grid_meta_parameters.csv`](https://rgw.cscs.ch/mchogd:cscs.meteoswiss.ogd.climate/ogd-climate-scenarios-ch2025-grid/ogd-climate-scenarios-ch2025-grid_meta_parameters.csv) provides a list of all parameter identifiers with description, parameter group and unit of measurement.
  </TabItem>
</Tabs>


## Contact and staying up to date {#contact-staying-up-to-date}

Please use our contact form for questions: https://www.meteoswiss.admin.ch/about-us/contact/contact-form.html

To receive updates on the datasets and complementary products, please sign up for the "MeteoSwiss Climate Newsletter":
- [in German](https://www.meteoschweiz.admin.ch/service-und-publikationen/publikationen/verschiedenes/2024/klima-newsletter.html),
- [in French](https://www.meteosuisse.admin.ch/services-et-publications/publications/divers/2024/newsletter-climat.html) or
- [in Italian](https://www.meteosvizzera.admin.ch/servizi-e-pubblicazioni/pubblicazioni/diversi/2024/newsletter-clima.html).






