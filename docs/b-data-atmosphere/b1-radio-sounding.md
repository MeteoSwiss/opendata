---
sidebar_position: 1
---

# Radiosounding Data (Payerne Aerological Station)

MeteoSwiss operates one of the world’s longest, continuously measured upper‑air time series at the aerological station in Payerne (WIGOS ID: 0‑20000‑0‑06610). Radiosoundings provide vertical profiles of key atmospheric state variables and are essential for weather forecasting, climate monitoring, numerical model assimilation, and satellite validation.
The data collected during the radiosonde's ascent are transmitted by radio to the receiving station in Payerne, where they are logged in the MeteoSwiss database. The results of the latest sounding are published  either as graphs ([emagrams](https://www.meteoswiss.admin.ch/services-and-publications/applications/radio-soundings.html#tab=radio-soundings-emagram)) or as [decoded data](https://www.meteoswiss.admin.ch/services-and-publications/applications/radio-soundings.html#tab=radio-soundings-decoded) files. 
The radiosondes measure temperature and humidity as well as its position and altitude using [GNSS](https://www.swisstopo.admin.ch/en/global-navigation-satellite-systems). Attached to a [weather balloon](https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/weather-balloon.html) and carried high into the atmosphere, wind speed and direction as well as atmospheric pressure can further be derived. 

## Measurement Programme
The operational radiosounding system delivers complete vertical profiles of:

Pressure (P)
Temperature (T)
Relative Humidity (RH)
Wind (speed and direction) from GPS tracking
Geopotential height
Derived parameters, e.g.

Tropopause height
0 °C isotherm height
Stability indices (CAPE, CIN, Lifted Index, etc.)
Various atmospheric layer means and thicknesses

## Launch schedule
MeteoSwiss performs two soundings per day, launched at:

23 UTC (nominal time 00 UTC)
11 UTC (nominal time 12 UTC)

Additional soundings may be performed during special events, campaigns, or severe weather episodes.

## Instrumentation
Since 2018, MeteoSwiss operates Vaisala RS41 radiosondes.
Historical sondes include:

SRS‑400
SRS‑C34
SRS‑C50

A full homogenization of the Payerne PTU data (FC21*) is available for climate applications.

## Data Structure
Files per sounding
Each file contains:

-Full vertical profile from ground to ~35 km
-All measured and derived parameters
-Metadata such as launch time, sonde type, ascent rate, and processing flags

## Data granularity

-Level‑by‑level ascent data (typically ~800–1200 levels per profile)
-Standard pressure levels
-Significant levels
-Derived levels (tropopause, isotherms, etc.)

## Data periods

-Historical data since the 1940s
-Homogenized PTU series available from 1959–2025
-Operational RS41 data from 2018–present

## Data updates

-New soundings appear shortly after each ascent
-Historical archives are static; homogenized series updated occasionally
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
