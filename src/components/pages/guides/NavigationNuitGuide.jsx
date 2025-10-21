import GuidePage from '../GuidePage'

const NavigationNuitGuide = ({ onBack }) => {
  const guide = {
    id: 'navigation-nuit',
    title: 'Navigation de nuit : cartes et sécurité',
    excerpt: 'Les spécificités de la navigation nocturne : éclairage, balisage, cartes adaptées. Conseils pratiques pour naviguer en toute sécurité la nuit.',
    thumbnail: '/assets/guides/optimized/guide-nuit.jpg',
    alt: 'Navigation nocturne avec phares et lumières colorées sur l\'océan sombre',
    readTime: '8 min',
    difficulty: '🟡 Intermédiaire',
    category: 'Sécurité',
    views: 4200,
    sections: [
      {
        title: 'Introduction à la navigation nocturne',
        description: 'Comprendre les défis et les spécificités de la navigation de nuit',
        content: [
          {
            text: 'La navigation nocturne présente des défis uniques qui nécessitent une préparation minutieuse et une connaissance approfondie des techniques spécifiques. Contrairement à la navigation diurne, la nuit réduit considérablement la visibilité et modifie notre perception de l\'espace et des distances.'
          },
          {
            type: 'warning',
            text: 'La navigation nocturne augmente significativement les risques d\'accidents. Une formation appropriée et une expérience progressive sont essentielles.'
          },
          {
            text: 'Cette section vous donnera les bases fondamentales pour comprendre pourquoi la navigation nocturne est différente et quels sont les principaux défis à surmonter.'
          }
        ]
      },
      {
        title: 'Éclairage et visibilité',
        description: 'Optimiser l\'éclairage du bateau et comprendre les systèmes de balisage nocturne',
        content: [
          {
            text: 'Un éclairage approprié est crucial pour la sécurité nocturne. Il faut distinguer l\'éclairage de navigation (obligatoire) de l\'éclairage de travail (recommandé).'
          },
          {
            type: 'tip',
            list: [
              'Feux de navigation : rouge à bâbord, vert à tribord, blanc à l\'arrière',
              'Feu de mouillage : blanc visible à 360°',
              'Éclairage de pont : rouge pour préserver la vision nocturne',
              'Lampe de poche étanche avec filtre rouge'
            ]
          },
          {
            text: 'L\'éclairage rouge préserve votre vision nocturne en évitant l\'éblouissement. Évitez les lumières blanches vives qui peuvent temporairement aveugler l\'équipage.'
          }
        ]
      },
      {
        title: 'Balisage nocturne et aides à la navigation',
        description: 'Identifier et interpréter les signaux lumineux de navigation',
        content: [
          {
            text: 'Le balisage nocturne suit des codes stricts définis par l\'OMI (Organisation Maritime Internationale). Chaque type de balise a une signification précise.'
          },
          {
            type: 'info',
            list: [
              'Phares : feux blancs avec caractéristiques lumineuses spécifiques',
              'Bouées lumineuses : couleurs et rythmes différents selon leur fonction',
              'Feux de port : généralement verts pour l\'entrée, rouges pour la sortie',
              'Feux de chenal : alignements lumineux pour suivre les chenaux'
            ]
          },
          {
            text: 'Apprenez par cœur les caractéristiques des phares de votre zone de navigation. Leur rythme et leur couleur vous aideront à vous positionner même par temps de brouillard.'
          }
        ]
      },
      {
        title: 'Cartes marines et navigation nocturne',
        description: 'Adapter l\'utilisation des cartes marines pour la navigation nocturne',
        content: [
          {
            text: 'Les cartes marines contiennent des informations spécifiques pour la navigation nocturne, notamment les caractéristiques des phares et les zones de mouillage éclairées.'
          },
          {
            type: 'tip',
            list: [
              'Marquez les phares importants avec des feux de couleur',
              'Identifiez les zones de mouillage éclairées',
              'Notez les alignements lumineux sur votre carte',
              'Préparez des routes avec des repères lumineux'
            ]
          },
          {
            text: 'Utilisez un crayon rouge pour marquer les phares sur votre carte. Cela vous aidera à les identifier rapidement dans l\'obscurité.'
          }
        ]
      },
      {
        title: 'Techniques de navigation nocturne',
        description: 'Méthodes spécifiques pour naviguer efficacement la nuit',
        content: [
          {
            text: 'La navigation nocturne nécessite des techniques adaptées qui combinent instruments modernes et méthodes traditionnelles.'
          },
          {
            type: 'info',
            list: [
              'Navigation par alignements lumineux',
              'Utilisation du GPS avec affichage adapté',
              'Navigation par relèvements de phares',
              'Estimation de distance par temps de visibilité'
            ]
          },
          {
            type: 'warning',
            text: 'Ne naviguez jamais seul la nuit. Un équipage minimum de deux personnes est recommandé, avec une personne dédiée à la veille.'
          }
        ]
      },
      {
        title: 'Sécurité et équipement spécifique',
        description: 'Équipement de sécurité et procédures pour la navigation nocturne',
        content: [
          {
            text: 'La navigation nocturne nécessite un équipement de sécurité renforcé et des procédures spécifiques.'
          },
          {
            type: 'tip',
            list: [
              'VFI avec bandes réfléchissantes',
              'Fusées de détresse et fumigènes',
              'Radio VHF avec veille automatique',
              'Éclairage de secours étanche',
              'Thermos avec boissons chaudes'
            ]
          },
          {
            text: 'Informez toujours quelqu\'un à terre de votre itinéraire et de votre heure de retour prévue. En cas de problème, les secours sauront où vous chercher.'
          }
        ]
      },
      {
        title: 'Gestion de la fatigue et de l\'équipage',
        description: 'Maintenir la vigilance et organiser l\'équipage pour la navigation nocturne',
        content: [
          {
            text: 'La fatigue est l\'ennemi numéro un de la navigation nocturne. Une organisation rigoureuse de l\'équipage est essentielle.'
          },
          {
            type: 'info',
            list: [
              'Rotation des quarts toutes les 2-3 heures',
              'Repos obligatoire avant la navigation nocturne',
              'Surveillance mutuelle des signes de fatigue',
              'Communication claire entre les membres d\'équipage'
            ]
          },
          {
            text: 'Si vous ressentez de la fatigue, n\'hésitez pas à mouiller dans un endroit sûr et à attendre le jour. Mieux vaut arriver en retard qu\'avoir un accident.'
          }
        ]
      },
      {
        title: 'Météo et conditions nocturnes',
        description: 'Anticiper et gérer les conditions météorologiques nocturnes',
        content: [
          {
            text: 'Les conditions météorologiques nocturnes peuvent être très différentes de celles du jour. La température baisse, l\'humidité augmente, et la visibilité peut se dégrader rapidement.'
          },
          {
            type: 'warning',
            list: [
              'Brouillard nocturne fréquent près des côtes',
              'Vent qui peut se renforcer la nuit',
              'Décalage thermique important',
              'Formation de rosée sur les instruments'
            ]
          },
          {
            text: 'Consultez toujours les bulletins météo spécifiques à la navigation nocturne et préparez-vous à des conditions changeantes.'
          }
        ]
      },
      {
        title: 'Conclusion et bonnes pratiques',
        description: 'Récapitulatif des points essentiels pour une navigation nocturne sécurisée',
        content: [
          {
            text: 'La navigation nocturne peut être une expérience magnifique et enrichissante si elle est bien préparée. Les clés du succès sont la préparation, l\'équipement approprié et le respect des règles de sécurité.'
          },
          {
            type: 'tip',
            list: [
              'Commencez par des navigations courtes et familières',
              'Progressez graduellement vers des navigations plus complexes',
              'Toujours avoir un plan B (mouillage de secours)',
              'Maintenez une veille radio constante',
              'Respectez les limitations de votre expérience'
            ]
          },
          {
            text: 'La navigation nocturne est un art qui s\'apprend progressivement. Avec de la pratique et du respect des règles de sécurité, elle vous ouvrira de nouvelles possibilités de navigation.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default NavigationNuitGuide
