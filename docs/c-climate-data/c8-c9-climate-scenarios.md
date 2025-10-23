---
sidebar_position: 8
---

# Climate scenarios

You can access the `CH2018` data via the [`NCCS` website](https://www.nccs.admin.ch/nccs/en/home/climate-change-and-impacts/swiss-climate-change-scenarios.html).

:::info

The [CH2025](https://www.meteoswiss.admin.ch/about-us/research-and-cooperation/projects/2023/climate-ch2025.html) data are available in November 2025.

This is a draft that is being worked on until the official launch of the CH2025 climate scenarios on November 4th.

:::

:::warning

Links in this documentation will only work after the launch of the CH2025 climate scenarios on November 4th.

:::

The localised Climate CH2025 datasets consist of 30-year daily time series for different [Global Warming Levels (GWL)](https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/global-warming-level-gwl.html) (forthcoming) and the reference period 1991–2020 for several climate variables at individual Swiss stations (DAILY-LOCAL) and on a regular 1 km grid covering the area of Switzerland (DAILY-GRIDDED). This data is primarily useful for research purposes or professional consulting. 

A detailed description of the localised Climate CH2025 datasets is available on the MeteoSwiss Website: [Climate CH2025 datasets](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-scenarios/reports-data-and-graphs-of-climate-change-scenarios/climate-ch2025-datasets.html)

## Data structure

Here is a short overview of the datasets:

| **Attributes**| **DAILY-LOCAL** | **DAILY-GRIDDED**|
|-----------|------------------|-----------------|
| Number of Parameters | 7 | 4 |
| Formats | CSV, NetCDF (in ZIPs) | NetCDF |
| Data Volume per file | CSV: ~1.5 MB, NetCDF: ~200KB | NetCDF: ~1-2 GB |

Detailed information on the available simulations and variables, limitations and a list of available Swiss stations can be found in the user documentation of the localised Climate CH2025 datasets:

* User documentation pdf on the Meteoswiss website: (Link forthcoming)
* [Climate CH2025 datasets on the MeteoSwiss Website](https://www.meteoswiss.admin.ch/climate/climate-change/swiss-climate-scenarios/reports-data-and-graphs-of-climate-change-scenarios/climate-ch2025-datasets.html)

## Data download {#data-download}

The Open Data from MeteoSwiss may be used without restriction; the **source must be cited** when reproducing or redistributing ("**Source: MeteoSwiss & ETH Zurich (2025): Climate CH2025 - Daily Datasets. Federal Office of Meteorology and Climatology MeteoSwiss, Zurich, https://doi.org/10.18751/climate/scenarios/ch2025/data/1.0/**").

:white_check_mark: By using 'Open Data' from MeteoSchweiz, you confirm that you have taken note of the [Terms of use](/general/terms-of-use).

## Download options {#download-options}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="download-options" groupId="download-options">
    <TabItem value="browser" label="Manual download via STAC Browser">
    Users that prefer to use a web interface to browse and download individual files can use the STAC Browser for [DAILY-LOCAL](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-climate-scenarios-ch2025?.language=en) and [DAILY-GRIDDED](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-climate-scenarios-ch2025-grid?.language=en). 
    </TabItem>
    <TabItem value="R" label="Download using R">
    The script below shows how one could use the R language with the `rstac` library to query the STAC API and download files.

    More information about the STAC specification and and R tutorial can be found on [stacspec.org](https://stacspec.org/en/tutorials/intro-to-stac/).

    ```
    library(rstac)

    # Define the STAC API to use
    stac_source <- rstac::stac(
      "https://data.geo.admin.ch/api/stac/v1/"
    )
    stac_source

    # Show info about STAC source
    rstac::get_request(stac_source)

    # Query source for available collections
    available_collections <- stac_source |>
      rstac::collections() |>
      rstac::get_request()
    available_collections

    # define filter criteria for STAC search
    collection_id <- "ch.meteoschweiz.ogd-climate-scenarios-ch2025"
    collection <- stac_source |>
      rstac::collections(collection_id = collection_id) |>
      rstac::get_request()
    collection

    # Query all assets of the selected collection
    assets <- rstac::stac_search(
      q = stac_source,
      collection = collection_id,
      limit = 999) |>
      rstac::get_request()

    # Helper function to filter assets
    # @param assets: return value of a call to rstac::stac_search c
    # @param pattern: regexp pattern to search in asset name
    # @param extension: optional file ending (default NULL)
    assets_subset <- function(assets, pattern="", extension=NULL) {
      assertions::assert_class(assets, "doc_items")
      assertions::assert_character(pattern)
      if (!is.null(extension)) {
        assertions::assert_character(extension)
        pattern <- paste0(pattern, ".*\\.", extension)
      }
      subset <- rstac::assets_select(assets,
                                    select_fn = function(asset){
                                      return(length(grep(pattern, asset$title)) > 0)
                                    }
      )
      n_assets <- length(rstac::assets_url(subset))
      cat(n_assets, "assets found for pattern", paste0("'", pattern, "'."), fill = TRUE)
      return(subset)
    }

    # Filter assets using the helper function: find all csv assets for parameter hurs
    hurs_assets <- assets_subset(assets, pattern = "_hurs_", extension = "csv")

    # get download urls for these assets
    rstac::assets_url(hurs_assets)

    # download the selected assets
    # rstac::assets_download(hurs_assets, output_dir = tempdir())
    ```

    </TabItem>
    <TabItem value="R" label="Download using R">
    The script below shows how one could use the Python language with the `pystac` and `pystac_client` packages to query the STAC API and download files.

    More information about the STAC specification and python tutorials can be found on [stacspec.org](https://stacspec.org/en/tutorials/intro-to-stac/).

    ```
    import json

    from pystac import Asset
    from pystac_client import Client, CollectionClient

    import re
    import urllib.request

    def main(): 
        catalog = Client.open('https://sys-data.int.bgdi.ch/api/stac/v1/')
        print(catalog.title)

        # get a pystac client for the DAILY-LOCAL collection
        collection_id = "ch.meteoschweiz.ogd-climate-scenarios-ch2025"
        collection: CollectionClient = catalog.get_collection(collection_id)
        print(collection.title)

        # print all items
        for item in collection.get_items():
            print(f"{item.id}: {len(item.assets)}")

        # create a dict with all items of the collection
        assets_dict = {}
        for item in collection.get_items():
            assets_dict = assets_dict | item.assets
        print(f"Number of assets: {len(assets_dict)}")

        # find matching keys
        hits = [k for k in assets_dict.keys() if k == "ogd-climate-scenarios-ch2025_zwk_pr_ref91-20.csv" ]

        # use regular expression to find matching keys
        pattern = "_zwk_" # find all assets for station zwk, the same can be done for parameters, GWLs etc. 
        pattern = re.compile("^.*" + pattern + ".*$")
        hits = [k for k in assets_dict.keys() if pattern.match(k) ]
        print(f"Hits for pattern {pattern}: {hits}")

        # download all hits to current directory
        for k in hits:
            print(assets_dict[k].href)
            #urllib.request.urlretrieve(url=assets_dict[k].href, filename=k)
    ```
    
    </TabItem>
</Tabs>

## Further Information {#further-information}

If you have questions contact: klimaszenarien@meteoschweiz.ch

To receive updates on the datasets and complementary products sign up for the ["Klima-Newsletter"](https://www.meteoschweiz.admin.ch/service-und-publikationen/publikationen/verschiedenes/2024/klima-newsletter.html).





