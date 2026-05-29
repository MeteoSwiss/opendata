---
sidebar_position: 3
title: Räumliche Klimaanalysen - Niederschlag, Temperatur, Sonnenschein
---

# Räumliche Klimaanalysen - Niederschlag, Temperatur, Sonnenschein

[Räumliche Klimaanalysen](https://www.meteoschweiz.admin.ch/klima/klima-der-schweiz/raeumliche-klimaanalysen.html) sind Datensätze, die die geografische Verteilung und die zeitliche Entwicklung von Klimavariablen in Bodennähe beschreiben. Die Daten werden räumlich umfassend auf einem 1 km-Raster dargestellt und decken die gesamte Schweiz ab. Sie reichen mehrere Jahrzehnte bis zu über einem Jahrhundert zurück und werden kontinuierlich in nahezu Echtzeit aktualisiert. Die Datenwerte werden statistisch aus Messungen von Wetterstationen, Satelliten und Radaranlagen geschätzt und können als Pseudo-Beobachtungen der Bedingungen im jeweiligen Rasterpixel verstanden werden.

MeteoSchweiz bietet eine breite Palette an gebrauchsfertigen räumlichen Klimaanalysen an. Eine umfassende Liste der Datenprodukte und detaillierte Dokumentationen finden Sie auf der Webseite [Räumliche Klimaanalysen](https://www.meteoschweiz.admin.ch/klima/klima-der-schweiz/raeumliche-klimaanalysen.html). Eine kompakte Übersicht finden Sie [hier](https://www.meteoswiss.admin.ch/dam/jcr:ce0227c9-1f95-4919-ae6c-999053b6bcba/ProdDoc_Cover.pdf) (auf Englisch).

Die wichtigsten Elemente des Datensatzes sind über den Open-Data-Service verfügbar und untenstehend mit Links zur detaillierten Produktdokumentation (auf Englisch) aufgelistet:

**Niederschlag**
- [Täglicher Niederschlag (vorläufige Analyse)](https://www.meteoswiss.admin.ch/dam/jcr:86ca15d3-2b56-4753-84fb-135e40d6a5a1/ProdDoc_RprelimD.pdf)
- [Täglicher Niederschlag (endgültige Analyse)](https://www.meteoswiss.admin.ch/dam/jcr:4f51f0f1-0fe3-48b5-9de0-15666327e63c/ProdDoc_RhiresD.pdf)
- [Monatlicher und jährlicher Niederschlag (endgültige Analyse)](https://www.meteoswiss.admin.ch/dam/jcr:d4f53a4a-d7f4-4e1e-a594-8ff4bfd1aca5/ProdDoc_RhiresM.pdf)
- [Monatliche Abweichungen von den Normwerten 1991–2020 (siehe Abschnitt "Related products")](https://www.meteoswiss.admin.ch/dam/jcr:d4f53a4a-d7f4-4e1e-a594-8ff4bfd1aca5/ProdDoc_RhiresM.pdf)
- [Monatlicher und jährlicher Niederschlag (Rekonstruktionen bis zurück ins Jahr 1864)](https://www.meteoschweiz.admin.ch/dam/jcr:ae895312-b104-4ab3-9e8a-9c74ea8d7963/ProdDoc-rec.pdf) 

**Temperatur**
- [Tägliche Mittel-, Minimal- und Maximaltemperatur](https://www.meteoswiss.admin.ch/dam/jcr:818a4d17-cb0c-4e8b-92c6-1a1bdf5348b7/ProdDoc_TabsD.pdf)
- [Monatliche und jährliche Mitteltemperatur](https://www.meteoswiss.admin.ch/dam/jcr:33e26211-9937-4f80-80a3-09cfe54663bc/ProdDoc_TabsM.pdf)
- [Monatliche Abweichungen von den Normwerten 1991–2020](https://www.meteoschweiz.admin.ch/dam/jcr:d63db113-7c08-4f5f-9a22-d20ae90c23fe/ProdDoc_TanomM9120.pdf)

**Sonnenschein**
- [Tägliche relative Sonnenscheindauer](https://www.meteoswiss.admin.ch/dam/jcr:981891db-30d1-47cc-a2e1-50c270bdaf22/ProdDoc_SrelD.pdf)
- [Monatliche und jährliche relative Sonnenscheindauer](https://www.meteoswiss.admin.ch/dam/jcr:94421f3c-47f3-46fa-9939-1d494a0ce5fe/ProdDoc_SrelM.pdf)
- [Monatliche Abweichungen von den Normwerten 1991–2020 (siehe Abschnitt "Related products")](https://www.meteoswiss.admin.ch/dam/jcr:94421f3c-47f3-46fa-9939-1d494a0ce5fe/ProdDoc_SrelM.pdf)

:::info

Die räumlichen Klimadatensätze werden fortlaufend aktualisiert. Um eine nahezu Echtzeit-Abdeckung zu ermöglichen, werden Analysen für die jüngste Vergangenheit (z.B. den Niederschlag von gestern) zunächst berechnet, bevor die Datenerfassung und Qualitätskontrolle abgeschlossen sind. Zu diesem Zeitpunkt handelt es sich um vorläufige Analysen. Konsolidierte Versionen der Analysen werden anschliessend in mehreren Nachbearbeitungsschritten unter Verwendung vollständigerer und gründlich geprüfter Stationsbeobachtungen erstellt.

Vorläufige und konsolidierte Analysen sind in folgenden 'Items' abgelegt:
- Tägliche (vorläufige) Echtzeitanalysen sind in den 'Items' `CH at DD.MM.YYYY` verfügbar, wobei DD.MM.YYYY den Tag angibt, für den die Analyse gültig ist. Die vorläufigen 'Items' sind für die letzten 60 Tage verfügbar, wobei die ältesten 'Items' sukzessive gelöscht werden.
- Konsolidierte Tages- und Monatsanalysen der letzten 14 Monate sind in den 'Items' `CH at MM.YYYY` verfügbar, wobei MM.YYYY den entsprechenden Monat angibt. Diese 'Items' enthalten Dateien mit den Tagesanalysen aller Tage des Monats sowie Dateien mit einzelnen Monatsanalysen. Das Archiv-'Item' für einen bestimmten Monat wird gegen Ende des darauf folgenden Monats angelegt. Archiv-'Items', die älter als 14 Monate sind, werden nach und nach gelöscht.
- Eine letzte Nachbearbeitung aller Analysen eines Jahres erfolgt Anfang Februar des Folgejahres. Die Ergebnisse werden im 'Item' `CH archive` archiviert. Hier werden alle Ergebnisse eines Datenprodukts in Jahresdateien gebündelt, unabhängig von der zeitlichen Auflösung des Produkts. <br></br> **`CH archive` ist das zentrale 'Item' für vollständig konsolidierte Klimadaten, die mit allen derzeit bei MeteoSchweiz angewandten Kontrollverfahren übereinstimmen.**

<img width="1280" height="480" alt="Climate Grid Dataflow" src="https://github.com/user-attachments/assets/ab882739-db6d-4d41-8e25-952e0367dd7c" />

*Bereitstellungs- und Aktualisierungszyklen von Gitterdatensätzen*

:::

## Daten herunterladen {#data-download}

Die 'Open Data' von MeteoSchweiz dürfen uneingeschränkt weiterverwendet werden; bei der Wiedergabe oder Weiterverbreitung der Daten ist **die Quelle anzugeben** ("**Quelle: MeteoSchweiz**").

:white_check_mark: Mit der Verwendung von 'Open Data' von MeteoSchweiz bestätigen Sie die Kenntnisnahme der [Nutzungsbedingungen](/general/terms-of-use).

### Daten automatisch herunterladen

Laden Sie **Dateien** automatisch über die BGDI REST-API herunter: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-surface-derived-grid`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-surface-derived-grid)

Der STAC-Browser kann ein nützliches Hilfsmittel sein, um die Verwendung der API zu erleichtern [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid)

### Daten manuell herunterladen

Wählen Sie **Dateien** manuell über den BGDI [STAC Browser](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-surface-derived-grid) aus und laden Sie sie herunter.

⚠️ **Bitte beachten Sie die Informationen im Infokasten oben, um zu sehen, in welchen 'Items' welche Dateien abgelegt sind.**

## Datenformat

Das Datenformat ist [`NetCDF`](https://www.unidata.ucar.edu/software/netcdf/) mit einem geschätzten Volumen von 1.1 MB für tägliche Dateien, 13 MB für monatliche Dateien mit täglichen Daten und bis zu 200 MB für jährliche Dateien mit täglichen Daten.

## Koordinatensystem

Das Koordinatensystem ist [`Swiss LV95`](https://www.swisstopo.admin.ch/de/schweizer-koordinatensystem) / [`EPSG:2056`](https://epsg.io/2056). <br></br>
Für die "Rekonstruktionen bis zurück ins Jahr 1864" ist das Koordinatensystem [`WGS84`](https://www.swisstopo.admin.ch/de/bezugssystem-basis-fur-koordinaten) / [`EPSG:4326`](https://epsg.io/4326). 

## Datennutzung {#data-usage}

Folgt.
