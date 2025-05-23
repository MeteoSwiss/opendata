---
sidebar_position: 1
---

# Automatische Wetterstationen

Rund 160 Stationen des [automatischen Messnetzes](https://www.meteoschweiz.admin.ch/wetter/messsysteme/bodenstationen/automatisches-messnetz.html) SwissMetNet bilden ein lückenloses Messprogramm.

Sie liefern alle 10 Minuten Daten zu Temperatur, Niederschlag, Wind, Sonnenschein, Luftfeuchtigkeit, Strahlung und Luftdruck.

Ergänzt wird das Netz durch rund 100 [automatische Niederschlagsstationen](/a-data-groundbased/a2-automatic-precipitation-stations). Zusammen bilden diese Stationen die Grundlage für die Erstellung zuverlässiger lokaler Wettervorhersagen sowie Unwetter- und Hochwasserwarnungen. Zusätzlich betreibt MeteoSwiss drei [automatische Turmstationen](/a-data-groundbased/a3-automatic-tower-stations) in 150 bis 230 m Höhe für Messungen in der Grenzschicht.

## Daten herunterladen

Die 'Open Data' von MeteoSchweiz dürfen uneingeschränkt weiterverwendet werden; bei der Wiedergabe oder Weiterverbreitung der Daten ist **die Quelle anzugeben** ("**Quelle: MeteoSchweiz**").

:white_check_mark: Mit der Verwendung von 'Open Data' von MeteoSchweiz bestätigen Sie die Kenntnisnahme der [Nutzungsbedingungen](/general/terms-of-use).

### Daten automatisch herunterladen

Laden Sie **Dateien pro Station** automatisch über die REST-API der BGDI herunter: [`https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn`](https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn)

Lesen Sie unsere Dokumentation dazu, [wie Sie Dateien automatisch herunterladen](/general/download#how-to-download-files-automatically) können.

Der STAC-Browser kann ein nützliches Hilfsmittel sein, um die Verwendung der API zu erleichtern: [`https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn`](https://data.geo.admin.ch/browser/index.html#/collections/ch.meteoschweiz.ogd-smn)

### Daten manuell herunterladen

Wählen Sie **Dateien pro Station** manuell über den [Open Data Explorer](https://www.meteoschweiz.admin.ch/service-und-publikationen/applikationen/ext/daten-ohne-programmierkenntnisse-herunterladen.html#lang=de&mdt=normal&pgid=&sid=&col=&di=&tr=&hdr=) von MeteoSchweiz aus und laden Sie sie herunter.

<!-- @NOSPELL@ -->

## Datenstruktur

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="Datenstruktur">
  <TabItem value="files-per-station" label="Dateien pro Station">
    Die Daten sind nach Messstationen gegliedert. Eine Datei einer Station enthält alle verfügbaren Parameter in derselben Datei. Es gibt Dateien mit 10-Minuten-Werten (`t`), Stundenwerten (`h`), Tageswerten (`d`), Monatswerten (`m`) und Jahreswerten (`y`).

   Wir empfehlen dringend, die entsprechend aggregierte [Datengranularität](/general/download#data-granularity) herunterzuladen, statt sie selbst zu berechnen (siehe dazu auch unsere [Informationen zur Datenqualität](/general/faq#bodenmessdaten)).

   Je nach Granularität gibt es Dateien mit der [Aktualisierungsfrequenz](/general/download#update-frequency) `now`, `recent` und `historical`.

    Das Aktualisierungsintervall für Dateien mit 10-Minuten-Werten ist auf 20 Minuten gesetzt. Wenn Sie eine höhere Aktualisierungsfrequenz benötigen, verwenden Sie stattdessen **Eine Datei mit allen Stationen**.
    
    Zeitreihen können vor der Einführung automatischer Messungen im Jahr 1981 beginnen. Vor 1981 wurden mindestens drei Werte pro Tag manuell gemessen. Sie werden als einzelne 10-Minuten-Werte (['synoptic observations'](https://community.wmo.int/en/observation-components-global-observing-system)) gespeichert.
  </TabItem>
  <TabItem value="eine-datei-mit-allen-stationen" label="Eine Datei mit allen Stationen">
    In addition we offer the [main parameters of all stations (in one file) – every 10 minutes, most recent values](https://data.geo.admin.ch/ch.meteoschweiz.messwerte-aktuell/VQHA80.csv).

    The update interval for this file is around 10 minutes.
    
    Time in UTC: 00:40 UTC = 02:40 local (CH) summer time, 01:40 winter time
    
    Main parameters are:
    | Identifier | Description |
    |:----------:|:------------|
    | `tre200s0` | Air temperature 2 m above ground; current value | 
    | `rre150z0` | Precipitation; ten minutes total |
    | `sre000z0` | Sunshine duration; ten minutes total |
    | `gre000z0` | Global radiation; ten minutes mean |
    | `ure200s0` | Relative air humidity 2 m above ground; current value |
    | `tde200s0` | Dew point 2 m above ground; current value |
    | `dkl010z0` | Wind direction; ten minutes mean |
    | `fu3010z0` | Wind speed; ten minutes mean in km/h |
    | `fu3010z1` | Gust peak (one second); maximum in km/h |
    | `prestas0` | Atmospheric pressure at barometric altitude (QFE<sup>1</sup>); current value |
    | `pp0qffs0` | Pressure reduced to sea level (QFF<sup>2</sup>); current value |
    | `pp0qnhs0` | Pressure reduced to sea level according to standard atmosphere (QNH<sup>3</sup>); current value |
    | `ppz850s0` | Geopotential height of the 850 hPA level; current value |
    | `ppz700s0` | Geopotential height of the 700 hPA level; current value |
    | `dv1towz0` | Wind direction vectorial tower<sup>4</sup>; ten minutes mean |
    | `fu3towz0` | Wind speed scalar tower<sup>4</sup>; ten minutes mean in km/h |
    | `u3towz1` | Gust peak (one second) tower<sup>4</sup>; maximum in km/h |
    | `ta1tows0` | Air temperature tower<sup>4</sup>; current value |
    | `uretows0` | Relative air humidity tower<sup>4</sup>; current value |
    | `tdetows0` | Dew point tower<sup>4</sup>; current value |

    <sup>1</sup> QFE = the isobaric surface pressure at the reference point

    <sup>2</sup> QFF = the air pressure at the measuring site, reduced to the sea level. It is used in the field of meteorology in order to ­compare the air pressures of different places at different heights.

    <sup>3</sup> QNH = the air pressure at the measuring station, reduced to sea level acc. to "standard atmosphere".

    <sup>4</sup> Information about the [automatic tower stations](/a-data-groundbased/a3-automatic-tower-stations) dataset/collection.
  </TabItem>
</Tabs>