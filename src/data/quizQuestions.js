// Quiz questions for the symbols section
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    symbol: '⚓',
    question: 'Que représente ce symbole ?',
    options: ['Zone interdite', 'Mouillage', 'Épave', 'Port'],
    correctAnswer: 1,
    explanation: 'L\'ancre indique une zone de mouillage autorisée ou interdite selon le contexte.'
  },
  {
    id: 2,
    symbol: '🏮',
    question: 'Que représente ce symbole ?',
    options: ['Bouée', 'Phare', 'Balise', 'Port'],
    correctAnswer: 1,
    explanation: 'Le phare est une structure fixe émettant une lumière pour la navigation.'
  },
  {
    id: 3,
    symbol: '🔵',
    question: 'Que représente ce symbole ?',
    options: ['Phare', 'Bouée', 'Balise', 'Danger'],
    correctAnswer: 1,
    explanation: 'La bouée est une aide flottante à la navigation, généralement cylindrique.'
  },
  {
    id: 4,
    symbol: '⚠️',
    question: 'Que représente ce symbole ?',
    options: ['Attention', 'Zone interdite', 'Danger', 'Toutes les réponses'],
    correctAnswer: 3,
    explanation: 'Ce symbole peut indiquer une zone interdite, un danger ou nécessiter une attention particulière.'
  },
  {
    id: 5,
    symbol: '🟢',
    question: 'Que représente ce symbole ?',
    options: ['Mouillage', 'Port', 'Zone de pêche', 'Réserve naturelle'],
    correctAnswer: 1,
    explanation: 'Le vert indique généralement une zone portuaire avec installations d\'accueil.'
  },
  {
    id: 6,
    symbol: '🔺',
    question: 'Que représente ce symbole ?',
    options: ['Phare', 'Danger isolé', 'Bouée', 'Port'],
    correctAnswer: 1,
    explanation: 'Le triangle indique un obstacle isolé présentant un danger pour la navigation.'
  },
  {
    id: 7,
    symbol: '🔻',
    question: 'Que représente ce symbole ?',
    options: ['Mouillage', 'Épave', 'Port', 'Bouée'],
    correctAnswer: 1,
    explanation: 'Le triangle inversé indique les restes d\'un navire coulé.'
  },
  {
    id: 8,
    symbol: '🟡',
    question: 'Que représente ce symbole ?',
    options: ['Bouée latérale', 'Bouée cardinale', 'Phare', 'Port'],
    correctAnswer: 1,
    explanation: 'Le jaune indique généralement une bouée cardinale indiquant la direction du danger.'
  },
  {
    id: 9,
    symbol: '🚫',
    question: 'Que représente ce symbole ?',
    options: ['Zone de pêche', 'Zone interdite', 'Port', 'Mouillage'],
    correctAnswer: 1,
    explanation: 'Ce symbole indique une zone où la navigation est interdite.'
  },
  {
    id: 10,
    symbol: '🏞️',
    question: 'Que représente ce symbole ?',
    options: ['Zone de pêche', 'Parc marin', 'Port', 'Mouillage'],
    correctAnswer: 1,
    explanation: 'Ce symbole indique une zone protégée pour la conservation marine.'
  }
];

export const QUIZ_RESULTS = {
  excellent: {
    minScore: 9,
    title: '🏆 Expert en symboles maritimes !',
    message: 'Bravo ! Vous maîtrisez parfaitement les symboles des cartes marines. Vous êtes prêt pour toutes les navigations !',
    color: 'text-maritime-emerald',
    bgColor: 'bg-maritime-emerald/20'
  },
  good: {
    minScore: 7,
    title: '👍 Très bon niveau !',
    message: 'Excellent ! Vous connaissez bien les symboles essentiels. Quelques révisions et vous serez parfait !',
    color: 'text-maritime-azure',
    bgColor: 'bg-maritime-azure/20'
  },
  average: {
    minScore: 5,
    title: '📚 Bon début !',
    message: 'Pas mal ! Vous avez les bases. Continuez à apprendre avec nos guides pour progresser.',
    color: 'text-maritime-coral',
    bgColor: 'bg-maritime-coral/20'
  },
  poor: {
    minScore: 0,
    title: '🌊 Continuez à apprendre !',
    message: 'Ne vous découragez pas ! La navigation s\'apprend. Consultez nos guides et recommencez le quiz.',
    color: 'text-maritime-slate',
    bgColor: 'bg-maritime-slate/20'
  }
};

export const getQuizResult = (score) => {
  if (score >= QUIZ_RESULTS.excellent.minScore) return QUIZ_RESULTS.excellent;
  if (score >= QUIZ_RESULTS.good.minScore) return QUIZ_RESULTS.good;
  if (score >= QUIZ_RESULTS.average.minScore) return QUIZ_RESULTS.average;
  return QUIZ_RESULTS.poor;
};
