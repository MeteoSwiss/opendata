---
sidebar_position: 8
---

# Climate scenarios

You can access the `CH2018` data via the [`NCCS` website](https://www.nccs.admin.ch/nccs/en/home/climate-change-and-impacts/swiss-climate-change-scenarios.html).

:::info

The [CH2025](https://www.meteoswiss.admin.ch/about-us/research-and-cooperation/projects/2023/climate-ch2025.html) data are expected to be available in November 2025.

This is a draft that is being worked on until the official launch of the CH2025 climate scenarios on November 4th.

:::

## Getting started quickly {#getting-started-quickly}

## Available data {#available-data}

## Download options {#download-options}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
<Tabs queryString="download-options" groupId="download-options">
    <TabItem value="browser" label="Manual download via STAC Browser">
    If users prefer to use a web interface to browse and download individual forecast GRIB files,
    they can use the STAC Browser for [DAILY LOCAL](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-climate-scenarios-ch2025?.language=en) and [DAILY-GRIDDED](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-climate-scenarios-ch2025-grid?.language=en). 
    </TabItem>
    <TabItem value="R" label="Download using R">
    You can use the `rstac` R library to query the STAC API programmatically.

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

# Query all assets of the collection
assets <- rstac::stac_search(
  q = stac_source,
  collection = collection_id,
  limit = 999
) |>
  rstac::get_request(asset_query)
```
    </TabItem>
</Tabs>


## Data Structure {#data-structure}

## Data download {#data-download}

## FAQ/Troubleshooting {#faqtroubleshooting}

