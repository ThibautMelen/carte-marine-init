import GuidePage from '../GuidePage'

const NavigationCotiereGuide = ({ onBack }) => {
  const guide = {
    id: 'navigation-cotiere',
    title: 'Navigation côtière : repères, alignements et relèvements',
    excerpt: 'Les techniques de navigation côtière : utiliser les repères à terre, alignements, relèvements au compas. Méthodes traditionnelles toujours utiles.',
    thumbnail: '/assets/guides/optimized/guide-cotiere.jpg',
    alt: 'Navigation côtière avec boussole et repères terrestres en arrière-plan',
    readTime: '16 min',
    difficulty: '🟡 Intermédiaire',
    category: 'Navigation',
    views: 3800,
    sections: [
      {
        title: 'Introduction à la navigation côtière',
        description: 'Comprendre les spécificités de la navigation près des côtes',
        content: [
          {
            text: 'La navigation côtière est l\'art de naviguer près des côtes en utilisant les repères terrestres. Elle complète parfaitement les techniques modernes de navigation électronique.'
          },
          {
            type: 'info',
            text: 'Même avec un GPS, les techniques de navigation côtière restent essentielles. Elles vous permettent de naviguer en cas de panne électronique et améliorent votre compréhension de l\'environnement.'
          },
          {
            text: 'Ce guide vous apprendra à utiliser les repères terrestres, les alignements, et les relèvements pour naviguer en sécurité près des côtes.'
          }
        ]
      },
      {
        title: 'Identification des repères terrestres',
        description: 'Reconnaître et utiliser les repères les plus fiables',
        content: [
          {
            text: 'Les repères terrestres sont vos points de référence pour la navigation côtière. Ils doivent être facilement identifiables et visibles de loin.'
          },
          {
            type: 'tip',
            list: [
              '🏔️ Reliefs caractéristiques : collines, montagnes, caps',
              '🏗️ Constructions : phares, châteaux d\'eau, églises',
              '🌊 Formes de côte : baies, caps, estuaires',
              '🌳 Végétation : forêts, parcs, zones cultivées',
              '🏖️ Plages et falaises : caractéristiques uniques'
            ]
          },
          {
            text: 'Choisissez des repères élevés et contrastés. Un phare est plus fiable qu\'une maison, une église plus visible qu\'un arbre isolé.'
          }
        ]
      },
      {
        title: 'Techniques d\'alignement',
        description: 'Utiliser les alignements pour naviguer en ligne droite',
        content: [
          {
            text: 'Les alignements sont des lignes imaginaires entre deux repères terrestres. Ils vous permettent de naviguer en ligne droite et de maintenir votre cap.'
          },
          {
            type: 'info',
            list: [
              '📏 Alignement d\'entrée : pour entrer dans un port ou un chenal',
              '🚫 Alignement de danger : pour éviter un obstacle',
              '✅ Alignement de sécurité : pour rester dans une zone sûre',
              '🔄 Alignement de changement de cap : pour modifier votre route',
              '📍 Alignement de position : pour déterminer votre position'
            ]
          },
          {
            type: 'warning',
            text: 'Vérifiez toujours que vos alignements sont marqués sur la carte marine. Un alignement non documenté peut être dangereux.'
          }
        ]
      },
      {
        title: 'Relèvements au compas',
        description: 'Mesurer et utiliser les relèvements pour la navigation',
        content: [
          {
            text: 'Un relèvement est l\'angle entre le nord magnétique et la direction d\'un repère. Il vous permet de déterminer votre position et de maintenir votre cap.'
          },
          {
            type: 'tip',
            list: [
              '🧭 Mesure : utiliser un compas de relèvement ou un compas de bord',
              '📐 Précision : viser le centre du repère pour plus de précision',
              '🔄 Vérification : prendre plusieurs relèvements pour confirmer',
              '📊 Calcul : utiliser les tables de conversion si nécessaire',
              '🗺️ Report : tracer les relèvements sur la carte marine'
            ]
          },
          {
            text: 'Un relèvement seul ne donne qu\'une ligne de position. Il faut au moins deux relèvements pour déterminer votre position exacte.'
          }
        ]
      },
      {
        title: 'Navigation par estime',
        description: 'Calculer sa position en fonction du cap et de la distance',
        content: [
          {
            text: 'La navigation par estime consiste à calculer sa position en fonction du cap suivi, de la vitesse et du temps écoulé depuis la dernière position connue.'
          },
          {
            type: 'info',
            list: [
              '🧭 Cap : direction suivie par rapport au nord magnétique',
              '⏱️ Temps : durée du parcours depuis le dernier point',
              '🚤 Vitesse : vitesse du bateau (nœuds ou km/h)',
              '🌊 Dérive : influence du vent et du courant',
              '📐 Calcul : position = position précédente + (cap × distance)'
            ]
          },
          {
            type: 'warning',
            text: 'La navigation par estime devient imprécise avec le temps. Vérifiez régulièrement votre position avec des repères terrestres.'
          }
        ]
      },
      {
        title: 'Utilisation des courants et marées',
        description: 'Intégrer les courants dans la navigation côtière',
        content: [
          {
            text: 'Les courants de marée influencent considérablement la navigation côtière. Il faut les anticiper et les compenser pour maintenir sa route.'
          },
          {
            type: 'tip',
            list: [
              '🌊 Courant de flot : courant montant, généralement vers la côte',
              '🌊 Courant de jusant : courant descendant, généralement vers le large',
              '⏰ Heures de marée : consulter les annuaires de marée',
              '📊 Force du courant : varie selon les coefficients de marée',
              '🧭 Compensation : ajuster le cap pour compenser la dérive'
            ]
          },
          {
            text: 'Un courant de 2 nœuds peut dériver votre bateau de 2 milles en une heure. Calculez toujours l\'influence des courants sur votre route.'
          }
        ]
      },
      {
        title: 'Techniques de positionnement',
        description: 'Déterminer sa position précise en navigation côtière',
        content: [
          {
            text: 'Déterminer sa position précise est essentiel pour la sécurité. Plusieurs techniques permettent de se positionner avec précision.'
          },
          {
            type: 'info',
            list: [
              '📍 Intersection de relèvements : position par croisement de lignes',
              '📏 Distance et relèvement : combinaison distance + direction',
              '🔄 Alignement et relèvement : position sur une ligne + direction',
              '📐 Triangulation : trois relèvements pour une position précise',
              '🗺️ Report sur carte : tracer les lignes de position'
            ]
          },
          {
            text: 'Plus vous avez de renseignements, plus votre position est précise. Croisez toujours plusieurs sources d\'information.'
          }
        ]
      },
      {
        title: 'Navigation par temps de brouillard',
        description: 'Adapter les techniques côtières par visibilité réduite',
        content: [
          {
            text: 'Le brouillard complique considérablement la navigation côtière. Il faut adapter ses techniques et utiliser tous les moyens disponibles.'
          },
          {
            type: 'warning',
            list: [
              '👂 Écoute : utiliser les sons (cloches, sifflets, moteurs)',
              '📻 Radio : écouter les bulletins météo et les communications',
              '🧭 Compas : maintenir un cap constant et précis',
              '⏱️ Temps : noter l\'heure de passage des repères sonores',
              '🚨 Signaux : utiliser les signaux sonores réglementaires'
            ]
          },
          {
            text: 'En cas de brouillard, réduisez la vitesse et préparez-vous à mouiller si nécessaire. La sécurité prime sur la destination.'
          }
        ]
      },
      {
        title: 'Erreurs courantes et pièges',
        description: 'Éviter les erreurs les plus fréquentes en navigation côtière',
        content: [
          {
            text: 'Certaines erreurs de navigation côtière peuvent être dangereuses. Voici les pièges les plus courants à éviter.'
          },
          {
            type: 'warning',
            list: [
              '❌ Confusion de repères : vérifier l\'identité des repères',
              '❌ Erreur de relèvement : viser précisément le centre du repère',
              '❌ Négligence des courants : toujours compenser la dérive',
              '❌ Confiance excessive : vérifier régulièrement sa position',
              '❌ Ignorance des dangers : consulter toujours la carte marine'
            ]
          },
          {
            text: 'En cas de doute sur votre position, arrêtez-vous et reprenez vos calculs. Mieux vaut perdre du temps que de s\'échouer.'
          }
        ]
      },
      {
        title: 'Intégration avec la navigation moderne',
        description: 'Combiner navigation traditionnelle et électronique',
        content: [
          {
            text: 'La navigation côtière traditionnelle complète parfaitement les techniques modernes. Elle offre une sécurité supplémentaire et une meilleure compréhension de l\'environnement.'
          },
          {
            type: 'tip',
            list: [
              '📱 GPS : utiliser comme aide, pas comme seule référence',
              '🗺️ Cartes papier : toujours avoir des cartes à bord',
              '🧭 Compas : vérifier régulièrement avec le compas magnétique',
              '📊 Électronique : croiser les informations de plusieurs sources',
              '🔄 Pratique : maintenir ses compétences traditionnelles'
            ]
          },
          {
            text: 'Un navigateur complet maîtrise à la fois les techniques traditionnelles et modernes. Cette polyvalence est votre meilleure assurance.'
          }
        ]
      },
      {
        title: 'Conclusion et bonnes pratiques',
        description: 'Récapitulatif des points essentiels pour une navigation côtière réussie',
        content: [
          {
            text: 'La navigation côtière est un art qui s\'apprend par la pratique. Elle vous donne une compréhension profonde de votre environnement et une sécurité supplémentaire.'
          },
          {
            type: 'tip',
            list: [
              '🎯 Identifiez toujours vos repères avant de partir',
              '📐 Prenez des relèvements régulièrement',
              '🌊 Tenez compte des courants et marées',
              '🔄 Vérifiez votre position par plusieurs méthodes',
              '📚 Continuez à vous former et à pratiquer'
            ]
          },
          {
            text: 'La navigation côtière vous connecte à la tradition maritime tout en vous préparant aux défis modernes. C\'est un investissement dans votre sécurité et votre plaisir de naviguer.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default NavigationCotiereGuide
