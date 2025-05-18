---
sidebar_position: 4
---

# Questions fréquentes (FAQ)
Vous trouverez ici les réponses aux questions les plus fréquemment posées. Nous les mettons régulièrement à jour sur la base des questions reçues.


## Quel type de données puis-je obtenir ?
À ce jour, les données suivantes sont disponibles
- [A – Données de mesures au sol](/a-data-groundbased)
- [C – Données climatiques : séries de mesures homogènes](/c-climate-data)
- [E – Données de prévision : Modèle numérique de prévision météorologique ICON-CH1/2-EPS](/e-forecast-data/e2-e3-numerical-weather-forecasting-model)

D'autres types de données seront publiés dans les mois à venir. Le trimestre prévu pour chaque ensemble de données sera annoncé sur notre [page d'accueil Open Data](https://www.meteosuisse.admin.ch/services-et-publications/service/open-data.html).

<!--  [B - Données de mesures de l'atmosphère](/b-data-atmosphere)  -->
<!--  [D - Données radar](/d-data-radar)  -->


## Comment puis-je utiliser les données ?
Veuillez lire les [Droits d'utilisation des données](/general/terms-of-use#2-droits-dutilisation-des-donn%C3%A9es).


## Y a-t-il des restrictions d'usage ?
Le partenaire de service de téléchargement de MétéoSuisse, swisstopo, se réserve le droit de bloquer ou d'adapter la 'bandwidth' pour certains utilisateurs si ceux-ci sollicitent de manière disproportionnée le site geo.admin.ch. Veuillez lire les [Conditions générales d’utilisation et d’exploitation de l’Infrastructure fédérale de données géographiques IFDG, chapitre 2. Utilisation des données](https://www.geo.admin.ch/fr/conditions-generales-utilisation-ifdg#2.-Utilisation-des-donn%C3%A9es).


## À quelle fréquence les données sont-elles mises à jour ?
Pour les 'Données de mesures au sol' ainsi que pour les 'Stations climatologiques – Séries de mesures homogènes' et les 'Stations climatologiques pluviométriques – Séries de mesures homogènes', les fréquences de mise à jour indiquées [ici](/general/download#update-frequency) s'appliquent.

Pour les autres types de données, veuillez vous reporter à la documentation correspondante.


## Qu'en est-il du contrôle de la qualité des données ?  <!-- Ne modifiez pas ce titre ! -->

### Données de mesures au sol
Les [données de mesures au sol](/a-data-groundbased) sont des mesures initiales brutes, non contrôlées, qui peuvent être erronées en raison de la nature de leur collecte. L'utilisation de ces données doit tenir compte du fait que les mesures peuvent être erronées. Les erreurs sont généralement dues à des dysfonctionnements des instruments causés par l'usure ou les intempéries et, dans de rares cas, par des actes de vandalisme.

Afin de minimiser le risque de mesures erronées, MétéoSuisse vérifie la plausibilité des données pendant une période glissante de 5 jours à compter de la date de la mesure à l'aide de plusieurs méthodes de contrôle automatiques et manuelles. Les données vérifiées manuellement, qui présentent la meilleure qualité disponible, sont généralement publiées 5 jours après la mesure.

:::tip

- Si vous avez besoin de données cohérentes et vérifiées, nous vous recommandons de télécharger les fichiers [`recent`](/general/download#update-frequency) correspondants, par exemple chaque semaine, afin de disposer des données vérifiées manuellement dans votre base de données.
- Les valeurs quotidiennes et mensuelles des précipitations constituent une exception, car il existe encore des stations manuelles en service. Celles-ci ne sont vérifiées manuellement qu'à la fin du mois suivant. Pour obtenir un ensemble de données cohérent sur les valeurs quotidiennes ou mensuelles des précipitations, vous devez donc télécharger chaque mois les fichiers [`recent`](/general/download#update-frequency) correspondants.

:::

[Ici](https://www.meteosuisse.admin.ch/meteo/systemes-de-mesure/gestion-des-donnees/preparation-des-donnees.html), vous trouverez plus d'informations sur la manière dont MeteoSwiss prépare les données. Les thèmes abordés comprennent l'agrégation et le calcul, le contrôle d'exhaustivité, le contrôle de plausibilité et l'homogénéisation.

### Produits radar de précipitation
Les [Produits radar de précipitation](/d-radar-data/d1-precipitation-radar-products) ('CombiPrecip') sont basés sur des données automatiques mesurées au sol toutes les 10 minutes et sur des données radar.

Certaines données enregistrées toutes les 10 minutes pouvant être retardées ou erronées, ou des problèmes pouvant survenir avec le radar, elles sont automatiquement retraitées 8 jours plus tard, en tenant compte de toutes les mesures automatiques des précipitations disponibles et vérifiées enregistrées toutes les 10 minutes. Les données publiées sont automatiquement écrasées tous les 8 jours.

:::tip

Afin d'obtenir des données de la meilleure qualité possible, nous vous recommandons donc de n'utiliser que les données révisées datant de plus de 8 jours ou, si les données actuelles ont été utilisées pour une estimation rapide, de télécharger les données révisées ultérieurement.

:::

### Données climatiques spatiales
Les données climatiques spatiales quotidiennes [`RprelimD`, `TabsD`, `TmaxD`, `TminD` et `SrelD`](/c-climate-data/c3-ground-based-climate-data) sont calculées quotidiennement sur la base des données journalières disponibles.

Comme mentionné dans la section [Données de mesures au sol](/general/faq#donn%C3%A9es-de-mesures-au-sol) ci-dessus, les données ne sont vérifiées que plus tard, ce qui nécessite un nouveau calcul des produits. Les valeurs quotidiennes des précipitations vérifiées manuellement sont également enregistrées dans `RprelimD` à la fin du mois, ce qui donne le produit `RhiresD`.

Par conséquent, les produits `TabsD`, `TmaxD`, `TminD`, `SrelD` et `RhiresD` sont recalculés vers la fin de chaque mois suivant (vers le jour 25) pour le mois précédent afin de garantir la meilleure qualité possible des données.


## Que signifie le fait que des données manquent ?
Les 'Open Data' téléchargées correspondent aux données dont dispose MétéoSuisse. Il peut parfois arriver que certaines valeurs soient manquantes. Cela est généralement dû à un appareil de mesure défectueux, que MétéoSuisse s'efforce de réparer dans les meilleurs délais.

Veuillez également noter que les [valeurs manquantes](/general/download#missing-values), quelle qu'en soit la cause, sont toujours affichées sous forme de 'champs vides'. Cela vaut pour la grande majorité des cas où aucune mesure n'a été effectuée.
