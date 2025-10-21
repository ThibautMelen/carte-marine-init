import GuidePage from '../GuidePage'

const SymbolesEssentielsGuide = ({ onBack }) => {
  const guide = {
    id: 'symboles-essentiels',
    title: 'Les 20 symboles de carte marine à connaître absolument',
    excerpt: 'Les symboles indispensables pour naviguer en sécurité. Phares, bouées, dangers : focus sur les plus importants avec des exemples visuels.',
    thumbnail: '/assets/guides/optimized/guide-symboles.jpg',
    alt: 'Symboles essentiels de carte marine avec boussole et instruments de navigation',
    readTime: '6 min',
    difficulty: '🟢 Débutant',
    category: 'Navigation',
    views: 9800,
    sections: [
      {
        title: 'Introduction aux symboles de carte marine',
        description: 'Comprendre l\'importance des symboles pour la navigation sécurisée',
        content: [
          {
            text: 'Les cartes marines contiennent des centaines de symboles qui représentent tous les éléments importants pour la navigation : dangers, aides à la navigation, profondeurs, et informations nautiques.'
          },
          {
            type: 'info',
            text: 'Connaître les symboles essentiels est crucial pour votre sécurité. Ils vous permettent d\'identifier rapidement les dangers et les aides à la navigation.'
          },
          {
            text: 'Ce guide se concentre sur les 20 symboles les plus importants que tout navigateur doit connaître par cœur.'
          }
        ]
      },
      {
        title: 'Phares et feux (5 symboles essentiels)',
        description: 'Identifier les différents types de phares et leurs caractéristiques lumineuses',
        content: [
          {
            text: 'Les phares sont vos meilleurs amis en navigation nocturne. Chaque phare a une caractéristique lumineuse unique qui permet de l\'identifier.'
          },
          {
            type: 'tip',
            list: [
              '⚓ Phare principal : grand phare côtier avec portée importante',
              '🔦 Feu de port : phare d\'entrée de port',
              '💡 Feu de direction : alignement lumineux pour chenal',
              '🌟 Feu à secteurs : différentes couleurs selon la direction',
              '⚡ Feu à éclats : rythme lumineux caractéristique'
            ]
          },
          {
            type: 'warning',
            text: 'Chaque phare a une portée limitée. Vérifiez toujours la portée sur votre carte avant de compter sur un phare pour votre navigation.'
          }
        ]
      },
      {
        title: 'Bouées et balises (5 symboles essentiels)',
        description: 'Reconnaître les bouées de balisage et leur signification',
        content: [
          {
            text: 'Le balisage suit un système international de couleurs et de formes. Les bouées vous guident en sécurité dans les chenaux et vous signalent les dangers.'
          },
          {
            type: 'info',
            list: [
              '🔴 Bouée bâbord : rouge, forme conique, côté gauche du chenal',
              '🟢 Bouée tribord : verte, forme cylindrique, côté droit du chenal',
              '⚫ Bouée de danger isolé : noire et rouge, danger à éviter',
              '🟡 Bouée de mouillage : jaune, zone de mouillage autorisée',
              '⚪ Bouée cardinale : noire et jaune, indique la direction du danger'
            ]
          },
          {
            text: 'Mémorisez la règle : "Rouge à droite en rentrant au port" pour ne jamais confondre les côtés du chenal.'
          }
        ]
      },
      {
        title: 'Dangers et obstacles (5 symboles essentiels)',
        description: 'Identifier les dangers sous-marins et les obstacles à éviter',
        content: [
          {
            text: 'Les dangers sont représentés par des symboles spécifiques qui vous alertent sur les obstacles sous-marins potentiellement dangereux.'
          },
          {
            type: 'warning',
            list: [
              '⚡ Rocher à fleur d\'eau : danger permanent, toujours visible',
              '🌊 Rocher couvert : danger à marée basse seulement',
              '💥 Épave : reste d\'épave, profondeur variable',
              '🏔️ Haut-fond : zone peu profonde, danger de toucher',
              '🚫 Zone interdite : navigation interdite (militaire, réserve)'
            ]
          },
          {
            text: 'Ces dangers sont souvent entourés d\'une ligne de sécurité (ligne de sonde) que vous ne devez jamais franchir.'
          }
        ]
      },
      {
        title: 'Profondeurs et sondes (3 symboles essentiels)',
        description: 'Comprendre les indications de profondeur et leur signification',
        content: [
          {
            text: 'Les profondeurs sont indiquées en mètres et permettent de calculer la hauteur d\'eau disponible sous votre quille.'
          },
          {
            type: 'tip',
            list: [
              '📏 Sonde en chiffres : profondeur en mètres à marée basse',
              '📊 Ligne de sonde : limite de sécurité, ne pas franchir',
              '🌊 Sonde variable : profondeur qui change avec les marées'
            ]
          },
          {
            text: 'Ajoutez toujours la hauteur de marée à la profondeur indiquée sur la carte pour connaître la profondeur réelle à un moment donné.'
          }
        ]
      },
      {
        title: 'Mouillages et ports (2 symboles essentiels)',
        description: 'Identifier les zones de mouillage et les installations portuaires',
        content: [
          {
            text: 'Les mouillages et ports sont essentiels pour votre sécurité et votre confort. Ils offrent un abri contre les intempéries.'
          },
          {
            type: 'info',
            list: [
              '⚓ Mouillage : ancre, zone où vous pouvez jeter l\'ancre',
              '🏗️ Port : installations portuaires, quai, ponton'
            ]
          },
          {
            text: 'Les mouillages sont souvent protégés des vents dominants. Vérifiez toujours la direction du vent avant de choisir votre mouillage.'
          }
        ]
      },
      {
        title: 'Techniques de mémorisation',
        description: 'Méthodes pour retenir efficacement les symboles essentiels',
        content: [
          {
            text: 'Mémoriser les symboles peut sembler difficile, mais avec les bonnes techniques, vous les retiendrez rapidement et durablement.'
          },
          {
            type: 'tip',
            list: [
              '🎯 Concentrez-vous sur les symboles de votre zone de navigation',
              '📚 Utilisez des moyens mnémotechniques (couleurs, formes)',
              '🗺️ Étudiez une vraie carte marine de votre région',
              '🔄 Répétez régulièrement pour ancrer les connaissances',
              '👥 Naviguez avec des personnes expérimentées'
            ]
          },
          {
            text: 'La pratique régulière est la meilleure méthode. Plus vous naviguerez, plus les symboles deviendront naturels.'
          }
        ]
      },
      {
        title: 'Utilisation pratique en navigation',
        description: 'Comment utiliser efficacement les symboles pendant la navigation',
        content: [
          {
            text: 'Connaître les symboles ne suffit pas ; il faut savoir les utiliser efficacement pendant la navigation.'
          },
          {
            type: 'info',
            list: [
              '📍 Repérez les symboles importants avant de partir',
              '🗺️ Marquez votre route en évitant les dangers',
              '👀 Surveillez constamment votre position par rapport aux symboles',
              '📱 Utilisez des applications qui affichent les symboles',
              '🔍 Vérifiez votre position avec les symboles visibles'
            ]
          },
          {
            type: 'warning',
            text: 'Ne naviguez jamais sans avoir identifié au moins 3 repères sûrs sur votre carte. En cas de panne GPS, ces repères vous sauveront.'
          }
        ]
      },
      {
        title: 'Erreurs courantes à éviter',
        description: 'Les pièges les plus fréquents dans l\'interprétation des symboles',
        content: [
          {
            text: 'Certaines erreurs d\'interprétation des symboles peuvent être dangereuses. Voici les pièges les plus courants à éviter.'
          },
          {
            type: 'warning',
            list: [
              '❌ Confondre les côtés du chenal (bâbord/tribord)',
              '❌ Négliger la portée des phares',
              '❌ Oublier de tenir compte des marées',
              '❌ Confondre les bouées cardinales',
              '❌ Ignorer les zones interdites'
            ]
          },
          {
            text: 'En cas de doute sur un symbole, consultez la légende de votre carte ou demandez conseil à un navigateur expérimenté.'
          }
        ]
      },
      {
        title: 'Ressources et outils d\'apprentissage',
        description: 'Où trouver des informations complémentaires sur les symboles',
        content: [
          {
            text: 'De nombreuses ressources existent pour approfondir vos connaissances des symboles de carte marine.'
          },
          {
            type: 'tip',
            list: [
              '📖 Livres de navigation et cartes marines',
              '🌐 Sites internet spécialisés (SHOM, IHO)',
              '📱 Applications mobiles de navigation',
              '🎓 Formations nautiques (FFV, FFN)',
              '👨‍🏫 Cours avec instructeurs qualifiés'
            ]
          },
          {
            text: 'Le SHOM (Service Hydrographique et Océanographique de la Marine) propose des guides officiels des symboles utilisés sur les cartes françaises.'
          }
        ]
      },
      {
        title: 'Conclusion et bonnes pratiques',
        description: 'Récapitulatif des points essentiels pour maîtriser les symboles',
        content: [
          {
            text: 'Maîtriser les symboles de carte marine est un investissement dans votre sécurité. Ces connaissances vous accompagneront tout au long de votre vie de navigateur.'
          },
          {
            type: 'tip',
            list: [
              '🎯 Apprenez progressivement, ne vous précipitez pas',
              '🗺️ Pratiquez avec de vraies cartes de votre région',
              '👥 Naviguez avec des personnes expérimentées',
              '📚 Continuez à vous former et à apprendre',
              '🔄 Révisiez régulièrement vos connaissances'
            ]
          },
          {
            text: 'Les symboles de carte marine sont votre langage de navigation. Plus vous les maîtriserez, plus vous naviguerez en sécurité et en confiance.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default SymbolesEssentielsGuide
