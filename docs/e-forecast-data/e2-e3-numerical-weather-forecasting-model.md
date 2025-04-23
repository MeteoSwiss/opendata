---
sidebar_position: 2
---

import ForecastDomainMap from './interactive-map/ForecastDomainMap';

# Numerical weather forecasting model ICON-CH1/2-EPS

MeteoSwiss uses two models, [**ICON-CH1-EPS** and **ICON-CH2-EPS**](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/icon-forecasting-systems.html), to forecast atmospheric changes in Switzerland and its surroundings over a longer period than [nowcasting](/e-forecast-data/e1-short-term-forecast-data), providing predictions for up to five days. Both models include
[ensemble data assimilation](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/icon-forecasting-systems/ensemble-data-assimilation.html).

<ForecastDomainMap />

<br></br>

The documentation covers the following topics:
- [Getting started quickly](#getting-started-quickly)
- [Model specifications](#model-specifications)
- [Available parameters](#available-parameters)
- [Accessing forecast data](#accessing-forecast-data)
- [3D grid structure and representation](#3d-grid-structure-and-representation)
- [Retrieving forecasts via REST API](#6-retrieving-forecasts-via-rest-api)
- [Accessing static grid information: Height, longitude and latitude](#7-accessing-static-grid-information-height-longitude-and-latitude)
- [Reading forecast files using ecCodes](#8-reading-forecast-files-using-eccodes)

<br></br>

## Getting started quickly

### Example notebooks: From retrieval to Visualization

These [Jupyter notebooks](https://github.com/MeteoSwiss/opendata-nwp-demos) provide examples of how to access and process numerical weather prediction (NWP) model data from MeteoSwiss.

## Model specifications

| **Attributes**| **ICON-CH1-EPS** | **ICON-CH2-EPS**|
|-----------|------------------|-----------------|
| Collection |[ch.meteoschweiz.ogd-forecasting-icon-ch1](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-forecasting-icon-ch1?.language=en) | [ch.meteoschweiz.ogd-forecasting-icon-ch2](https://data.geo.admin.ch/browser/#/collections/ch.meteoschweiz.ogd-forecasting-icon-ch2?.language=en) |
| Horizontal Grid Size | 1 km | 2.1 km |
| Ensemble Members | 11 | 21 |
| Forecast Period | 33 h | 120 h |
| Grid | Native icosahedral | Native icosahedral |
| Temporal Resolution |  1 h | 1 h |
| Model Run Interval | every 3 h | every 6 h |
| Format | GRIB edition 2 | GRIB edition 2 |

## Available parameters

## 🚧  **Temporary Notice Work in Progress**

Users can find information about available parameters, including metadata about height, longitude and latitude, in the collection level assets of the above collections.

### Parameter metadata

The parameter metadata is part of each GRIB file.

## Accessing forecast data

Users can access forecast model data from the last **24 hours**. Data older than this is no longer available. The data in each collection is described in the [Model specification table](#model-specifications).

> ⚠️ **WARNING**: Data located at the boundary of the spatial domain may be random.

### Forecast data volume

The following tables summarize the volume of the different forecast files for **ICON-CH1-EPS** and **ICON-CH2-EPS**.

**ICON-CH1-EPS Data Volume**
| | Single-Level Files| Multi-Level Files|
|-----------|------------------|-----------------|
| Deterministic| 199.0 Bytes - 2.2 MiB| 19.7 - 177.4 MiB|
| Perturbed | 1.9 KiB - 22.4 MiB | 197.1 MiB - 1.7 GiB |

**ICON-CH2-EPS Data Volume**
| | Single-Level Files| Multi-Level Files|
|-----------|------------------|-----------------|
| Deterministic|  175.0 Bytes - 564.7 KiB| 4.9 MiB - 43.9 MiB|
| Perturbed | 3.4 KiB - 11 MiB | 97.5 MiB - 877.5 MiB |

## 3D grid structure and representation

The model data is structured on both a horizontal and vertical grid. While some parameters extend across the entire three-dimensional grid, others are only available at specific vertical levels.

Parameters are classified as either **single-level** or **multi-level**:
- **Single-level parameters** contain data at a specific vertical level.
- **Multi-level parameters** extend across multiple vertical layers.

For example, vertical velocity is stored at multiple vertical levels, while the two-meter temperature is available only at a single vertical level.

### Vertical grid

The vertical grid above the surface is a height-based coordinate system that follows the terrain and is divided into multiple layers. The closer the layer is to the surface, the narrower the layers are, as shown in the image below.

The so-called half levels align with vertical grid points, while the full levels represent an averaged value over a vertical interval.

There are 81 discrete half levels and 80 full levels in our data.

![VerticalLayers](./../../static/docs_img/VerticalLayers.png) <br></br>
*Illustration of ICON's vertical levels, Working with the ICON Model 2024, Figure 3.2*

<br></br>

Most parameters are stored on full vertical levels, while some — such as the vertical velocity `W` — are stored on half (staggered) levels.

To determine the vertical positioning of a parameter, inspect the GRIB2 key `typeOfLevel`:

* `generalVertical` indicates half levels

* `generalVerticalLayer` indicates full levels

For details on reading GRIB key values, see [8.2 Decoding GRIB Files with ecCodes](#82-decoding-grib-files-with-eccodes).

For more detailed information on the vertical grid, read section 3.4 in [Working with the ICON Model](https://www.dwd.de/DE/leistungen/nwv_icon_tutorial/pdf_einzelbaende/icon_tutorial2024.pdf?__blob=publicationFile&v=3).

In addition to the vertical grid above the surface, there is also a grid below the land surface. In this case, the **level numbers correpond directly to depths in meters below ground**. For example, the parameter "soil temperature" (abbreviated as `T_SO`) is defined using this subsurface vertical structure.

### Horizontal grid

The horizontal grid of ICON-CH1-EPS and ICON-CH2-EPS model is based on a native icosahedral grid inherited by the original ICON model grid (illustrated below).

![IcosahedralGrid](./static/docs_img/IcosahedralGrid.png) <br></br>
*Illustration of the grid construction, Working with the ICON Model, Figure 2.1*

<br></br>

Since the provided data is given in the native grid, note that the grid points correspond to the **center of the circumcircle of each triangle** and **not** to the vertices. Therefore, the longitude and latitude are based in the middle of each triangle on the grid mentioned before. For more detailed information on
the horizontal grid, read section 2.1 in [Working with the ICON Model](https://www.dwd.de/DE/leistungen/nwv_icon_tutorial/pdf_einzelbaende/icon_tutorial2024.pdf?__blob=publicationFile&v=3).

## Retrieving forecasts via REST API

If users prefer not to use the provided library to load the data, they can retrieve datasets directly via the [REST API](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data/operation/getAsset) by following the step-by-step instructions in this section to obtain forecast data for specific models, variables, and other customizable parameters.

### Submitting a POST request

Filtering and querying forecast data must be done using a **POST** request. To retrieve a forecast, use a tool like `curl` and send the request to the API endpoint:
```
curl -X POST "https://data.geo.admin.ch/api/stac/v1/search" \
     -H "Content-Type: application/json" \
     -d '{
            "collections": [
                "ch.meteoschweiz.ogd-forecasting-icon-ch2"
            ],
            "forecast:reference_datetime": "2025-03-12T12:00:00Z",
            "forecast:variable": "TOT_PREC",
            "forecast:perturbed": false,
            "forecast:horizon": "P0DT00H00M00S"
        }'
```

Each parameter in the request body serves the following purpose:
- `collections`: Defines the forecast model to use (`ICON-CH1-EPS` or `ICON-CH2-EPS`).
- `forecast:reference_datetime`: Specifies the desired forecast initialization time (e.g., `2025-03-12T12:00:00Z`).
- `forecast:variable`: Indicates the meteorological parameter of interest (`TOT_PREC` for total precipitation, for example).
- `forecast:perturbed`: Boolean flag determining if the data is deterministic (`false`) or ensemble-based.
- `forecast:horizon`: Defines the lead time of the forecast in ISO 8601 duration format (`P0DT00H00M00S` for instant data).

### Downloading the forecast data

Upon a successful request, the response will contain a dictionary of metadata, including forecast file links under the `assets` key. Locate the `href` field containing the pre-signed URL.
Download the GRIB file using the following command:
```
wget -O <desired_filename> “<pre-signed URL>”
```
After downloading your forecast data, it's good practice to verify its integrity before use.

### Verify data integrity

To ensure the downloaded file is not corrupted, compute its SHA-256 hash and verify it against the checksum provided in the file's header field.

**Steps:**
1. Open a terminal and generate the SHA-256 checksum of the downloaded file:
```
sha256sum <downloaded_filename>
```

2. Retrieve the checksum from the file’s header field `x-amz-meta-sha256` using the following command:
```
curl -s -i "<pre-signed URL>" | awk -F': ' '/x-amz-meta-sha256/ {print $0}'
```

3. Compare the two hash values. If they match, your forecast data file is safe to use.

<br></br>

Once the file is verified, you can proceed with decoding the GRIB file using the instructions in [8.2 Decoding GRIB Files with ecCodes](#282-decoding-grib-files-with-eccodes).

## Accessing static grid information: Height, longitude and latitude

Besides the current forecast files, each catalog contains two static files. They store permanent information about the height of the half levels (HHL) in the vertical grid and the center point coordinates of each triangle on the horizontal grid.

> ❗ **NOTE**: The forecast GRIB files contain no information on height, longitude and latitude. They have to be determined via the static vertical and horizontal grid parameter files.

### Accessing vertical grid parameters

In the static vertical file, the heights of the half levels of the vertical grid are provided in meters above see level. In order to associate a value from a data file (for a given parameter) to a height in meters above sea level, follow the steps below:

1. Submit a GET request specifying the collection you want to retrieve the static vertical files from (e.g., `ch.meteoschweiz.ogd-forecasting-icon-ch1` for ICON-CH1-EPS):
```
curl -X GET https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-forecasting-icon-ch1/assets
```
2. Locate under `assets` in `id: vertical_constants_icon-ch1-eps.grib2` the `href` field and copy the pre-signed URL.
3. Download the file with:
```
wget -O <desired_filename> “<pre-signed URL>”
```
4. Once the static GRIB file is downloaded, verify that the `uuidOfHGrid` (Universally Unique Identifier) key in the data file matches the one in the HHL file.
5. Retrieve the value for the `level` key and inspect the `typeOfLevel` key by listing the GRIB messages:
    - **generalVertical**: The value of `level` corresponds to a half level in the HHL file. For each level (i.e., each GRIB message), the variable `h` provides the height in meters above sea level for every grid point.
    - **generalVerticalLayer**: The `level` value corresponds to a full level. To obtain the height in meters above sea level, average the heights of the two surrounding half levels (above and below).
    - **Other types of level**: These are usually specified directly in meters and are self-explanatory.

### Accessing horizontal grid parameters

> ❗ **NOTE**: We recommend inexperienced GRIB file users to take a look at the provided [Jupyter Notebooks](https://github.com/MeteoSwiss/opendata-nwp-demos). The data retrieval with the Python API includes fetching longitude and latitude.

The static horizontal file stores the longitude and latitude of the center points of each triangle in the horizontal grid. To retrieve this information, follow the steps below:

1. Submit a GET request specifying the collection you want to download the static horizontal files from (eg. `ch.meteoschweiz.ogd-forecasting-icon-ch1` for ICON-CH1-EPS).
```
curl -X GET https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-forecasting-icon-ch1/assets
```
2. Locate under `assets` in `id: horizontal_constants_icon-ch1-eps.grib2` the `href` field and copy the pre-signed URL.
3. Download the file with:
```
wget -O <desired_filename> “<pre-signed URL>”
```
4. Once the static GRIB file is downloaded, ensure that the `uuidOfHGrid` (Universally Unique Identifier) key in the data file matches the one in the static horizontal file.

## Reading forecast files using ecCodes

Once you have the desired GRIB files, you need a tool to read them. We recommend installing [ecCodes](https://confluence.ecmwf.int/display/UDOC/How+to+install+ecCodes+with+Python+bindings+in+conda+-+ecCodes+FAQ) from ECMWF.

### Installing ecCodes and COSMO definitions

By default, a GRIB file shows the short names defined by ECMWF. However, the ICON model has its own definitions.
In order to install them, apply the steps below.

- Clone the GitHub repository [eccodes-cosmo-resources](https://github.com/COSMO-ORG/eccodes-cosmo-resources) into folder `<name_of_your_folder>`.
- Clone the GitHub repository [ecmwf/eccodes](https://github.com/ecmwf/eccodes/) into the same folder `<name_of_your_folder>`.

> ⚠️ **WARNING**:
> Make sure both repositories are in the same folder and run on the same version.

Finally, execute the following command to set the GRIB definition path:


```
export GRIB_DEFINITION_PATH=<name_of_your_folder>/eccodes-cosmo-recources/definitions:<name_of_your_folder>r/eccodes/definitions
```

> ❗ **NOTE**:
> This command must be executed every time you start a new terminal session.

### Decoding GRIB files with ecCodes

This section provides a brief introduction to decoding GRIB files using **ecCodes**.
For more details, refer to the [ECMWF ecCodes documentation](https://events.ecmwf.int/event/363/contributions/4110/attachments/2346/4098/intro_grib_decoding_2023-10-31.pdf).

Use the following commands to
- Check ecCodes installation details:
```
codes_info
```

- List all the GRIB messages in a file:
```
grib_ls filename.grib
```

- Filter GRIB messages based on key-value conditions:
```
grib_ls -w key1=value1,key2=value2 filename.grib
```

- Specify a list of keys to be printed:
```
grib_ls -p key1,key2 filename.grib
```

- Get a detailed view of the content of all GRIB messages:
```
grib_dump filename.grib
```
- Get a detailed view of GRIB messages with filters:
```
grib_dump -w key1=value1,key2=value2 filename.grib
```

> ⚠️ **WARNING**:
> Some variables in the ICON model are not included in the WMO standard definitions but are instead defined in ICON's local GRIB definitions. If a variable is missing, users should check the [eccodes-cosmo-resources files](https://github.com/COSMO-ORG/eccodes-cosmo-resources/blob/master/definitions/grib2/localConcepts/edzw/shortName.def).
