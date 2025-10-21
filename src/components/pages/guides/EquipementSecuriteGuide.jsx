import GuidePage from '../GuidePage'

const EquipementSecuriteGuide = ({ onBack }) => {
  const guide = {
    id: 'equipement-securite',
    title: 'Équipement de sécurité : checklist obligatoire et recommandée',
    excerpt: 'Tout l\'équipement de sécurité obligatoire et recommandé pour la navigation. VFI, fusées, radio : la liste complète avec conseils d\'achat.',
    thumbnail: '/assets/guides/optimized/guide-equipement.jpg',
    alt: 'Équipement de sécurité maritime : gilets de sauvetage, fusées, radio VHF',
    readTime: '11 min',
    difficulty: '🟢 Débutant',
    category: 'Sécurité',
    views: 7200,
    sections: [
      {
        title: 'Introduction à l\'équipement de sécurité',
        description: 'Comprendre l\'importance de l\'équipement de sécurité en navigation',
        content: [
          {
            text: 'L\'équipement de sécurité n\'est pas une option, c\'est une nécessité absolue. Il peut faire la différence entre un incident mineur et une tragédie. Chaque pièce d\'équipement a un rôle spécifique dans votre sécurité.'
          },
          {
            type: 'warning',
            text: 'En mer, les secours peuvent mettre plusieurs heures à arriver. Votre équipement de sécurité est votre première ligne de défense contre les dangers maritimes.'
          },
          {
            text: 'Ce guide vous présente l\'équipement obligatoire selon la réglementation française, ainsi que l\'équipement recommandé pour une sécurité optimale.'
          }
        ]
      },
      {
        title: 'Équipement obligatoire selon la réglementation',
        description: 'L\'équipement de sécurité imposé par la loi française',
        content: [
          {
            text: 'La réglementation française impose un équipement de sécurité minimum selon la zone de navigation et la taille du bateau. Cet équipement est contrôlé par les autorités maritimes.'
          },
          {
            type: 'info',
            list: [
              '🦺 Gilets de sauvetage (VFI) : 1 par personne à bord',
              '🚨 Fusées de détresse : 6 fusées à main minimum',
              '📻 Radio VHF : obligatoire au-delà de 6 milles',
              '🚑 Trousse de secours : matériel de premiers soins',
              '🔦 Feux de navigation : conformes à la réglementation'
            ]
          },
          {
            type: 'warning',
            text: 'L\'absence d\'équipement obligatoire peut entraîner des amendes importantes et l\'interdiction de naviguer. Vérifiez votre équipement avant chaque sortie.'
          }
        ]
      },
      {
        title: 'Gilets de sauvetage (VFI) : guide complet',
        description: 'Choisir et utiliser correctement les gilets de sauvetage',
        content: [
          {
            text: 'Le gilet de sauvetage est l\'équipement le plus important. Il doit être adapté à votre taille, en bon état, et facilement accessible.'
          },
          {
            type: 'tip',
            list: [
              '📏 Taille : doit s\'ajuster parfaitement à votre morphologie',
              '🎨 Couleur : orange ou jaune pour la visibilité',
              '💡 Éclairage : sifflet et lumière intégrés recommandés',
              '🔧 Entretien : vérifiez régulièrement l\'état des sangles',
              '📍 Accessibilité : doit être accessible en moins de 10 secondes'
            ]
          },
          {
            text: 'Testez votre gilet en piscine ou en eau calme. Un gilet mal ajusté peut se retourner et vous noyer au lieu de vous sauver.'
          }
        ]
      },
      {
        title: 'Signaux de détresse et communication',
        description: 'Fusées, radio VHF et autres moyens de communication d\'urgence',
        content: [
          {
            text: 'En cas d\'urgence, vous devez pouvoir alerter les secours rapidement et efficacement. Plusieurs moyens de communication sont disponibles.'
          },
          {
            type: 'info',
            list: [
              '🚨 Fusées à main : visibilité jusqu\'à 10 km',
              '💥 Fusées parachute : visibilité jusqu\'à 40 km',
              '📻 Radio VHF : communication directe avec les secours',
              '📱 Téléphone satellite : couverture mondiale',
              '🆘 Balise de détresse : localisation automatique'
            ]
          },
          {
            type: 'warning',
            text: 'Les fusées ont une date de péremption. Vérifiez régulièrement et remplacez-les avant expiration. Des fusées périmées peuvent ne pas fonctionner.'
          }
        ]
      },
      {
        title: 'Équipement de navigation et éclairage',
        description: 'Feux de navigation, compas et instruments de navigation',
        content: [
          {
            text: 'L\'équipement de navigation est essentiel pour votre sécurité et celle des autres navigateurs. Il vous permet d\'être vu et de naviguer en sécurité.'
          },
          {
            type: 'tip',
            list: [
              '🔴 Feu bâbord : rouge, côté gauche du bateau',
              '🟢 Feu tribord : vert, côté droit du bateau',
              '⚪ Feu de poupe : blanc, arrière du bateau',
              '🧭 Compas magnétique : navigation de base',
              '📡 GPS : position et navigation précise'
            ]
          },
          {
            text: 'Les feux de navigation doivent être visibles à la distance réglementaire. Vérifiez leur fonctionnement avant chaque sortie nocturne.'
          }
        ]
      },
      {
        title: 'Équipement de secours et premiers soins',
        description: 'Trousse de secours, matériel de sauvetage et équipement médical',
        content: [
          {
            text: 'Une trousse de secours bien équipée peut sauver des vies. Elle doit contenir le matériel nécessaire pour traiter les blessures les plus courantes en mer.'
          },
          {
            type: 'info',
            list: [
              '🩹 Trousse de secours : pansements, antiseptiques, médicaments',
              '🆘 Bouée de sauvetage : pour récupérer une personne à la mer',
              '🪜 Échelle de corde : pour remonter à bord',
              '⛑️ Casque de sécurité : protection contre les chocs',
              '🧤 Gants de protection : manipulation d\'équipement'
            ]
          },
          {
            text: 'Formez-vous aux premiers secours. En mer, vous êtes souvent le seul secours disponible pour votre équipage.'
          }
        ]
      },
      {
        title: 'Équipement recommandé pour la sécurité',
        description: 'Équipement non obligatoire mais fortement recommandé',
        content: [
          {
            text: 'Au-delà de l\'équipement obligatoire, certains équipements peuvent considérablement améliorer votre sécurité en navigation.'
          },
          {
            type: 'tip',
            list: [
              '🛟 Radeau de sauvetage : abri en cas d\'abandon de navire',
              '🌡️ Vêtements de protection : combinaisons, bottes',
              '🔋 Batteries de secours : alimentation d\'urgence',
              '📱 Téléphone étanche : communication de secours',
              '🗺️ Cartes marines papier : secours en cas de panne électronique'
            ]
          },
          {
            text: 'Investissez dans un équipement de qualité. En mer, la fiabilité de votre équipement peut faire la différence entre la vie et la mort.'
          }
        ]
      },
      {
        title: 'Entretien et vérification de l\'équipement',
        description: 'Maintenir son équipement de sécurité en bon état',
        content: [
          {
            text: 'Un équipement de sécurité mal entretenu peut ne pas fonctionner quand vous en avez le plus besoin. L\'entretien régulier est crucial.'
          },
          {
            type: 'info',
            list: [
              '📅 Vérification mensuelle : état général de l\'équipement',
              '🔋 Batteries : remplacement avant expiration',
              '🧽 Nettoyage : élimination du sel et de l\'humidité',
              '🧪 Tests : vérification du fonctionnement',
              '📝 Documentation : tenue d\'un carnet d\'entretien'
            ]
          },
          {
            type: 'warning',
            text: 'L\'humidité et le sel corrodent rapidement l\'équipement électronique. Stockez-le dans un endroit sec et aéré.'
          }
        ]
      },
      {
        title: 'Formation et utilisation de l\'équipement',
        description: 'Apprendre à utiliser correctement son équipement de sécurité',
        content: [
          {
            text: 'Posséder l\'équipement ne suffit pas ; il faut savoir l\'utiliser correctement. Une formation appropriée est essentielle.'
          },
          {
            type: 'tip',
            list: [
              '🎓 Formation aux premiers secours : gestes qui sauvent',
              '📻 Utilisation de la radio VHF : procédures d\'urgence',
              '🚨 Signaux de détresse : codes et procédures',
              '🦺 Test des gilets : en eau calme et en conditions réelles',
              '🔄 Exercices réguliers : simulation d\'urgences'
            ]
          },
          {
            text: 'Organisez des exercices d\'urgence avec votre équipage. En situation réelle, le stress peut vous faire oublier les procédures.'
          }
        ]
      },
      {
        title: 'Budget et conseils d\'achat',
        description: 'Optimiser son budget sécurité et choisir le bon équipement',
        content: [
          {
            text: 'L\'équipement de sécurité représente un investissement important, mais c\'est un investissement dans votre vie. Voici comment optimiser votre budget.'
          },
          {
            type: 'info',
            list: [
              '💰 Priorisez l\'équipement obligatoire en premier',
              '🛒 Achetez progressivement l\'équipement recommandé',
              '🏷️ Comparez les prix et la qualité des marques',
              '🔄 Achetez d\'occasion pour l\'équipement non-périssable',
              '📦 Regroupez vos achats pour bénéficier de remises'
            ]
          },
          {
            text: 'Ne lésinez pas sur la qualité de l\'équipement de sécurité. Un équipement bon marché peut ne pas fonctionner quand vous en avez besoin.'
          }
        ]
      },
      {
        title: 'Conclusion et checklist finale',
        description: 'Récapitulatif et checklist complète de l\'équipement de sécurité',
        content: [
          {
            text: 'L\'équipement de sécurité est votre assurance vie en mer. Un équipement complet et bien entretenu vous donne la confiance nécessaire pour naviguer en sécurité.'
          },
          {
            type: 'tip',
            list: [
              '✅ Vérifiez votre équipement avant chaque sortie',
              '📚 Formez-vous régulièrement aux techniques de sécurité',
              '🔄 Entretenez votre équipement selon les recommandations',
              '👥 Informez votre équipage de l\'emplacement de l\'équipement',
              '📞 Gardez les numéros d\'urgence à portée de main'
            ]
          },
          {
            text: 'La sécurité en mer commence par la préparation. Un équipement de sécurité complet et une formation appropriée sont les fondations d\'une navigation sécurisée.'
          }
        ]
      }
    ]
  }

  return <GuidePage guide={guide} onBack={onBack} />
}

export default EquipementSecuriteGuide
