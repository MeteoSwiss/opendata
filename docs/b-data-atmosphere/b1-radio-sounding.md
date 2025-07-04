---
sidebar_position: 1
---

# Radio soundings

MeteoSwiss performs [soundings](https://www.meteoswiss.admin.ch/weather/measurement-systems/atmosphere/radio-soundings.html) twice a day (`00:00 UTC` and `12:00 UTC`) from the sounding station in Payerne (station identifier `PAY`) using weather balloon radiosondes.

The radiosondes measure temperature and humidity as well as its position and altitude using [GNSS](https://www.swisstopo.admin.ch/en/global-navigation-satellite-systems). Attached to a [weather balloon](https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/weather-balloon.html) and carried high into the atmosphere, wind speed and direction as well as atmospheric pressure can further be derived. 

The data obtained in this way are of great importance for weather forecasts and climate research. The data collected during the radiosonde's ascent are transmitted by radio to the receiving station in Payerne, where they are logged in the MeteoSwiss database. The results of the latest sounding are published  either as graphs ([emagrams](https://www.meteoswiss.admin.ch/services-and-publications/applications/radio-soundings.html#tab=radio-soundings-emagram)) or as [decoded data](https://www.meteoswiss.admin.ch/services-and-publications/applications/radio-soundings.html#tab=radio-soundings-decoded) files. 

## Data download {#data-download}

The file contains the data from the most recent sounding. The update frequency depends on the two soundings per day (at `00:00 UTC` and `12:00 UTC`).

The following **example data file** is available for download: [`ogd-radiosounding_pay_now.csv`](https://github.com/MeteoSwiss/publication-opendata/tree/main/data-atmosphere/radiosounding)

## Data format {#data-format}

[`CSV`](https://opendatadocs.meteoswiss.ch/general/download#column-separators-and-decimal-dividers) with an estimated volume of 0.02 MB per file.

## Metadata {#metadata}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="metadata">
  <TabItem value="parameters" label="Parameter">
    See **example** [parameter metadata file](https://github.com/MeteoSwiss/publication-opendata/blob/main/data-atmosphere/radiosounding-PAY-metadata) incl. codes for 'Profile Type', 'Level Type' and 'Solar Radiation Correction'.

    The productive version will provide a parameter metadata file with the file name: `ogd-radiosounding_meta_parameters.csv`
  </TabItem>
  <TabItem value="stations" label="Stations">
    See **example** [station metadata file](https://data.geo.admin.ch/ch.meteoschweiz.ogd-radiosounding/ogd-radiosounding_meta_stations.csv).
  </TabItem>
</Tabs>

## Data usage {#data-usage}

See e.g. MeteoSwiss' [Emagrams](https://www.meteoswiss.admin.ch/services-and-publications/applications/radio-soundings.html#tab=radio-soundings-emagram).
