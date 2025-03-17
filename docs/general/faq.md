---
sidebar_position: 3
---

# Frequently Asked Questions (FAQ)

Below you'll find answers to the most frequently asked questions. We continuously update these based on questions received.

<!-- Questions about the data -->
1. [What type of data can I get?](#what-type-of-data-can-i-get)
2. [How may I use data?](#how-may-i-use-data)
3. [Is there any limitation to the use of data?](#is-there-any-limitation-to-the-use-of-data)
4. [How often is data updated?](#how-often-is-data-updated)
5. [What formats does data come in?](#what-formats-does-data-come-in)
6. [Are data available in CSV/excel?](#are-data-available-in-csvexcel)
7. [What about the quality control of data?](#what-about-the-quality-control-of-data)
8. [What if data is missing?](#what-if-data-is-missing)
9. [What coordinate system is used for the location of the stations?](#what-coordinate-system-is-used-for-the-location-of-the-stations)
10. [What if I have questions about the data?](#what-if-i-have-questions-about-the-data)


<!--  TODO: Mögliche weitere Fragen:  -->
<!--  - FAQs geo.admin.ch referenzieren (aamsler)  -->
<!--  - Was ist ein Totalisator? (lim)  -->
<!--  - Welche Daten werden automatisch, welche manuell erhoben? (lim)  -->
<!--  - Warum werden Niederschlagsstationen anders gehandhabt als andere Stationen? (lim)  -->
<!--  - Warum ist eine Niederschlagssstation keine Atmosphärenmessung? (lim)  -->
<!--  - Warum sind Radardaten nicht auch Atmosphärenmessungen? (lim)  -->

---

### What type of data can I get?
The following data is available: ...
- [Ground-based Measurements](/a-data-groundbased)
- [Atmosphere Measurements](/b-data-atmosphere)
- [Climate Data](/c-data-climate)
- [Radar Data](/d-data-radar)
- [Forecast Data](e/-data-forecast)



### How may I use data?
You can freely use MeteoSwiss' data for any purpose including further processing and distribution. *Be aware, that you may not make changes to the actual data retrieved from MeteoSwiss*. Please read the [Terms of Use](/general/terms-of-use) for further information.



### Is there any limitation to the use of data?
*Data retrieved from MeteoSwiss may not be changed*. MeteoSwiss' *Download service partner swisstopo reserves the right to block or adjust the bandwidth for individual users, if these strain geo.admin.ch to a disproportionately wide extent*.



### How often is data updated?
You can see the *update frequency* by choosing the appropriate Open Data product and then scrolling to *“Data information” > “Parameters”*.
<!-- Please note that lightning data does not have a specific update frequency, since the data is updated in real time. -->



<!-- ### How do I retrieve large quantities of data? -->
<!-- If you want to download large quantities of historical data, we recommend that you use download. --> 
<!-- *You can download .zip files, each containing historic data for a month or year. You are also able to download all historic data by selecting the file all.zip.* -->
<!-- Files contain the same data as in the API and are updated hourly. -->
 


### What formats does data come in?
...

<!-- MeteoSwiss’ open data is retrieved in JSON format (”JavaScript Object Notation”). JSON is a compact file format for the exchange of data. JSON is a text format which is platform- and language agnostic and which can be read by humans as well as machines. The JSON format can easily be converted to other file formats such as .csv or .xml.

All API's return GeoJSON for query responses and the downloaded files from Radar and Forecast APIs are in HDF5 and GRIB format, respectively.
 
Are data available in GIS format?

Data retrieved through the API is only available in JSON format, but DMI's open data can easiliy be imported directly into GIS. Please see our guide.

For QGIS there is a plugin called "DMI Open Data", that can be used to easily import data. Please see our guide. -->



### Are data available in CSV/excel?
All tabular data, which is available in CSV, can be imported into excel. *Please see our guide.*



### What about the quality control of data?
#### Ground-based Measurements
[Ground-based Measurements](/a-data-groundbased) are initially raw, not quality assured measurements, which may be faulty due to the way they are collected. The use of these data shall be with regard to the fact that the measurements may be faulty. Errors are typically due to malfunction of instruments caused by wear and tear or exposure to weather and on rare occasions from vandalism. *Wear and tear of the instruments are handled proactively by performing service checks at the stations on a regular basis and changing the instruments within the given time frame.* 

In order to minimise the risk of incorrect measurements, MeteoSwiss checks the plausibility of the data during a rolling period of 5 days from the time of measurement using several automatic and manual control methods. The manually checked data, which is the highest quality check available, is normally published 5 days after the measurement.
- If you need consistent and checked data, then we advise you to download the respective "recent" files e.g. each week in order that you have the manually checked data in your database.
- The daily and monthly precipitation values, since there are still active manually operated stations, are an exception from this. They are manually checked around the end of the upcoming month only. Therefore, for a consistent dataset of daily or monthly precipitation values, you have to obtain the respective "recent" files each month.

[Here](https://www.meteoswiss.admin.ch/weather/measurement-systems/data-management/data-preparation.html) you can find out more about how MeteoSwiss prepares its data. Topics include aggregation and calculation, completeness check, plausibility check, and homogenisation.

#### Combined precipitation data 
[Combiprecip](/d-radar-data/d1-precipitation-radar-products) data are based on 10min automatic surface measurements and radar data. 
Since some 10min data can be late or missing or there can be any issues with the radar, they are reprocessed automatically 8 days later, including all available and checked 10min automatic measured precipitation values.
The published data will be overwritten automatically every 8 days. 
For the best quality data we therefore recommend to use only the reprocessed data which is more than 8 days old or, if the current data have been used for quick assessment, to dowload the reprocessed data later on. 
 
...

#### Climate grid data
The daily climate grid data [RprelimD, TabsD, TmaxD, TminD and SrelD](/c-climate-data/c3-ground-based-climate-data) are calculated daily, based on the available daily data. As noted in the ground based measurement section, the data is beeing checked only later on, therefore a later recalculation of the products is necessary. Also the checked manually measured daily precipitation values are included after the end of the month in RprelimD, resulting in the RhiresD product. 
Therefore the TabsD, TmaxD, TminD, SrelD and RhiresD products are beeing recalculated around the end of each following month (around the 25th) for the last month, to ensure the best available data quality. 

...



<!-- ### Can I get data from third parties? -->
<!-- It is possible to download data from third parties, if an agreement exists between the third party and MeteoSwiss. The owner of the station is marked in the station metadata file of the respective Open Data product.

*If you have questions regarding data from third parties, please contact the authority responsible for the specific station or the data derived therefrom.* -->



### What if data is missing?
The data downloaded from MeteoSwiss corresponds to the data available to MeteoSwiss. Sometimes you may experience that some data entries are missing. The root cause of this is typically a malfunctioning measurement instrument, which MeteoSwiss will repair as soon as possible.

Please also note that missing values - regardless of the cause - are always represented as 'empty fields'. This applies to the vast majority of cases in which no measurements are taken at all.



### What coordinate system is used for the location of the stations?
*The coordinate system used for the location of the stations is WGS84.*
 
<!-- ### Why is MeteoSwiss' 1x1km grid data not available as open data? -->
<!-- *The 1x1 km grid is used as an intermediate basis to construct the spatial resolutions 10x10 km, 20x20 km, municipality data and country data. Under certain weather conditions the 1x1 km grid data can be quite imprecise, but by aggregating it to larger areas the uncertainty is reduced. Furthermore, 3rd party data, which MeteoSwiss doesn’t have permission to redistribute, can be deducted directly from the 1x1 km grid data.* -->



### What if I have questions about the data?
...

<!-- If you have questions regarding data, please contact the authority responsible for the specific station or the data derived therefrom.

You can see the owner of a station by selecting the appropriate Open Data product and then *choosing “Data information” > “Stations”* -->

<!-- ### What kind of optical flow method do you use for MeteoSwiss radar forecast? -->
<!-- In the radar forecast on www.dmi.dk we use Gunnar Farnebäck's dense optical flow algorithm as implemented in OpenCV: https://docs.opencv.org/3.4/de/d9e/classcv_1_1FarnebackOpticalFlow.html

We also use a range of other methods (e.g. Lucas-Kanade optical flow) available in pySTEPS: https://pysteps.readthedocs.io -->
 
<!-- ### Why is radar data in 5 minute intervals on *MeteoSwiss' App and Web* when full-range radar scans are only available in ten minute intervals through the Open Data service? -->
<!-- Radar data on *MeteoSwiss' App and Web* is a special product that *only shows the lowest elevation scan which is gathered every 5 minutes*. This data is currently not a part of MeteoSwiss' Open Data service. -->
 
<!-- ### *Why is the geographical location of the MeteoSwiss' forecast model inaccurate when visualized in certain GIS tools?* -->
<!-- *Depending on which tool or application used to visualize and process the GRIB file, an error in the geographical placement might occur due to a maximal decimal precision of three in GRIB files. Because of the high resolution of the model, a precision of 4 or 5 decimals is needed in certain geographical areas.*

*In order to compensate you have to use the eastern and western reach together with the number of grids all of which are written in the header of the GRIB file, to calculate the grid distance in degrees as shown in the following equation: ((..))*

*A precision of at least five decimals is recommended when using the above equation.*

*Now use the calculated grid distance along with the western reach and the number of grids to calculate the accurate eastern reach by using the following equation: ((..))* -->


