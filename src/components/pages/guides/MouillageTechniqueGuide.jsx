import GuidePage from '../GuidePage'

const MouillageTechniqueGuide = ({ onBack }) => {
  const guide = {
    id: 'mouillage-technique',
    title: 'Techniques de mouillage : choisir et utiliser son ancre',
    excerpt: 'Les techniques de mouillage expliquées : choix de l\'ancre, calcul de la longueur de chaîne, reconnaissance des fonds, récupération.',
    thumbnail: '/assets/guides/optimized/guide-mouillage.jpg',
    alt: 'Techniques de mouillage avec ancre, chaîne et cordage sur le pont d\'un yacht',
    readTime: '13 min',
    difficulty: '🟡 Intermédiaire',
    category: 'Technique',
    views: 5100,
    sections: [
      {
        title: 'Introduction au mouillage',
        description: 'Comprendre les bases du mouillage et son importance pour la sécurité',
        content: [
          {
            text: 'Le mouillage est l\'une des techniques les plus importantes en navigation. Un bon mouillage vous protège contre la dérive et vous permet de vous reposer en sécurité.'
          },
          {
            type: 'info',
            text: 'Un mouillage mal réalisé peut entraîner la perte de votre bateau ou des dommages à d\'autres navires. Maîtriser les techniques de mouillage est essentiel pour votre sécurité.'
          },
          {
            text: 'Ce guide vous apprendra à choisir le bon mouillage, à calculer la longueur de chaîne nécessaire, et à récupérer votre ancre en toute sécurité.'
          }
        ]
      },
      {
        title: 'Types d\'ancres et leurs caractéristiques',
        description: 'Choisir l\'ancre adaptée à votre bateau et aux conditions',
        content: [
          {
            text: 'Il existe plusieurs types d\'ancres, chacune ayant ses avantages et inconvénients selon le type de fond et les conditions météorologiques.'
          },
          {
            type: 'tip',
            list: [
              '⚓ Ancre à pattes : excellente tenue sur fonds rocheux et sable',
              '🦀 Ancre grappin : idéale pour les fonds d\'herbiers',
              '🏔️ Ancre plomb : bonne tenue sur fonds vaseux',
              '🌊 Ancre flottante : pour réduire la dérive par gros temps',
              '🔗 Ancre de secours : toujours avoir une ancre de rechange'
            ]
          },
          {
            text: 'Le poids de l\'ancre doit être proportionnel à la taille de votre bateau. Comptez environ 1 kg par mètre de bateau pour une ancre principale.'
          }
        ]
      },
      {
        title: 'Reconnaissance des fonds et choix du mouillage',
        description: 'Identifier les bons fonds et choisir l\'emplacement optimal',
        content: [
          {
            text: 'Le choix de l\'emplacement de mouillage est crucial. Un bon mouillage doit offrir protection, bonne tenue et facilité d\'accès.'
          },
          {
            type: 'info',
            list: [
              '🏖️ Fonds sableux : excellente tenue, facile à récupérer',
              '🪨 Fonds rocheux : bonne tenue mais risque de coincement',
              '🌿 Fonds d\'herbiers : tenue variable, difficile à récupérer',
              '🪨 Fonds vaseux : tenue moyenne, ancre peut s\'enfoncer',
              '🪨 Fonds de gravier : bonne tenue, facile à récupérer'
            ]
          },
          {
            type: 'warning',
            text: 'Évitez les zones de fort courant, les chenaux de navigation, et les zones interdites. Vérifiez toujours les cartes marines pour les restrictions.'
          }
        ]
      },
      {
        title: 'Calcul de la longueur de chaîne',
        description: 'Déterminer la longueur de chaîne nécessaire pour un mouillage sûr',
        content: [
          {
            text: 'La longueur de chaîne est cruciale pour la tenue de l\'ancre. Une chaîne trop courte peut faire chasser l\'ancre, une chaîne trop longue peut créer des problèmes.'
          },
          {
            type: 'tip',
            list: [
              '📏 Règle générale : 3 à 5 fois la profondeur d\'eau',
              '🌊 Par temps calme : 3 fois la profondeur minimum',
              '⛈️ Par gros temps : 5 à 7 fois la profondeur',
              '🌊 Avec houle : augmenter de 20% la longueur',
              '🌪️ Vent fort : doubler la longueur normale'
            ]
          },
          {
            text: 'La chaîne doit former un angle avec le fond pour que l\'ancre puisse bien mordre. Un angle trop vertical réduit l\'efficacité de l\'ancre.'
          }
        ]
      },
      {
        title: 'Techniques de mouillage',
        description: 'Procédures étape par étape pour un mouillage réussi',
        content: [
          {
            text: 'Un mouillage réussi nécessite une procédure rigoureuse et une coordination de l\'équipage. Voici les étapes essentielles.'
          },
          {
            type: 'info',
            list: [
              '📍 Repérage : identifier l\'emplacement sur la carte',
              '🌊 Approche : remonter au vent et au courant',
              '⏹️ Arrêt : stopper le bateau à l\'emplacement choisi',
              '⚓ Largage : laisser tomber l\'ancre progressivement',
              '🔗 Chaîne : filer la chaîne lentement et régulièrement'
            ]
          },
          {
            type: 'warning',
            text: 'Ne jamais larguer l\'ancre en marche arrière rapide. Cela peut endommager l\'ancre et réduire sa tenue.'
          }
        ]
      },
      {
        title: 'Vérification de la tenue de l\'ancre',
        description: 'S\'assurer que l\'ancre tient bien et surveiller le mouillage',
        content: [
          {
            text: 'Une fois l\'ancre larguée, il faut vérifier qu\'elle tient bien et surveiller constamment le mouillage.'
          },
          {
            type: 'tip',
            list: [
              '📍 Repérage : noter la position GPS de départ',
              '🧭 Alignement : utiliser des alignements à terre',
              '⏰ Surveillance : vérifier la position toutes les 30 minutes',
              '🌊 Test de tenue : tirer doucement sur l\'ancre',
              '📱 GPS : surveiller la dérive avec le GPS'
            ]
          },
          {
            text: 'Si l\'ancre chasse (glisse), récupérez-la immédiatement et essayez un autre emplacement. Ne jamais laisser un bateau dériver.'
          }
        ]
      },
      {
        title: 'Mouillage par gros temps',
        description: 'Techniques spéciales pour mouiller par mauvais temps',
        content: [
          {
            text: 'Le mouillage par gros temps nécessite des techniques spéciales et un équipement renforcé. La sécurité de l\'équipage est prioritaire.'
          },
          {
            type: 'warning',
            list: [
              '⚓ Double ancre : utiliser deux ancres en V ou en ligne',
              '🔗 Chaîne renforcée : utiliser une chaîne plus lourde',
              '🌊 Ancre de secours : toujours prête à être larguée',
              '👥 Veille : surveillance constante par l\'équipage',
              '📻 Radio : maintenir une veille radio constante'
            ]
          },
          {
            text: 'Par gros temps, n\'hésitez pas à mouiller dans un port ou une marina si possible. La sécurité prime sur l\'économie.'
          }
        ]
      },
      {
        title: 'Récupération de l\'ancre',
        description: 'Techniques pour récupérer l\'ancre sans l\'endommager',
        content: [
          {
            text: 'La récupération de l\'ancre doit être effectuée avec soin pour éviter de l\'endommager ou de la perdre.'
          },
          {
            type: 'tip',
            list: [
              '🚤 Approche : remonter lentement vers l\'ancre',
              '🔗 Chaîne : récupérer la chaîne progressivement',
              '⚓ Ancre : tirer verticalement pour décrocher l\'ancre',
              '🧽 Nettoyage : rincer l\'ancre à l\'eau douce',
              '📍 Stockage : ranger l\'ancre en position de sécurité'
            ]
          },
          {
            type: 'warning',
            text: 'Si l\'ancre est coincée, ne forcez jamais. Utilisez un orin (corde de récupération) ou demandez l\'aide d\'un plongeur.'
          }
        ]
      },
      {
        title: 'Entretien et maintenance de l\'ancre',
        description: 'Maintenir son ancre en bon état pour une tenue optimale',
        content: [
          {
            text: 'Un ancre bien entretenue tient mieux et dure plus longtemps. L\'entretien régulier est essentiel pour votre sécurité.'
          },
          {
            type: 'info',
            list: [
              '🧽 Nettoyage : rincer après chaque utilisation',
              '🔧 Vérification : contrôler l\'état des pattes et du jas',
              '⛽ Graissage : lubrifier les parties mobiles',
              '🔗 Chaîne : vérifier l\'état des maillons',
              '📝 Documentation : tenir un carnet d\'entretien'
            ]
          },
          {
            text: 'Remplacez l\'ancre si elle montre des signes de fatigue ou de corrosion. Une ancre défaillante peut vous mettre en danger.'
          }
        ]
      },
      {
        title: 'Erreurs courantes à éviter',
        description: 'Les pièges les plus fréquents dans les techniques de mouillage',
        content: [
          {
            text: 'Certaines erreurs de mouillage peuvent être dangereuses ou coûteuses. Voici les erreurs les plus courantes à éviter.'
          },
          {
            type: 'warning',
            list: [
              '❌ Chaîne trop courte : risque de chasse d\'ancre',
              '❌ Fond inadapté : ancre qui ne tient pas',
              '❌ Zone interdite : amendes et dangers',
              '❌ Récupération forcée : risque de perte d\'ancre',
              '❌ Négligence de surveillance : dérive du bateau'
            ]
          },
          {
            text: 'Apprenez de vos erreurs et de celles des autres. La navigation est un apprentissage continu qui demande de l\'humilité.'
          }
        ]
      },
      {
        title: 'Conclusion et bonnes pratiques',
        description: 'Récapitulatif des points essentiels pour un mouillage réussi',
        content: [
          {
            text: 'Maîtriser les techniques de mouillage est un art qui s\'apprend par la pratique. Un bon mouillage vous donne la liberté de naviguer en toute sécurité.'
          },
          {
            type: 'tip',
            list: [
              '🎯 Choisissez toujours le bon emplacement',
              '📏 Calculez correctement la longueur de chaîne',
              '👥 Coordonnez l\'équipage pour les manœuvres',
              '🌊 Adaptez-vous aux conditions météorologiques',
              '🔄 Pratiquez régulièrement les techniques'
            ]
          },
          {
            text: 'Le mouillage est une compétence essentielle qui vous accompagnera tout au long de votre vie de navigateur. Investissez du temps dans son apprentissage.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default MouillageTechniqueGuide
