// Maritime symbols data for the symbols glossary
export const SYMBOLS = [
  // Navigation symbols
  { icon: '⚓', name: 'Ancre', description: 'Zone de mouillage autorisée ou interdite selon le contexte', category: 'Navigation' },
  { icon: '🏮', name: 'Phare', description: 'Structure fixe émettant une lumière pour la navigation', category: 'Navigation' },
  { icon: '🔵', name: 'Bouée', description: 'Aide flottante à la navigation, généralement cylindrique', category: 'Navigation' },
  { icon: '🔴', name: 'Balise', description: 'Aide fixe à la navigation, souvent sur une structure', category: 'Navigation' },
  { icon: '🟡', name: 'Cardinal', description: 'Bouée cardinale indiquant la direction du danger', category: 'Navigation' },
  { icon: '⚪', name: 'Latéral', description: 'Bouée latérale marquant le côté tribord ou bâbord', category: 'Navigation' },
  { icon: '🟢', name: 'Port', description: 'Zone portuaire avec installations d\'accueil', category: 'Navigation' },
  { icon: '🟠', name: 'Mouillage', description: 'Zone où les navires peuvent jeter l\'ancre', category: 'Navigation' },
  { icon: '🔺', name: 'Danger isolé', description: 'Obstacle isolé présentant un danger', category: 'Navigation' },
  { icon: '🔻', name: 'Épave', description: 'Restes d\'un navire coulé', category: 'Navigation' },
  
  // Bathymetry symbols
  { icon: '〰️', name: 'Ligne de sonde', description: 'Ligne reliant des points de même profondeur', category: 'Bathymétrie' },
  { icon: '📏', name: 'Sonde', description: 'Profondeur de l\'eau en mètres', category: 'Bathymétrie' },
  { icon: '🌊', name: 'Zone de marée', description: 'Zone où les marées sont importantes', category: 'Bathymétrie' },
  { icon: '🏔️', name: 'Haut-fond', description: 'Zone peu profonde dangereuse pour la navigation', category: 'Bathymétrie' },
  { icon: '🏝️', name: 'Île', description: 'Terre entourée d\'eau', category: 'Bathymétrie' },
  { icon: '🏖️', name: 'Plage', description: 'Zone côtière de sable ou de galets', category: 'Bathymétrie' },
  { icon: '🪨', name: 'Rocher', description: 'Formation rocheuse sous-marine ou émergée', category: 'Bathymétrie' },
  { icon: '🌊', name: 'Récif', description: 'Formation rocheuse ou corallienne sous-marine', category: 'Bathymétrie' },
  
  // Danger symbols
  { icon: '⚠️', name: 'Zone interdite', description: 'Zone où la navigation est interdite', category: 'Dangers' },
  { icon: '🚫', name: 'Zone militaire', description: 'Zone réservée aux activités militaires', category: 'Dangers' },
  { icon: '☢️', name: 'Zone dangereuse', description: 'Zone présentant des dangers particuliers', category: 'Dangers' },
  { icon: '💥', name: 'Explosifs', description: 'Zone de dépôt ou de manutention d\'explosifs', category: 'Dangers' },
  { icon: '🛢️', name: 'Pipeline', description: 'Conduite sous-marine transportant des fluides', category: 'Dangers' },
  { icon: '⚡', name: 'Câble sous-marin', description: 'Câble électrique ou de communication sous-marin', category: 'Dangers' },
  { icon: '🌊', name: 'Zone de courant', description: 'Zone avec des courants marins importants', category: 'Dangers' },
  { icon: '🌪️', name: 'Zone de tempête', description: 'Zone fréquemment exposée aux tempêtes', category: 'Dangers' },
  
  // Zone symbols
  { icon: '🏞️', name: 'Parc marin', description: 'Zone protégée pour la conservation marine', category: 'Zones' },
  { icon: '🐠', name: 'Réserve naturelle', description: 'Zone protégée pour la faune et flore marines', category: 'Zones' },
  { icon: '🎣', name: 'Zone de pêche', description: 'Zone autorisée pour la pêche commerciale ou de loisir', category: 'Zones' },
  { icon: '🏊', name: 'Zone de baignade', description: 'Zone dédiée aux activités de baignade', category: 'Zones' },
  { icon: '⛵', name: 'Zone de voile', description: 'Zone réservée aux activités de voile', category: 'Zones' },
  { icon: '🏄', name: 'Zone de surf', description: 'Zone populaire pour le surf', category: 'Zones' },
  { icon: '🤿', name: 'Zone de plongée', description: 'Zone recommandée pour la plongée sous-marine', category: 'Zones' },
  { icon: '🚁', name: 'Héliport', description: 'Zone d\'atterrissage pour hélicoptères', category: 'Zones' },
  { icon: '✈️', name: 'Aérodrome', description: 'Zone d\'atterrissage pour avions', category: 'Zones' },
  { icon: '📡', name: 'Station météo', description: 'Station de mesure météorologique', category: 'Zones' },
  { icon: '📻', name: 'Station radio', description: 'Station de communication radio maritime', category: 'Zones' },
  { icon: '🏭', name: 'Installation industrielle', description: 'Zone industrielle côtière', category: 'Zones' }
];

export const SYMBOL_CATEGORIES = [
  'Navigation',
  'Bathymétrie', 
  'Dangers',
  'Zones'
];
