---
sidebar_position: 2
title: Niederschlags-Klimastationen - Homogene Messreihen
---

# Niederschlags-Klimastationen - Homogene Messreihen

Niederschlag ist ein wichtiger meteorologischer Parameter mit hoher räumlicher Variabilität. Aus diesem Grund wird im Vergleich zu anderen Variablen ein dichteres Messnetz betrieben. Die ersten Niederschlagsstationen nahmen in der Schweiz in der zweiten Hälfte des 19. Jahrhunderts ihren Betrieb auf. Heute gehören 46 Stationen zum [Schweizerischen Nationalen Klimabasisnetz "Swiss NBCN"](https://www.meteoschweiz.admin.ch/wetter/messsysteme/bodenstationen/schweizer-klimamessnetz.html) und ergänzen dessen [Klimastationen](https://opendatadocs.meteoswiss.ch/de/c-climate-data/c1-climate-stations_homogeneous).

Die Messbedingungen, unter denen meteorologische Daten erhoben werden, können sich im Laufe der Zeit ändern. Aussagen über die vergangene, langfristige klimatische Entwicklung können nur getroffen werden, wenn der Einfluss solcher Veränderungen beseitigt wird. Dies wird durch eine [Homogenisierung](https://www.meteoschweiz.admin.ch/klima/grundlagen-fuer-die-klimaanalyse-daten-und-methoden/homogene-messreihen-ab-1864/homogenisierung-von-klima-messreihen.html) der Daten erreicht.

Die Datenreihen der Swiss-NBCN-Niederschlagsstationen wurden homogenisiert und reichen teilweise bis in die Mitte des 19. Jahrhunderts zurück.

## Daten herunterladen

Die 'Open Data' von MeteoSchweiz dürfen uneingeschränkt weiterverwendet werden; bei der Wiedergabe oder Weiterverbreitung der Daten ist **die Quelle anzugeben** ("**Quelle: MeteoSchweiz**").

:white_check_mark: Mit der Verwendung von 'Open Data' von MeteoSchweiz bestätigen Sie die Kenntnisnahme der [Nutzungsbedingungen](/general/terms-of-use).

### Daten automatisch herunterladen

Laden Sie **Dateien pro Station** automatisch über die REST-API der BGDI herunter: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nbcn-precip`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nbcn-precip)

Lesen Sie unsere Dokumentation dazu, [wie Sie Dateien automatisch herunterladen](/general/download#how-to-download-files-automatically) können.

Der STAC-Browser kann ein nützliches Hilfsmittel sein, um die Verwendung der API zu erleichtern: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn-precip`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn-precip)

### Daten manuell herunterladen

Wählen Sie **Dateien pro Station** manuell über den [Open Data Explorer](https://www.meteoschweiz.admin.ch/service-und-publikationen/applikationen/ext/daten-ohne-programmierkenntnisse-herunterladen.html#lang=de&mdt=homogenous&pgid=Precipitation&sid=&col=&di=&tr=&hdr=) von MeteoSchweiz aus und laden Sie sie herunter.

## Datenstruktur

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="Datenstruktur">
  <TabItem value="files-per-station" label="Dateien pro Station">
    Die Daten sind nach Messstationen gegliedert. Eine Datei einer Station enthält **alle verfügbaren Parameter in derselben Datei**. Es gibt Dateien mit Monatswerten (`m`) und Jahreswerten (`y`).

    Wir empfehlen dringend, die entsprechend aggregierte [Datengranularität](/general/download#data-granularity) herunterzuladen.
   
    Je nach Granularität gibt es Dateien mit der [Aktualisierungsfrequenz](/general/download#update-frequency) `now`, `recent` und `historical`.
  </TabItem>
</Tabs>

## Datenformat

[`CSV`](/general/download#column-separators-and-decimal-dividers) mit einem geschätzten Volumen von ≤0.9 MB je Datei.

## Metadaten

<Tabs queryString="Metadaten">
  <TabItem value="parameters" label="Parameter">
    Alle Parameter haben eine eindeutige Kennung, die von der zeitlichen Auflösung abhängt.
    
    [`ogd-nbcn-precip_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn-precip/ogd-nbcn-precip_meta_parameters.csv) enthält eine Liste aller Parameterkennungen mit Erläuterung, Zeitintervall, Dezimalstellen, Datentyp und Masseinheit.
  </TabItem>
  <TabItem value="stations" label="Stationen">
    Alle Stationen haben ein dreistelliges Kürzel (z.B. `BER` für "Bern/Zollikofen" oder `LUG` für "Lugano").
    
    [`ogd-nbcn-precip_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn-precip/ogd-nbcn-precip_meta_stations.csv) enthält eine Liste aller Stationskennungen mit Name, Kanton, Wigos ID, Stationstyp, Höhe, Koordinaten, Ausrichtung und URL der Stationsdetailseite.
  </TabItem>
  <TabItem value="data-inventory" label="Dateninventar">
    [`ogd-nbcn-precip_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn-precip/ogd-nbcn-precip_meta_datainventory.csv) enthält eine Liste aller Stationen und Parameter mit Start- und Enddatum der Messungen.
  </TabItem>
</Tabs>

## Datennutzung

Siehe z.B. die [Swiss NBCN network map](https://www.meteoschweiz.admin.ch/service-und-publikationen/applikationen/messnetze.html#param=messnetz-klima&lang=de&table=false&compare=y).

Erfahren Sie mehr über auf unserer Webpage zu [Klima-Analysen & Expertisen](https://www.meteoschweiz.admin.ch/service-und-publikationen/service/wetter-und-klimaprodukte/klima-analysen-und-expertisen.html) und in [unseren Blog-Artikeln (Kategorie 'Klima')](https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog.html#order=date-desc&page=1&pageGroup=blog-article&tenant=mchweb&category=climate).
