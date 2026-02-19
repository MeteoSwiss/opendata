---
sidebar_position: 2
---

# Background and objectives

Here you will find information about the foundations and goals of MeteoSwiss' Open Data implementation.

## Foundations and key challenges of MeteoSwiss' Open Data provision

MeteoSwiss has been providing meteorological and climatological data at international, European and national level for decades. Since 2012, MeteoSwiss has also built up experience with the provision of Open Data via the [Federal Spatial Data Infrastructure FSDI](https://www.geo.admin.ch/en/general-terms-of-use-fsdi), which is operated by [swisstopo](https://www.swisstopo.admin.ch/en).

With the introduction of the [Totalrevision der Verordnung über die Meteorologie und Klimatologie (MetV)](https://www.fedlex.admin.ch/de/consultation-procedures/ended/2023#https://fedlex.data.admin.ch/eli/dl/proj/2022/77/cons_1) - in the 1st quarter of 2025 - MeteoSwiss exempted the data collected under the legal mandate from fees and thus has been able to provide large-scale access to open data, as required by the [Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben (EMBAG)](https://www.fedlex.admin.ch/eli/cc/2023/682/de). The compatibility with the EU's ['High Value Datasets (HVD)' Directive (see Annex, Chapter 3. ‘Meteorological’)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0138#d1e32-48-1) that MeteoSwiss is striving for and the requirements of EMBAG led to a change in data access from 'push' (i.e. on request/order) to 'pull' (i.e. via self-service).

MeteoSwiss has identified two key challenges for its further implementation of Open Data by analysing the needs of real users:
1. How to enable people with varying levels of knowledge of data technology and meteorology to easily find and access the data they need?
2. How to help users assess as far as appropriate whether and under what conditions which data might be suitable for their application?

## Vision, mission and strategy of MeteoSwiss' Open Data provision

**Our vision** is,
that everyone can easily find and use the right open meteorological and climatological data from MeteoSwiss. We guarantee maximum compatibility with the open data of European and international partner agencies.

**Our mission** is, 
to provide Open Data to people and organisations with the same reliability and care that they are already accustomed to from MeteoSwiss.

**Our strategy** (for version 1.0) is, 
to enable all users to download Open Data as files via the STAC API of the FSDI.

The Open Data provision of MeteoSwiss in version 1.0 thus fulfils the requirement of the EU's HVD Directive to make ‘datasets (...) available for re-use (...) through bulk download’ ([Annex, Chapter 3.2. a](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0138#d1e32-48-1)). The requirement to make datasets also available via APIs will be implemented by MeteoSwiss in a later implementation stage.

**Our primary outcomes** (for version 1.0) include:
1. From the source systems of the various data types (ground station data and observations, climate data and spatial climate analyses, radar data, forecast data, atmospheric data), the OGD products specified together with the corresponding specialists and their 'file metadata' are continuously generated as files.
2. All files are continuously transferred to the defined 'collections' in the STAC API of the FSDI and stored as 'assets' for the corresponding 'items'.
3. For each collection, a corresponding 'discovery metadata' dataset is created in the geometadata catalogue [geocat.ch](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/home). Geocat.ch integrates the 'discovery metadata' into the Open Data metadata catalogue of the Swiss authorities [opendata.swiss](https://opendata.swiss/en), and opendata.swiss into the European Open Data metadata catalogue [data.europa.eu](https://data.europa.eu/en).
4. Users can download one or more files manually from MeteoSwiss via a WebGUI or obtain them automatically via the STAC API of the FSDI.

**Our primary users** (for version 1.0) include:
1. People with little meteorological knowledge and varying levels of technical data knowledge,
2. People with medium meteorological knowledge and varying levels of technical data knowledge,
3. People with high meteorological and technical data knowledge.

:::info

Our user base is very broad and diverse. We have chosen this rough grouping to prioritise 
- the functionalities of our service as well as
- the application-oriented descriptions and contextual information of the data.

The user groups (1 to 3 above) are listed from top to bottom according to their number (many > few).

:::

## Release planning (in 2024, prior to the launch of Version 1.0)

**Strategy for prioritisation**
1. Beta version - Develop individual components as prototypes to make important decisions and assess risks
2. Version 1.0 - Realise functionalities and provide Open Data products *absolutely necessary for the launch*
3. Next - Provide further defined Open Data products
4. Later - Realise further functionalities (including querying data via API features)
