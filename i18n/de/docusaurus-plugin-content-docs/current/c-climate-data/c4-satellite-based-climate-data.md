---
sidebar_position: 4
title: Räumliche Klimaanalysen - Strahlung, Wolkenbedeckung
---

# Räumliche Klimaanalysen - Strahlung, Wolken

Diese Gitterdatenprodukte werden aus [MeteoSat-Satellitendaten](https://www.meteoschweiz.admin.ch/wetter/messsysteme/atmosphaere/satellitenbeobachtungen.html) in Verbindung mit bodengestützten Messungen abgeleitet (weitere Informationen finden Sie in den verlinkten detaillierten Produktdokumentationen (auf Englisch)).

**Strahlung** ([detaillierte Produktdokumentation](https://www.meteoswiss.admin.ch/dam/jcr:b6f29546-3e6f-45a3-bc64-227d1d6b623c/ProdDoc_RADIATION.pdf))
- Sonneneinstrahlung
- Albedo
- Nach unten und oben gerichtete langwellige Oberflächenstrahlung
- Nettostrahlung
- Gesamte Oberflächenstrahlungsbilanz

**Wolken** [detaillierte Produktdokumentation](https://www.meteoswiss.admin.ch/dam/jcr:f244aad3-da48-4ae5-95b6-f8c77ce209ae/ProdDoc_CLOUDS.pdf))
- Wolkendecke
- Wolkenoberflächentemperatur
- Wolkenoberflächenhöhe

:::info

Die Gitterdaten-Dateien werden täglich, monatlich und jährlich aktualisiert und entsprechend veröffentlicht.
Bitte beachten Sie, dass es sich bei den täglichen Dateien um vorläufige Ergebnisse handelt. Sie sind für die letzten 60 Tage nur in den jeweiligen 'Items' verfügbar (z.B. `CH at 31.12.2025`, `CH at 01.01.2026` usw.) und werden fortlaufend gelöscht.

**Wenn Sie kontrollierte und korrigierte Gitterdaten benötigen, sollten Sie nur Daten aus den monatlichen oder dem `CH archive`-'Item' verwenden.**

Die kontrollierten und korrigierten Datensätze mit den Daten des letzten Monats werden am Ende des Folgemonats veröffentlicht. Diese Dateien befinden sich in den jeweiligen monatlichen 'Items' (z.B. `CH at 12.2025`, `CH at 01.2026` usw.) und sind nur für die letzten 14 Monate verfügbar und werden fortlaufend gelöscht.

Im 'Item' `CH archive` finden Sie alle Daten als jährliche Dateien (mit Ausnahme der stündlichen Daten, die aufgrund der Dateigrösse als monatliche Dateien vorliegen), beginnend mit dem Jahr 2025. Zu Beginn jedes Februars werden die jährlichen Daten des Vorjahres veröffentlicht.
Weitere Archivdaten werden im Laufe des Jahres 2026 hinzugefügt.

Bitte beachten Sie auch die folgende Abbildung:

<img width="1280" height="480" alt="Climate Grid Dataflow" src="https://github.com/user-attachments/assets/909b31e2-bc67-4d2c-85cf-77d3a96507cc" />

*Bereitstellungs- und Aktualisierungszyklen von Gitterdatensätzen*

:::


## Daten herunterladen {#data-download}

Die 'Open Data' von MeteoSchweiz dürfen uneingeschränkt weiterverwendet werden; bei der Wiedergabe oder Weiterverbreitung der Daten ist **die Quelle anzugeben** ("**Quelle: MeteoSchweiz**").

:white_check_mark: Mit der Verwendung von 'Open Data' von MeteoSchweiz bestätigen Sie die Kenntnisnahme der [Nutzungsbedingungen](/general/terms-of-use).

### Daten automatisch herunterladen

Laden Sie **Dateien** automatisch über die BGDI REST-API herunter: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-satellite-derived-grid`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-satellite-derived-grid)

Der STAC-Browser kann ein nützliches Hilfsmittel sein, um die Verwendung der API zu erleichtern [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid)

### Daten manuell herunterladen

Wählen Sie **Dateien** manuell über den BGDI [STAC Browser](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-satellite-derived-grid) aus und laden Sie sie herunter.

⚠️ **Bitte beachten Sie die Informationen im Infokasten oben, um zu sehen, in welchen 'Items' welche Dateien abgelegt sind.**


## Datenformat {#data-format}

Das Datenformat ist [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) mit einem geschätzten Volumen von 2 MB für tägliche Dateien; stündliche Daten als monatliche Dateien oder tägliche als jährliche mit bis zu 45 MB.

## Koordinatensystem {#coordinate-system}

Das Koordinatensystem ist [`WGS84`](https://www.swisstopo.admin.ch/de/bezugssystem-basis-fur-koordinaten) / [`EPSG:4326`](https://epsg.io/4326). 

## Datennutzung

- [Räumliche Klimaanalysen neu via Open Data verfügbar: Was sie zeigen und wozu sie genutzt werden können](https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog/de/2026/06/raeumliche-klimaanalysen-neu-via-open-data-verfuegbar.html) (MeteoSchweiz-Blog, 2. Juni 2026)
