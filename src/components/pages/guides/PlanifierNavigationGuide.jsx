import GuidePage from '../GuidePage'

const PlanifierNavigationGuide = ({ onBack }) => {
  const guide = {
    id: 'planifier-navigation',
    title: 'Planifier votre première navigation côtière en 7 étapes',
    excerpt: 'Checklist complète pour préparer votre première sortie en mer. Météo, marées, sécurité, équipement : rien n\'est oublié pour naviguer en toute sécurité.',
    thumbnail: '/assets/guides/optimized/guide-planifier.jpg',
    alt: 'Marin expérimenté préparant sa navigation sur le pont d\'un yacht au lever du soleil',
    readTime: '10 min',
    difficulty: '🟢 Débutant',
    category: 'Préparation',
    views: 8200,
    sections: [
      {
        title: 'Introduction à la planification de navigation',
        description: 'Comprendre l\'importance d\'une bonne préparation pour naviguer en sécurité',
        content: [
          {
            text: 'Une navigation réussie commence par une planification minutieuse. Cette étape est cruciale pour votre sécurité et celle de votre équipage, même pour une sortie de quelques heures.'
          },
          {
            type: 'info',
            text: 'La planification ne s\'improvise pas. Elle doit être systématique et couvrir tous les aspects de votre sortie en mer.'
          },
          {
            text: 'Ce guide vous accompagne étape par étape pour préparer votre première navigation côtière en toute sécurité.'
          }
        ]
      },
      {
        title: 'Étape 1 : Vérification météorologique',
        description: 'Analyser les conditions météo et choisir le bon moment',
        content: [
          {
            text: 'La météo est le facteur le plus important pour décider de naviguer ou non. Une bonne analyse météorologique évite les situations dangereuses.'
          },
          {
            type: 'tip',
            list: [
              'Consultez plusieurs sources météo (Météo-France, Windy, PredictWind)',
              'Vérifiez les bulletins météo marins sur VHF',
              'Analysez les cartes météo avec isobares',
              'Prévoyez l\'évolution du temps sur 24h',
              'Attention aux orages et aux changements rapides'
            ]
          },
          {
            type: 'warning',
            text: 'En cas de doute sur les conditions météo, reportez votre sortie. Il vaut mieux naviguer un autre jour que de prendre des risques.'
          }
        ]
      },
      {
        title: 'Étape 2 : Étude des marées et courants',
        description: 'Comprendre l\'influence des marées sur votre navigation',
        content: [
          {
            text: 'Les marées et courants influencent considérablement votre navigation. Ils peuvent vous aider ou compliquer votre sortie selon leur direction et leur force.'
          },
          {
            type: 'info',
            list: [
              'Consultez les annuaires de marée pour votre zone',
              'Notez les heures de marée haute et basse',
              'Calculez les coefficients de marée',
              'Étudiez les courants dans votre zone de navigation',
              'Prévoyez l\'influence sur votre route'
            ]
          },
          {
            text: 'Un courant de 2 nœuds peut dériver votre bateau de 2 milles en une heure. Calculez toujours l\'influence des courants sur votre navigation.'
          }
        ]
      },
      {
        title: 'Étape 3 : Planification de la route',
        description: 'Tracer votre route en évitant les dangers',
        content: [
          {
            text: 'Une route bien planifiée est votre assurance de naviguer en sécurité. Elle doit éviter les dangers et optimiser votre temps de navigation.'
          },
          {
            type: 'tip',
            list: [
              'Tracez votre route sur la carte marine',
              'Identifiez les dangers et zones interdites',
              'Prévoyez des routes alternatives',
              'Calculez les distances et temps de navigation',
              'Notez les repères terrestres importants'
            ]
          },
          {
            type: 'warning',
            text: 'Ne naviguez jamais sans avoir tracé votre route sur une carte marine. Le GPS est un complément, pas un substitut.'
          }
        ]
      },
      {
        title: 'Étape 4 : Vérification de l\'équipement',
        description: 'Contrôler que tout l\'équipement de sécurité est en ordre',
        content: [
          {
            text: 'L\'équipement de sécurité doit être vérifié avant chaque sortie. Un équipement défaillant peut vous mettre en danger.'
          },
          {
            type: 'info',
            list: [
              'Gilets de sauvetage : 1 par personne, en bon état',
              'Fusées de détresse : vérifier les dates de péremption',
              'Radio VHF : test de fonctionnement et batterie',
              'Feux de navigation : test avant la sortie nocturne',
              'Équipement de secours : trousse, bouée, échelle'
            ]
          },
          {
            text: 'Testez votre équipement électronique avant de partir. Une panne en mer peut être dangereuse.'
          }
        ]
      },
      {
        title: 'Étape 5 : Préparation de l\'équipage',
        description: 'S\'assurer que l\'équipage est prêt et informé',
        content: [
          {
            text: 'Un équipage bien préparé et informé est essentiel pour la sécurité. Chacun doit connaître son rôle et les procédures d\'urgence.'
          },
          {
            type: 'tip',
            list: [
              'Briefing complet de l\'équipage avant le départ',
              'Distribution des rôles et responsabilités',
              'Explication des procédures d\'urgence',
              'Vérification de l\'état de santé de l\'équipage',
              'Information sur l\'itinéraire et les horaires'
            ]
          },
          {
            type: 'warning',
            text: 'Ne naviguez jamais seul pour votre première sortie. Ayez au minimum une personne expérimentée à bord.'
          }
        ]
      },
      {
        title: 'Étape 6 : Vérifications finales',
        description: 'Dernières vérifications avant le départ',
        content: [
          {
            text: 'Les vérifications finales sont votre dernière chance de détecter un problème avant de partir. Ne les négligez pas.'
          },
          {
            type: 'info',
            list: [
              'Carburant : niveau suffisant + réserve de sécurité',
              'Moteur : test de démarrage et fonctionnement',
              'Voilure : état des voiles et gréement',
              'Électronique : GPS, compas, instruments',
              'Documentation : cartes, permis, assurance'
            ]
          },
          {
            text: 'Informez toujours quelqu\'un à terre de votre itinéraire et de votre heure de retour prévue.'
          }
        ]
      },
      {
        title: 'Étape 7 : Départ et surveillance continue',
        description: 'Surveiller l\'évolution des conditions pendant la navigation',
        content: [
          {
            text: 'La planification ne s\'arrête pas au départ. Il faut surveiller en permanence l\'évolution des conditions et adapter sa navigation.'
          },
          {
            type: 'tip',
            list: [
              'Surveillance météo : écouter les bulletins VHF',
              'Position : vérifier régulièrement sa position',
              'Équipage : surveiller l\'état de l\'équipage',
              'Bateau : contrôler le bon fonctionnement',
              'Flexibilité : être prêt à modifier ses plans'
            ]
          },
          {
            type: 'warning',
            text: 'Si les conditions se dégradent, n\'hésitez pas à faire demi-tour ou à chercher un abri. La sécurité prime sur l\'objectif.'
          }
        ]
      },
      {
        title: 'Checklist de sécurité finale',
        description: 'Récapitulatif des points essentiels à vérifier',
        content: [
          {
            text: 'Cette checklist vous aide à ne rien oublier avant votre première navigation. Imprimez-la et cochez chaque point.'
          },
          {
            type: 'info',
            list: [
              '✅ Météo favorable et bulletins consultés',
              '✅ Marées et courants étudiés',
              '✅ Route tracée sur carte marine',
              '✅ Équipement de sécurité vérifié',
              '✅ Équipage briefé et en forme',
              '✅ Carburant et moteur en ordre',
              '✅ Documentation à jour',
              '✅ Personne informée à terre'
            ]
          },
          {
            text: 'Une navigation bien préparée est une navigation sécurisée. Prenez le temps de bien préparer votre sortie.'
          }
        ]
      },
      {
        title: 'Conclusion et bonnes pratiques',
        description: 'Récapitulatif des points essentiels pour une navigation réussie',
        content: [
          {
            text: 'La planification est la clé d\'une navigation réussie. Plus vous planifierez, plus vous naviguerez en sécurité et avec plaisir.'
          },
          {
            type: 'tip',
            list: [
              'Commencez par des navigations courtes et familières',
              'Progressez graduellement vers des navigations plus complexes',
              'Toujours avoir un plan B en cas de problème',
              'Apprenez de chaque sortie pour améliorer vos techniques',
              'Respectez vos limites et celles de votre équipage'
            ]
          },
          {
            text: 'La navigation est un art qui s\'apprend progressivement. Avec une bonne préparation, vous découvrirez les joies de la navigation en toute sécurité.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default PlanifierNavigationGuide
