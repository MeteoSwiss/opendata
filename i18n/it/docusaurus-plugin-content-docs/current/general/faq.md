---
sidebar_position: 4
---

# Domande frequenti (FAQ)
Qui troverete le risposte alle domande più frequenti. Le aggiorniamo regolarmente sulla base delle domande che riceviamo.


## Che tipo di dati posso ottenere?
Finora sono disponibili i seguenti dati:
- [A – Dati delle misurazioni al suolo](/a-data-groundbased)
- [C – Dati climatici: Serie omogenee di misurazioni](/c-climate-data)
- [E – Dati di previsione: Modello numerico di previsione meteorologica ICON-CH1/2-EPS](/e-forecast-data/e2-e3-numerical-weather-forecasting-model)

Ulteriori tipi di dati saranno pubblicati nei prossimi mesi. Il trimestre previsto per ogni set di dati sarà comunicato sulla nostra [pagina iniziale Open Data](https://www.meteosvizzera.admin.ch/servizi-e-pubblicazioni/prestazioni/open-data.html).

<!--  [B - Dati di misura dell'atmosfera](/b-data-atmosphere)  -->
<!--  [D - Dati radar](/d-data-radar)  -->


## Come posso utilizzare i dati?
Consulta i [Diritti di utilizzo dei dati](/general/terms-of-use#2-diritti-di-utilizzo-dei-dati).


## Esistono restrizioni d'uso?
Il partner di MeteoSvizzera per il servizio di download, swisstopo, si riserva il diritto di bloccare o adeguare la larghezza di banda per singoli utenti che sovraccaricano in modo sproporzionato geo.admin.ch. Consulta le [Condizioni generali di utilizzo e le norme di esercizio dell'Infrastruttura federale di dati geografici IFDG, capitolo 2. Uso dei dati](https://www.geo.admin.ch/de/allgemeine-nutzungsbedingungen-bgdi#2.-Datennutzung).


## Con quale frequenza vengono aggiornati i dati?
Per i 'Dati delle misurazioni al suolo', le 'Stazioni climatologiche – Serie omogenee di misurazioni' e le 'Stazioni climatologiche pluviometriche – Serie omogenee di misurazioni' valgono le frequenze di aggiornamento indicate [qui](/general/download#update-frequency).

Per altri tipi di dati si prega di consultare la relativa documentazione.


## Cosa bisogna considerare in relazione al controllo della qualità dei dati?  <!-- Non modificare questo titolo! -->

### Dati delle misurazioni al suolo
I [dati delle misurazioni al suolo](/a-data-groundbased) sono inizialmente misurazioni grezze, non sottoposte a controllo di qualità, che possono essere errate a causa del tipo di rilevamento. L'utilizzo di questi dati deve tenere conto del fatto che le misurazioni possono essere errate. Gli errori sono generalmente dovuti a malfunzionamenti degli strumenti causati da usura o agenti atmosferici e, in rari casi, da atti vandalici.

Al fine di ridurre al minimo il rischio di misurazioni errate, MeteoSvizzera verifica la plausibilità dei dati per un periodo di 5 giorni a partire dal momento della misurazione utilizzando diversi metodi di controllo automatici e manuali. I dati verificati manualmente, che presentano la massima qualità disponibile, vengono generalmente pubblicati 5 giorni dopo la misurazione.

:::tip

- Se avete bisogno di dati coerenti e verificati, vi consigliamo di scaricare i file [`recent`](/general/download#update-frequency) corrispondenti, ad esempio ogni settimana, in modo da avere i dati verificati manualmente nel vostro database.
- Fanno eccezione i valori di precipitazione giornalieri e mensili, poiché esistono ancora stazioni attive gestite manualmente. Questi vengono verificati manualmente solo alla fine del mese successivo. Per ottenere un set di dati coerente dei valori di precipitazione giornalieri o mensili, è quindi necessario scaricare ogni mese i file [`recent`](/general/download#update-frequency) corrispondenti.

:::

[Qui](https://www.meteosvizzera.admin.ch/tempo/i-sistemi-di-rilevamento/gestione-dei-dati/elaborazione-dei-dati.html) potete trovare maggiori informazioni su come MeteoSwiss elabora i dati. Gli argomenti trattati includono l'aggregazione e il calcolo, il controllo della completezza, il controllo della plausibilità e l'omogeneizzazione.

<!--  
### Prodotti radar - Precipitazioni
I [Prodotti radar - Precipitazioni](/d-radar-data/d1-precipitation-radar-products) ('CombiPrecip') si basano su dati delle misurazioni al suolo automatici rilevati ogni 10 minuti e dati radar. 

Poiché alcuni dati di 10 minuti possono essere ritardati o errati o possono verificarsi problemi con il radar, essi vengono rielaborati automaticamente 8 giorni dopo, tenendo conto di tutte le misurazioni automatiche delle precipitazioni di 10 minuti disponibili e verificate. I dati pubblicati vengono sovrascritti automaticamente ogni 8 giorni.

:::tip

Per ottenere dati della migliore qualità, si consiglia quindi di utilizzare solo i dati rielaborati che risalgono a più di 8 giorni fa o, se i dati attuali sono stati utilizzati per una valutazione rapida, di scaricare i dati rielaborati in un secondo momento.

:::

### Dati climatici spaziali
I dati climatici spaziali giornalieri [`RprelimD`, `TabsD`, `TmaxD`, `TminD` e `SrelD`](/c-climate-data/c3-ground-based-climate-data) vengono calcolati quotidianamente sulla base dei dati giornalieri disponibili.

Come indicato nella sezione [misurazioni a terra](/general/faq#dati-delle-misurazioni-al-suolo) sopra, i dati vengono verificati solo in un secondo momento, rendendo necessario un ricalcolo dei prodotti. Anche i valori giornalieri delle precipitazioni verificati manualmente vengono inseriti in `RprelimD` alla fine del mese, da cui si ottiene il prodotto `RhiresD`.

Pertanto, i prodotti `TabsD`, `TmaxD`, `TminD`, `SrelD` e `RhiresD` vengono ricalcolati verso la fine di ogni mese successivo (intorno al giorno 25) per il mese precedente, al fine di garantire la migliore qualità possibile dei dati.
-->

## Cosa significa quando mancano dei dati?
I 'Open Data' scaricati corrispondono ai dati a disposizione di MeteoSvizzera. A volte può capitare che alcuni valori siano mancanti. La causa è solitamente un dispositivo di misurazione difettoso, che MeteoSvizzera provvederà a riparare il prima possibile.

Si prega di notare che i [valori mancanti](/general/download#missing-values), indipendentemente dalla causa, vengono sempre visualizzati come 'campi vuoti' . Ciò vale per la stragrande maggioranza dei casi in cui non sono state effettuate misurazioni.
