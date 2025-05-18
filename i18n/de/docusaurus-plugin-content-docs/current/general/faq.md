---
sidebar_position: 4
---

# Häufig gestellte Fragen (FAQ)
Hier finden Sie Antworten auf die am häufigsten gestellten Fragen. Wir aktualisieren diese regelmässig anhand der eingehenden Fragen.


## Welche Art von Daten kann ich beziehen?
Bisher sind folgende Daten verfügbar
- [A – Bodenmessdaten](/a-data-groundbased)
- [C – Klimadaten: Homogene Messreihen](/c-climate-data)
- [E – Prognosedaten: Numerisches Wettervorhersagemodell ICON-CH1/2-EPS](/e-forecast-data/e2-e3-numerical-weather-forecasting-model)

Weitere Datentypen werden in den kommenden Monaten veröffentlicht. Das voraussichtliche Quartal für jeden Datensatz wird auf unserer [Open-Data-Landingpage](https://www.meteoschweiz.admin.ch/service-und-publikationen/service/open-data.html) bekannt gegeben.

<!--  [B - Atmosphärenmessdaten](/b-data-atmosphere)  -->
<!--  [D - Radardaten](/d-data-radar)  -->


## Wie darf ich die Daten verwenden?
Lesen Sie die [Nutzungsrechte hinsichtlich der Daten](/general/terms-of-use#2-nutzungsrechte-hinsichtlich-der-daten).


## Gibt es eine Nutzungsbeschränkung?
Der Download-Service-Partner von MeteoSchweiz, swisstopo, behält sich das Recht vor, die Bandbreite für einzelne Nutzer zu sperren oder anzupassen, wenn diese geo.admin.ch unverhältnismässig stark belasten. Lesen Sie die [Allgemeine Nutzungsbedingungen und Betriebsbestimmungen der Bundes Geodaten-Infrastruktur BGDI, Kapitel 2. Datennutzung](https://www.geo.admin.ch/de/allgemeine-nutzungsbedingungen-bgdi#2.-Datennutzung).


## Wie oft werden die Daten aktualisiert?
Für 'Bodenmessdaten' sowie für 'Klimastationen – Homogene Messreihen' und 'Niederschlags-Klimastationen – Homogene Messreihen' gelten die [hier](/general/download#update-frequency) angegebenen Aktualisierungsfrequenzen.

Für andere Datentypen beachten Sie bitte deren entsprechende Dokumentation.


## Was ist im Zusammenhang mit der Qualitätskontrolle der Daten zu beachten?  <!-- Diesen Titel nicht ändern! -->

### Bodenmessdaten
[Bodenmessdaten](/a-data-groundbased) sind zunächst rohe, nicht qualitätsgesicherte Messungen, die aufgrund der Art ihrer Erfassung fehlerhaft sein können. Die Verwendung dieser Daten muss unter Berücksichtigung der Tatsache erfolgen, dass die Messungen fehlerhaft sein können. Fehler sind in der Regel auf Fehlfunktionen der Instrumente zurückzuführen, die durch Verschleiss oder Witterungseinflüsse und in seltenen Fällen durch Vandalismus verursacht werden.

Um das Risiko fehlerhafter Messungen zu minimieren, überprüft MeteoSwiss die Plausibilität der Daten während eines rollenden Zeitraums von 5 Tagen ab dem Zeitpunkt der Messung mit mehreren automatischen und manuellen Kontrollmethoden. Die manuell überprüften Daten, welche die höchste verfügbare Datenqualität aufweisen, werden in der Regel 5 Tage nach der Messung veröffentlicht.

:::tip

- Wenn Sie konsistente und geprüfte Daten benötigen, empfehlen wir Ihnen, die entsprechenden [`recent`-Dateien](/general/download#update-frequency) herunterzuladen, z.B. jede Woche, damit Sie die manuell geprüften Daten in Ihrer Datenbank haben.
- Eine Ausnahme bilden die täglichen und monatlichen Niederschlagswerte, da es noch aktive manuell betriebene Stationen gibt. Diese werden erst gegen Ende des kommenden Monats manuell überprüft. Für einen konsistenten Datensatz der täglichen oder monatlichen Niederschlagswerte müssen Sie daher jeden Monat die entsprechenden [`recent`-Dateien](/general/download#update-frequency) herunterladen.

:::

[Hier](https://www.meteoschweiz.admin.ch/wetter/messsysteme/datenmanagement/datenaufbereitung.html) erfahren Sie mehr darüber, wie MeteoSwiss Daten aufbereitet. Zu den Themen gehören Aggregation und Berechnung, Vollständigkeitsprüfung, Plausibilitätsprüfung und Homogenisierung.

### Niederschlags-Radarprodukte 
[Niederschlags-Radarprodukte](/d-radar-data/d1-precipitation-radar-products) ('CombiPrecip') basieren auf automatischen 10-Minuten-Bodenmessdaten und Radardaten. 

Da einige 10-Minuten-Daten verspätet oder fehlerhaft sein können oder Probleme mit dem Radar auftreten können, werden sie 8 Tage später automatisch neu verarbeitet, wobei alle verfügbaren und geprüften automatischen 10-Minuten-Niederschlagsmesswerte berücksichtigt werden. Die veröffentlichten Daten werden alle 8 Tage automatisch überschrieben.

:::tip

Um Daten von bester Qualität zu erhalten, empfehlen wir daher, nur die überarbeiteten Daten zu verwenden, die älter als 8 Tage sind, oder, wenn die aktuellen Daten für eine schnelle Einschätzung verwendet wurden, die überarbeiteten Daten später herunterzuladen.

:::

### Räumliche Klimadaten
Die täglichen räumlichen Klimadaten [`RprelimD`, `TabsD`, `TmaxD`, `TminD` and `SrelD`](/c-climate-data/c3-ground-based-climate-data) werden täglich auf der Grundlage der verfügbaren Tagesdaten berechnet.

Wie im Abschnitt [ground-based measurements](/general/faq#Bodenmessdaten) oben erwähnt, werden die Daten erst später überprüft, sodass eine spätere Neuberechnung der Produkte erforderlich ist. Auch die manuell überprüften täglichen Niederschlagswerte werden nach Ablauf des Monats in `RprelimD` aufgenommen, woraus sich das Produkt `RhiresD` ergibt.

Daher werden die Produkte `TabsD`, `TmaxD`, `TminD`, `SrelD` und `RhiresD` gegen Ende jedes folgenden Monats (um den 25. Tag herum) für den letzten Monat neu berechnet, um die bestmögliche Datenqualität zu gewährleisten.  


## Was bedeutet es, wenn Daten fehlen?
The data downloaded from MeteoSwiss corresponds to the data available to MeteoSwiss. Sometimes you may experience that some data entries are missing. The root cause of this is typically a malfunctioning measurement instrument, which MeteoSwiss will repair as soon as possible.

Please also note that [missing values](/general/download#missing-values) - regardless of the cause - are always represented as 'empty fields'. This applies to the vast majority of cases in which no measurements are taken at all.
