import { Question, Round } from '@/types';

export const rounds: Round[] = [
  {
    id: 1,
    name: 'Memory Lane',
    emoji: '🎮',
    description: 'Let\s see who remembers best...',
    questionCount: 4,
  },
  {
    id: 2,
    name: 'Favourites or Favorites',
    emoji: '❤️',
    description: 'Know your pookie\'s preferences!',
    questionCount: 4,
  },
  {
    id: 3,
    name: 'Mechozoevie Lore 🦕',
    emoji: '📖',
    description: 'Take a nice lil stroll into our story!',
    questionCount: 5,
  },
  {
    id: 4,
    name: 'The Big Question',
    emoji: '🏆',
    description: 'The big bad question at the end!',
    questionCount: 1,
  },
];

export const questions: Question[] = [
  // Round 1: Memory Game (IDs 1-4)
  {
    id: 1,
    question: 'Where did we meet?',
    roundId: 1,
    images: ['/images/questions/one.png', '/images/questions/two.png'],
  },
  {
    id: 2,
    question: 'Where was our first date?',
    roundId: 1,
    images: ['/images/questions/three.png', '/images/questions/four.png', '/images/questions/five.png'],
  },
  {
    id: 3,
    question: 'What\'s the first gift I gave you?',
    roundId: 1,
    images: ['/images/questions/six.png', '/images/questions/seven.png'],
  },
  {
    id: 4,
    question: 'What song reminds you of me?',
    roundId: 1,
    images: ['/images/questions/eight.png', '/images/questions/nine.png'],
  },

  // Round 2: Love & Hate (IDs 5-8)
  {
    id: 5,
    question: 'What is your baby\'s favourite food?',
    roundId: 2,
    images: ['/images/questions/ten.png', '/images/questions/eleven.png'],
  },
  {
    id: 6,
    question: 'Your pook\'s favourite snack?',
    roundId: 2,
    images: ['/images/questions/twelve.png', '/images/questions/one.png'],
  },
  {
    id: 7,
    question: 'Favourite thing they love to cook or bake?',
    roundId: 2,
    images: ['/images/questions/two.png', '/images/questions/three.png', '/images/questions/four.png'],
  },
  {
    id: 8,
    question: 'Favourite movie that they can watch over and over again?',
    roundId: 2,
    images: ['/images/questions/five.png', '/images/questions/six.png'],
  },

  // Round 3: Our Lore (IDs 9-13)
  {
    id: 9,
    question: 'What\'s their most overused phrase or something they say ALL the time?',
    roundId: 3,
    images: ['/images/questions/seven.png', '/images/questions/eight.png'],
  },
  {
    id: 10,
    question: 'Weirdest thing we\'ve done together?',
    roundId: 3,
    images: ['/images/questions/nine.png', '/images/questions/ten.png', '/images/questions/eleven.png'],
  },
  {
    id: 11,
    question: 'Our most chaotic moment?',
    roundId: 3,
    images: ['/images/questions/twelve.png', '/images/questions/one.png'],
  },
  {
    id: 12,
    question: 'What nickname do they like the most?',
    roundId: 3,
    images: ['/images/questions/two.png', '/images/questions/three.png'],
  },
  {
    id: 13,
    question: 'If we were invaded by shape shifting aliens what would you say to convince them it\'s you?',
    roundId: 3,
    images: ['/images/questions/four.png', '/images/questions/five.png', '/images/questions/six.png'],
  },

  // Round 4: The Big Question (ID 14)
  {
    id: 14,
    question: 'What\'s one thing you appreciate about each other right now?',
    roundId: 4,
    images: ['/images/questions/seven.png', '/images/questions/eight.png'],
  },
];

// Helper function to get round by ID
export const getRoundById = (roundId: number): Round | undefined => {
  return rounds.find(r => r.id === roundId);
};

// Helper function to get round for a question
export const getRoundForQuestion = (question: Question): Round | undefined => {
  return getRoundById(question.roundId);
};


