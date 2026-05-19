---
sidebar_position: 1
title: Klimastationen – Homogene Messreihen
---

# Klimastationen – Homogene Messreihen

Klimastationen messen diverse meteorologische Parameter. In der Schweiz wurde 1864 das erste landesweite Netz von Klimastationen in Betrieb genommen. Die für die Klimaforschung wichtigsten Stationen sind im [Schweizerischen Nationalen Klimabasisnetz "Swiss NBCN"](https://www.meteoschweiz.admin.ch/wetter/messsysteme/bodenstationen/schweizer-klimamessnetz.html) zusammengefasst. Das Swiss NBCN besteht aus 29 Klimabeobachtungsstationen und wird durch 46 [Niederschlagsstationen](/c-climate-data/c2-climate-percipitation-stations_homogeneous) ergänzt.

Die Messbedingungen, unter denen meteorologische Daten erhoben werden, können sich im Laufe der Zeit ändern. Aussagen über die vergangene, langfristige klimatische Entwicklung können nur getroffen werden, wenn der Einfluss solcher Veränderungen beseitigt wird. Dies wird durch eine [Homogenisierung](https://www.meteoschweiz.admin.ch/klima/grundlagen-fuer-die-klimaanalyse-daten-und-methoden/homogene-messreihen-ab-1864/homogenisierung-von-klima-messreihen.html) der Daten erreicht.

:::info 

Die Homogenisierung erfolgt auf Basis der Monatswerte, aus denen die Jahreswerte aggregiert werden. Bei den Temperaturen werden die monatlichen Korrekturwerte nach Glättung der monatlichen Übergänge auch auf die Tageswerte angewendet. Diese Reihen werden als statistisch abgeleitete homogene Reihen bezeichnet und weisen grössere Unsicherheiten auf. Aus diesem Grund und da die Reihen für Mindest-, Mittel- und Höchsttemperaturen unabhängig voneinander homogenisiert werden, können geringfügige Unstimmigkeiten zwischen diesen Parametern auftreten (z.B. ist die tägliche Mindesttemperatur höher als der Tagesmittelwert). Wir empfehlen die Verwendung von Monatsdaten für langfristige klimatologische Analysen.

:::

Von den Schweizer NBCN-Klimastationen liegen homogene Messreihen für die Parameter Temperatur (Mittelwert, Minimum, Maximum), Niederschlag, Sonnenscheindauer, Wasserdampfdruck, Luftdruck, Globalstrahlung und Windgeschwindigkeit vor. Die Datenreihen für Temperatur, Niederschlag und Sonnenscheindauer reichen teilweise bis in die Mitte des 19. Jahrhunderts zurück.

## Daten herunterladen

Die 'Open Data' von MeteoSchweiz dürfen uneingeschränkt weiterverwendet werden; bei der Wiedergabe oder Weiterverbreitung der Daten ist **die Quelle anzugeben** ("**Quelle: MeteoSchweiz**").

:white_check_mark: Mit der Verwendung von 'Open Data' von MeteoSchweiz bestätigen Sie die Kenntnisnahme der [Nutzungsbedingungen](/general/terms-of-use).

### Daten automatisch herunterladen

Laden Sie **Dateien pro Station** automatisch über die REST-API der BGDI herunter: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nbcn`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-nbcn)

Lesen Sie unsere Dokumentation dazu, [wie Sie Dateien automatisch herunterladen](/general/download#how-to-download-files-automatically) können.

Der STAC-Browser kann ein nützliches Hilfsmittel sein, um die Verwendung der API zu erleichtern: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-nbcn)

### Daten manuell herunterladen

Wählen Sie **Dateien pro Station** manuell über den [Open Data Explorer](https://www.meteoschweiz.admin.ch/service-und-publikationen/applikationen/ext/daten-ohne-programmierkenntnisse-herunterladen.html#lang=de&mdt=homogenous&pgid=&sid=&col=&di=&tr=&hdr=) von MeteoSchweiz aus und laden Sie sie herunter.

## Datenstruktur

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="Datenstruktur">
  <TabItem value="files-per-station" label="Dateien pro Station">
    The data is split by measuring station. A file for a station contains **all available parameters in one file**. There are files with daily `d`, monthly `m` and yearly `y` values.

    Die Daten sind nach Messstationen gegliedert. Eine Datei einer Station enthält **alle verfügbaren Parameter in derselben Datei**. Es gibt Dateien mit Tageswerten (`d`), Monatswerten (`m`) und Jahreswerten (`y`).

    Wir empfehlen dringend, die entsprechend aggregierte [Datengranularität](/general/download#data-granularity) herunterzuladen.
   
    Je nach Granularität gibt es Dateien mit der [Aktualisierungsfrequenz](/general/download#update-frequency) `now`, `recent` und `historical`.
  </TabItem>
</Tabs>

## Datenformat

[`CSV`](/general/download#column-separators-and-decimal-dividers) mit einem geschätzten Volumen von ≤0.9 MB je Datei.

## Metadaten

<Tabs queryString="Metadaten">
  <TabItem value="parameters" label="Parameter">
    Alle Parameter haben eine eindeutige Kennung, die von der zeitlichen Auflösung abhängt (z.B. `th9120mv` für "Air temperature 2 m above ground; deviation of the homogeneous monthly mean to the norm 9120").
    
    [`ogd-nbcn_meta_parameters.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn/ogd-nbcn_meta_parameters.csv) enthält eine Liste aller Parameterkennungen mit Erläuterung, Zeitintervall, Dezimalstellen, Datentyp und Masseinheit.
  </TabItem>
  <TabItem value="stations" label="Stationen">
    Alle Bahnhöfe haben ein dreistelliges Kürzel (z.B. `BER` für "Bern/Zollikofen" oder `LUG` für "Lugano").
    
    [`ogd-nbcn_meta_stations.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn/ogd-nbcn_meta_stations.csv) enthält eine Liste aller Stationskennungen mit Name, Kanton, Wigos ID, Stationstyp, Höhe, Koordinaten, Ausrichtung und URL der Stationsdetailseite.
  </TabItem>
  <TabItem value="data-inventory" label="Dateninventar">
    [`ogd-nbcn_meta_datainventory.csv`](https://data.geo.admin.ch/ch.meteoschweiz.ogd-nbcn/ogd-nbcn_meta_datainventory.csv) enthält eine Liste aller Stationen und Parameter mit Start- und Enddatum der Messungen.
  </TabItem>
</Tabs>

## Datennutzung

Siehe z.B. die [Swiss NBCN network map](https://www.meteoschweiz.admin.ch/service-und-publikationen/applikationen/messnetze.html#param=messnetz-klima&lang=de&table=false&compare=y) von Meteoschweiz.

Erfahren Sie mehr über die [Klima-Analysen & Expertisen](https://www.meteoschweiz.admin.ch/service-und-publikationen/service/wetter-und-klimaprodukte/klima-analysen-und-expertisen.html), and mittels [unsere Blog-Artikel, Kategorie 'Klima'](https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog.html#order=date-desc&page=1&pageGroup=blog-article&tenant=mchweb&category=climate).
