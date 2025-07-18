---
sidebar_position: 6
---

# Climate normals

Typical conditions of the Swiss climate are described using long-term averages of meteorological parameters such as temperature, precipitation and hours of sunshine. They are used as a baseline to evaluate climate events and provide context information for the analysis of year-to-year variability.

The 30-year average and 30-year averaging periods defined by the World Meteorological Organisation WMO are used as standard for climate normals worldwide. The international coordination and standardisation is important to enable comparisons across national boundaries. Normal periods are regularly updated in light of climate change.

MeteoSwiss provides monthly and annual [climate normals](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/climate-normals.html) for the periods 1961-1990 (standard reference period for long-term climate change assessments) and 1991-2020 (current WMO climatological standard period) for various parameters of measuring stations with long data series.

:::info

For **grid data**, go to [Spatial climate normals](/c-climate-data/c7-spatial-climate-normals).

:::

## Data download {#data-download}

You can download the available Open Data via [opendata.swiss](https://opendata.swiss/en/dataset/klimanormwerte/resource/e80497da-0ffb-4437-87bb-3d72e3296349), as ZIP (in `TXT` format).

## Data structure {#data-structure}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="data-structure">
  <TabItem value="files-per-parameter" label="Files per parameter">
    The data is [split by parameter](https://www.meteoswiss.admin.ch/climate/the-climate-of-switzerland/climate-normals/normal-values-per-measured-parameter.html). 
    
    Per parameter there is one file including all available stations.

    The periodic processing of newly emerging inhomogeneities in the data series can result in altered normal values for some stations at the beginning of a new year. The processing status can be gathered from the individual documents.
  </TabItem>
</Tabs>

## Data format {#data-format}

`TXT` with an estimated volume of ≤0.02 MB per file.

The files are separated by tabs. 

## Metadata {#metadata}

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    All parameters have a unique identifier that depends on the time resolution (e.g. `gre000m0` for "global radiation; monthly values").
    
    *[Parameter metadata (file) to be provided]*
    <!-- provides a list of all parameter identifiers with explanation, time interval, decimal places, data type and unit of measurement. -->
  </TabItem>
  <TabItem value="stations" label="Stations">
    Stations are represented in the data by their station names.
  </TabItem>
</Tabs>

## Data usage {#data-usage}

See e.g. MeteoSwiss' [Normal values per measured parameter](https://www.meteoswiss.admin.ch/services-and-publications/applications/ext/climate-normtables.html#https%3A%2F%2Fservice.meteoswiss.ch%2Fproductbrowser%2FproductDisplay%2Fclimate-normtables%3Flang=en) application.
