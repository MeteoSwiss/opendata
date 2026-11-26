---
sidebar_position: 5
title: Polar-3D-Radarprodukte
---
<!-- @NOSPELL@ -->

# Polar-3D-Radarprodukte

## Daten abrufen

Die Daten sind über die ['Open Radar Data (ODR)'-API](https://eumetnet.github.io/openradardata-documentation/) verfügbar, die von [EUMETNET MeteoGate](https://meteogate.eu/) betrieben wird.

Die Swagger-Dokumentation der 'Open Radar Data (ODR)'-API: [`https://api.meteogate.eu/eu-eumetnet-weather-radar/docs`](https://api.meteogate.eu/eu-eumetnet-weather-radar/docs)

So [rufen Sie Daten über die API ab](https://eumetnet.github.io/openradardata-documentation/2-ORD-API-discovering-and-accessing-data/).


## Datenstruktur

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="Datenstruktur">
  <TabItem value="single-site" label="Single-Site">
Die [Volumenradardaten der Einzelstandorte](https://eumetnet.github.io/openradardata-documentation/1-ORD-API-overview/#1-european-single-site-volume-radar-data) sind verfügbar für die letzten 24 Stunden.

MeteoSchweiz betreibt ein [Netz von fünf Wetterradarstationen](https://www.meteoschweiz.admin.ch/wetter/messsysteme/atmosphaere/das-schweizer-wetterradarnetz.html). Die Standorte sind:

| Standort | WIGOS Stations-ID | Einrichtungsdatum | OSCAR Stations-Details |
|:--------:|:------------------|:------------------|:-----------------------|
| **Albis** | `0-20010-0-06661` | 1. März 1979 | [RADAR Albis (Switzerland)](https://oscar.wmo.int/surface/#/search/station/stationReportDetails/0-20010-0-06661) |
| **Monte Lema** | `0-20010-0-06768` | 1. Juli 1993 | [RADAR Mt Lema (Switzerland)](https://oscar.wmo.int/surface/#/search/station/stationReportDetails/0-20010-0-06768) |
| **La Dôle** | `0-20010-0-06699` | 31. Juli 2013 | [RADAR La Dôle (Switzerland)](https://oscar.wmo.int/surface/#/search/station/stationReportDetails/0-20010-0-06699) |
| **Plaine Morte** | `0-20010-0-06726` | 20. November 2013 | [RADAR Plaine Morte (Switzerland)](https://oscar.wmo.int/surface/#/search/station/stationReportDetails/0-20010-0-06726) |
| **Weissfluhgipfel** | `0-20000-0-06776` |  | [WEISSFLUHGIPFEL (Switzerland)](https://oscar.wmo.int/surface/#/search/station/stationReportDetails/0-20000-0-06776) |

  </TabItem>
  <TabItem value="eumetnet-opera-composite" label="EUMETNET OPERA Komposit">
Das ['EUMETNET OPERA'-Verbundprodukt von ganz Europa](https://eumetnet.github.io/openradardata-documentation/1-ORD-API-overview/#2-eumetnet-opera-composite-products) ist verfügbar
    - für die letzten 24 Stunden und
    - als Langzeitarchiv bis ins Jahr 2012 zurück.
  </TabItem>
</Tabs>


## Datenformat

Die Daten liegen im Standardformat `ODIM HDF5` vor, [das hier beschrieben wird](https://www.eumetnet.eu/wp-content/uploads/2021/07/ODIM_H5_v2.4.pdf).

:::info

Bitte beachten Sie, dass für die Verarbeitung von HDF5-Dateien möglicherweise spezielle Softwarepakete erforderlich sind.

:::
