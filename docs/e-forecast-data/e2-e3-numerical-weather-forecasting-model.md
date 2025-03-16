---
sidebar_position: 2
---

# E2 + E3 Numerical Weather Forecasting Model Data

MeteoSwiss uses two models, **ICON-CH1-EPS** and **ICON-CH2-EPS**, to forecast atmospheric changes in Switzerland and its surroundings over a longer period than nowcasting, providing predictions for up to five days. Both models include [ensemble data assimilation](https://www.meteoswiss.admin.ch/weather/warning-and-forecasting-systems/icon-forecasting-systems/ensemble-data-assimilation.html).

The documentation covers the following topics:
- [2.1 Model Specification](###2.1-model-specification)
- [2.2 Available Parameters](###2.2-available-parameters)
- [2.3 Accessing Forecast Data](###2.3-Accessing-Forecast-Data)
- [2.4 3D Grid Structure and Representation](###2.4-3D-Grid-Structure-and-Representation)
- [2.5 Data Visualisation](###2.5-Data-Visualisation)

## 2.1 Model Specification

| **Attributes**| **ICON-CH1-EPS** | **ICON-CH2-EPS**|
|-----------|------------------|-----------------|
| Collection |[ch.meteoschweiz.ogd-forecasting-icon-ch1](https://sys-data.int.bgdi.ch/browser/#/collections/ch.meteoschweiz.ogd-forecasting-icon-ch1?.language=en) | [ch.meteoschweiz.ogd-forecasting-icon-ch2](https://sys-data.int.bgdi.ch/browser/#/collections/ch.meteoschweiz.ogd-forecasting-icon-ch2?.language=en) |
| Horizontal Grid Size | 1 km | 2.1 km |
| Ensemble Members | 11 | 21 |
| Forecast Period | 33 h | 120 h |
| Grid | Native icosahedral | Native icosahedral |
| Temporal Resolution |  1 h | 1 h |
| Model Run Interval | every 3 h | every 6 h |
| Format | GRIB edition 2 | GRIB edition 2 |


## 2.2 Available Parameters

Users can find information about available parameters, including metadata, in the collection level assets of the above collections.

### 2.2.1 Parameter Metadata

The parameter metadata is part of each GRIB file.


## 2.3 Accessing Forecast Data

Users can access forecast model data from the last **24 hours**. Data older than this is no longer available. The data in each collection is described in the [Model Specification table](###2.1-model-specification).

### 2.3.1 Forecast Data Volume

The following tables summarize the volume of the different forecast files for **ICON-CH1** and **ICON-CH2**.

**ICON-CH1 Data Volume**
| | Single-Level Files| Multi-Level Files|
|-----------|------------------|-----------------|
| Deterministic| 2.1 - 2.2 MiB| 74.5 - 177.4 MiB|
| Perturbed | 21.9 - 22. 5 MiB | 1.3 - 1.7 GiB |


**ICON-CH2 Data Volume**
| | Single-Level Files| Multi-Level Files|
|-----------|------------------|-----------------|
| Deterministic| 509.2 - 558.0 KiB| 17.9 - 43.9 MiB|
| Perturbed | 10.0 - 10-9 MiB | 360.9 - 877.5 MiB |


## 2.4 3D Grid Structure and Representation
The model data is structured on both a horizontal and vertical grid. While some parameters extend across the entire three-dimensional grid, others are only available at specific vertical levels.
Parameters are classified as either **single-level** or **multi-level**:
- **Single-level parameters** contain data at a specific vertical level.
- **Multi-level parameters** extend across multiple vertical layers.

For example, vertical velocity is stored at multiple vertical levels, while the two-meter temperature is available only at a single vertical level.


### 2.4.1 Vertical Grid

The vertical grid is a height based coordinate system that follows the terrain. It is divided into multiple layers. The closer the layer is to
the surface, the narrower the layers are, as shown in the image below.
The so-called half levels align with horizontal grid points, while the full levels represent an averaged value over a vertical interval.
There are 81 discrete half levels and 80 full levels in our data.

<div align="center">
<img src="docs_img/VerticalLayers.png" width="550"/>

Illustration of ICON's vertical levels, Working with the ICON Model 2024, Figure 3.2
</div>

All parameters have their information on full levels, except for the vertical velocity W. W is stored on half levels and therefore called staggered.
This means that the value is exact in this point
and not an avarage value over a layer stored in one point like the full levels. For more detailed information on the vertical grid, read section 3.4 in [Working with the ICON Model](https://www.dwd.de/DE/leistungen/nwv_icon_tutorial/pdf_einzelbaende/icon_tutorial2024.pdf?__blob=publicationFile&v=3).

### 2.4.2 Horizontal Grid

The horizontal grid of ICON-CH1-EPS and ICON-CH2-EPS model is based on a native icosahedral grid inherited by the original ICON model grid (illustrated below).

<div align="center">
<img src="docs_img/IcosahedralGrid.png" width="300"/>

Illustration of the grid construction, Working with the ICON Model, Figure 2.1
</div>

Since the provided data is given in the native grid, note that the grid points correspond to the **center of the circumcircle of each triangle** and **not** to the vertices. Therefore, the longitude and latitude are based in the middle of each triangle on the grid mentioned before. For more detailed information on
the horizontal grid, read section 2.1 in [Working with the ICON Model](https://www.dwd.de/DE/leistungen/nwv_icon_tutorial/pdf_einzelbaende/icon_tutorial2024.pdf?__blob=publicationFile&v=3).

## 2.5 Accessing Static Grid Information: Height, Longitude, and Latitude

Besides the current forecasting files, each catalog contains two static files. They store permanent information about the height of the half levels (HHL) in the vertical grid and
the center point coordinates of each triangle (CLON/CLAT) on the horizontal grid. Note that the forecasting GRIB files contain no information on height, longitude and latitude. They have to be determined via the static files HHL and CLON/CLAT.

### 2.5.1 How to access the height of a grid point

In the static HHL file one can obtain the height of the half levels of the vertical grid in meters above see level. In order to point a value from the data file of a wanted parameter to a specific height, follow the steps below.
- Check if the `UUID` (Universally Unique Identifier) of the data file and the HHL file match.
- Then, use the `scaledValueOfFirstFixedSurface` value to retrieve the height in meter above see level of the HHL file.

### 2.5.2 How to access the longitude and latitude of a grid point

The CLON/CLAT file stores the longitude and latitude of the center points of each triangle on the horizontal grid.
### 🚧  **Temporary Notice Work in Progress **  
When opening a data set in a jupyter notebook the load function includes fetching the CLON/CLAT values. To retrieve CLON/CLAT without a python environment, see section 2.7.


## 2.6 Data Visualisation

See [jupyter-notebook examples](https://github.com/MeteoSwiss/opendata-nwp-demos).