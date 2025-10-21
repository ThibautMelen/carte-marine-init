// Geographic zones data for the zones section
export const ZONES = [
  {
    id: 'bretagne',
    title: 'Cartes marines Bretagne : de Saint-Malo au Morbihan',
    coordinates: [48.390394, -4.486076],
    stats: {
      ports: 250,
      moorings: 180,
      feature: 'Marées amplitude 12m'
    },
    description: 'La Bretagne offre une navigation exceptionnelle avec ses côtes découpées, ses nombreux mouillages abrités et ses ports historiques. Attention aux marées parmi les plus importantes d\'Europe (jusqu\'à 12m d\'amplitude). Les îles d\'Ouessant, Molène et Sein offrent des navigations techniques mais gratifiantes.',
    mapLink: '#carte-interactive?zone=bretagne',
    image: '/assets/zones/optimized/zone-bretagne-cote-granit-rose.jpg',
    alt: 'Côte bretonne dramatique avec rochers de granit rose et eaux turquoise, carte marine en overlay montrant les zones de navigation',
  },
  {
    id: 'mediterranee',
    title: 'Navigation en Méditerranée : cartes de Marseille à la Corse',
    coordinates: [43.296482, 5.369780],
    stats: {
      ports: 180,
      moorings: 120,
      feature: 'Météo estivale stable'
    },
    description: 'Navigation idéale pour débutants avec peu de marée, météo prévisible l\'été, et nombreux ports modernes. La Côte d\'Azur et la Corse offrent des paysages exceptionnels et eaux cristallines. Attention au mistral en hiver et aux zones de trafic maritime intense.',
    mapLink: '#carte-interactive?zone=mediterranee',
    image: '/assets/zones/optimized/zone-mediterranee-cote-azur.jpg',
    alt: 'Côte méditerranéenne française avec calanques de Cassis et eaux cristallines, carte marine en overlay des routes de navigation',
  },
  {
    id: 'atlantique',
    title: 'Côte Atlantique : cartes de La Rochelle à Arcachon',
    coordinates: [46.160329, -1.151139],
    stats: {
      ports: 140,
      moorings: 100,
      feature: 'Houle océanique'
    },
    description: 'De La Rochelle au Bassin d\'Arcachon, la côte atlantique combine navigation océanique et mouillages abrités. Attention aux bancs de sable mouvants et à la houle. Les îles de Ré et d\'Oléron offrent des navigations côtières variées.',
    mapLink: '#carte-interactive?zone=atlantique',
    image: '/assets/zones/optimized/zone-atlantique-la-rochelle-arcachon.jpg',
    alt: 'Côte atlantique française de La Rochelle à Arcachon avec Fort Boyard, carte marine en overlay des zones de navigation',
  },
  {
    id: 'manche',
    title: 'Cartes de la Manche : naviguer de Dunkerque à Cherbourg',
    coordinates: [49.633730, -1.616243],
    stats: {
      ports: 160,
      moorings: 90,
      feature: 'Trafic maritime dense'
    },
    description: 'Zone exigeante avec trafic maritime intense, courants forts et météo changeante. Traversée vers Angleterre populaire. Navigation technique mais gratifiante. Les ports du Havre et de Cherbourg sont des points d\'escale majeurs.',
    mapLink: '#carte-interactive?zone=manche',
    image: '/assets/zones/optimized/zone-manche-dunkerque-cherbourg.jpg',
    alt: 'Manche avec trafic maritime dense de Dunkerque à Cherbourg, carte marine en overlay des routes de navigation',
  },
  {
    id: 'corse',
    title: 'Cartes marines Corse : le joyau de la Méditerranée',
    coordinates: [42.039604, 9.012893],
    stats: {
      ports: 50,
      moorings: 80,
      feature: 'Réserves naturelles'
    },
    description: 'Île de beauté aux eaux transparentes, réserves naturelles protégées et mouillages paradisiaques. Navigation facile mais attention au mistral en hiver. Les calanques de Bonifacio et les îles Lavezzi offrent des paysages exceptionnels.',
    mapLink: '#carte-interactive?zone=corse',
    image: '/assets/zones/optimized/zone-corse-bonifacio.jpg',
    alt: 'Côte corse avec calanques de Bonifacio et eaux cristallines, carte marine en overlay des zones protégées',
  },
  {
    id: 'domtom',
    title: 'Cartes marines d\'outre-mer : Antilles, Réunion, Polynésie',
    coordinates: [14.641528, -61.024174],
    stats: {
      ports: 120,
      moorings: 200,
      feature: 'Navigation tropicale'
    },
    description: 'Navigation paradisiaque dans les eaux turquoises des Caraïbes, de l\'Océan Indien et du Pacifique. Attention aux cyclones en saison (juin-novembre). Les lagons polynésiens et les récifs coralliens offrent des navigations uniques au monde.',
    mapLink: '#carte-interactive?zone=domtom',
    image: '/assets/zones/optimized/zone-dom-tom-lagons-tropicaux.jpg',
    alt: 'Lagons tropiques français des DOM-TOM avec récifs coralliens, carte marine en overlay des zones de navigation',
  }
];

export const ZONE_COORDINATES = {
  bretagne: [48.390394, -4.486076],
  mediterranee: [43.296482, 5.369780],
  atlantique: [46.160329, -1.151139],
  manche: [49.633730, -1.616243],
  corse: [42.039604, 9.012893],
  domtom: [14.641528, -61.024174]
};
