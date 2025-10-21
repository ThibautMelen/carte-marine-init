import GuidePage from '../GuidePage'

const MeteoMarineGuide = ({ onBack }) => {
  const guide = {
    id: 'meteo-marine',
    title: 'Météo marine : comprendre les prévisions pour naviguer',
    excerpt: 'Décryptez les bulletins météo marins, isobares, vents, vagues. Apprenez à interpréter les prévisions pour choisir le bon moment de navigation.',
    thumbnail: '/assets/guides/optimized/guide-meteo.jpg',
    alt: 'Analyse météorologique marine avec baromètre et instruments de mesure',
    readTime: '14 min',
    difficulty: '🟡 Intermédiaire',
    category: 'Météo',
    views: 5800,
    sections: [
      {
        title: 'Introduction à la météorologie marine',
        description: 'Comprendre les spécificités de la météo en mer et son impact sur la navigation',
        content: [
          {
            text: 'La météorologie marine diffère significativement de la météo terrestre. En mer, les conditions changent plus rapidement, les vents sont plus forts, et les phénomènes météorologiques peuvent être plus violents.'
          },
          {
            type: 'info',
            text: 'La météo marine influence directement votre sécurité et votre confort en navigation. Une bonne compréhension des prévisions vous permet de choisir le bon moment pour naviguer.'
          },
          {
            text: 'Cette section vous donnera les bases pour comprendre comment la météo marine fonctionne et pourquoi elle est cruciale pour la navigation.'
          }
        ]
      },
      {
        title: 'Les éléments météorologiques essentiels',
        description: 'Identifier et comprendre les paramètres météo les plus importants pour la navigation',
        content: [
          {
            text: 'Plusieurs éléments météorologiques sont cruciaux pour la navigation maritime. Chacun a un impact spécifique sur votre sécurité et votre confort.'
          },
          {
            type: 'tip',
            list: [
              'Vent : force, direction, rafales et variations',
              'Vagues : hauteur, période, direction et déferlement',
              'Visibilité : brouillard, précipitations, embruns',
              'Pression atmosphérique : tendance et variations',
              'Température : gradient thermique et humidité'
            ]
          },
          {
            text: 'Le vent est l\'élément le plus important car il génère les vagues et influence directement la navigation. Une force de vent de 6 Beaufort (25-30 nœuds) marque généralement la limite entre navigation confortable et navigation difficile.'
          }
        ]
      },
      {
        title: 'Lecture des cartes météo et isobares',
        description: 'Interpréter les cartes météorologiques et comprendre les systèmes de pression',
        content: [
          {
            text: 'Les cartes météorologiques montrent la répartition de la pression atmosphérique au moyen de lignes appelées isobares. Ces lignes révèlent les systèmes météorologiques et permettent de prévoir l\'évolution du temps.'
          },
          {
            type: 'info',
            list: [
              'Isobars serrées = vents forts',
              'Isobars espacées = vents faibles',
              'Dépression (L) = mauvais temps',
              'Anticyclone (H) = beau temps',
              'Fronts = zones de changement rapide'
            ]
          },
          {
            type: 'warning',
            text: 'Les zones où les isobares sont très serrées indiquent des vents violents. Évitez ces zones ou préparez-vous à des conditions difficiles.'
          }
        ]
      },
      {
        title: 'Bulletins météo marins : décryptage',
        description: 'Comprendre et utiliser les bulletins météorologiques marins officiels',
        content: [
          {
            text: 'Les bulletins météo marins sont émis par Météo-France et contiennent des informations spécifiques aux navigateurs. Ils sont diffusés sur les fréquences radio VHF et disponibles sur internet.'
          },
          {
            type: 'tip',
            list: [
              'Écoutez les bulletins sur VHF canal 16 puis 80',
              'Bulletins à 6h, 12h, 18h et minuit',
              'Bulletins spéciaux en cas de coup de vent',
              'Prévisions à 24h, 48h et 72h',
              'Avertissements de coup de vent et tempête'
            ]
          },
          {
            text: 'Les bulletins utilisent un vocabulaire spécifique. "Vent de secteur ouest 4 à 5" signifie que le vent vient de l\'ouest avec une force de 4 à 5 Beaufort.'
          }
        ]
      },
      {
        title: 'Prévision des vents et vagues',
        description: 'Anticiper les conditions de vent et de mer pour planifier sa navigation',
        content: [
          {
            text: 'La prévision des vents et des vagues est cruciale pour la sécurité. Les vagues sont générées par le vent, mais leur hauteur dépend aussi de la profondeur de l\'eau et de la durée du vent.'
          },
          {
            type: 'info',
            list: [
              'Vagues courtes et raides = vent récent',
              'Vagues longues et régulières = vent établi',
              'Mer du vent vs mer de fond',
              'Réfraction des vagues près des côtes',
              'Déferlement en eaux peu profondes'
            ]
          },
          {
            type: 'warning',
            text: 'Les vagues peuvent être 2 à 3 fois plus hautes que prévu en cas de vent contraire au courant. Vérifiez toujours les conditions de courant.'
          }
        ]
      },
      {
        title: 'Brouillard et visibilité',
        description: 'Comprendre les phénomènes de brouillard maritime et leurs implications',
        content: [
          {
            text: 'Le brouillard maritime est l\'un des phénomènes les plus dangereux pour la navigation. Il réduit drastiquement la visibilité et complique l\'identification des dangers.'
          },
          {
            type: 'tip',
            list: [
              'Brouillard d\'advection : air chaud sur eau froide',
              'Brouillard de radiation : refroidissement nocturne',
              'Brouillard de mélange : rencontre d\'air chaud et froid',
              'Brouillard d\'évaporation : eau chaude, air froid',
              'Signes précurseurs : rosée, ciel clair, vent faible'
            ]
          },
          {
            text: 'En cas de brouillard, réduisez la vitesse, activez les feux de navigation, et utilisez le radar si disponible. Le GPS devient votre principal outil de navigation.'
          }
        ]
      },
      {
        title: 'Orages et phénomènes violents',
        description: 'Reconnaître et gérer les orages et phénomènes météorologiques dangereux',
        content: [
          {
            text: 'Les orages marins peuvent être extrêmement dangereux. Ils s\'accompagnent de vents violents, de pluies torrentielles, et parfois de grêle.'
          },
          {
            type: 'warning',
            list: [
              'Vents pouvant atteindre 100 km/h',
              'Vagues soudaines et chaotiques',
              'Foudre : danger pour l\'équipage et l\'électronique',
              'Visibilité réduite à quelques mètres',
              'Changement de direction de vent brutal'
            ]
          },
          {
            text: 'Si vous voyez des cumulonimbus (nuages d\'orage) à l\'horizon, préparez-vous à des conditions difficiles. Réduisez la voilure et préparez l\'équipage.'
          }
        ]
      },
      {
        title: 'Outils et instruments météo',
        description: 'Utiliser les instruments météorologiques à bord et les applications modernes',
        content: [
          {
            text: 'Les instruments météorologiques modernes permettent une surveillance en temps réel des conditions. Combinés aux prévisions, ils offrent une image complète de la situation météo.'
          },
          {
            type: 'tip',
            list: [
              'Baromètre : tendance de pression (chute = mauvais temps)',
              'Anémomètre : vitesse et direction du vent',
              'Thermomètre : température de l\'air et de l\'eau',
              'Hygromètre : humidité relative',
              'Applications météo : Windy, PredictWind, SailGrib'
            ]
          },
          {
            text: 'Un baromètre est l\'instrument le plus important. Une chute rapide de pression (plus de 3 hPa en 3 heures) annonce généralement un coup de vent.'
          }
        ]
      },
      {
        title: 'Planification météo et sécurité',
        description: 'Intégrer la météo dans la planification de navigation et les décisions de sécurité',
        content: [
          {
            text: 'La météo doit être intégrée dans toutes les décisions de navigation. Une bonne planification météorologique évite les situations dangereuses et améliore le confort de navigation.'
          },
          {
            type: 'info',
            list: [
              'Consultez plusieurs sources météo',
              'Planifiez des routes alternatives',
              'Prévoyez des mouillages de secours',
              'Adaptez l\'horaire de navigation',
              'Informez l\'équipage des conditions prévues'
            ]
          },
          {
            type: 'warning',
            text: 'En cas de doute sur les conditions météo, reportez votre sortie. Il vaut mieux naviguer un autre jour que de prendre des risques inutiles.'
          }
        ]
      },
      {
        title: 'Conclusion et bonnes pratiques',
        description: 'Récapitulatif des points essentiels pour une navigation météo-sécurisée',
        content: [
          {
            text: 'La météorologie marine est une science complexe mais essentielle pour la navigation. Une bonne compréhension des phénomènes météo améliore considérablement votre sécurité et votre confort en mer.'
          },
          {
            type: 'tip',
            list: [
              'Consultez toujours plusieurs sources météo',
              'Apprenez à interpréter les cartes météo',
              'Surveillez en permanence l\'évolution du temps',
              'Ne naviguez jamais avec des conditions incertaines',
              'Formez-vous aux techniques météorologiques'
            ]
          },
          {
            text: 'La météo marine s\'apprend par la pratique et l\'observation. Plus vous naviguerez, plus vous développerez votre sens météorologique et votre capacité à anticiper les changements.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default MeteoMarineGuide
