// ! Interfaces
export interface IScrambleWordState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

export type TScrambleWordAction =
  | { type: 'SET_GUESS'; payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'I_DONT_KNOW_3' }
  | { type: 'I_DONT_KNOW_4' };

type TWords = string[];
const GAME_WORDS: TWords = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// ! Schemas

// ! Functions
// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): IScrambleWordState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);
  return {
    currentWord: shuffleWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffleWords[0]),
    skipCounter: 0,
    words: shuffleWords,
    totalWords: shuffleWords.length,
  };
};

// ! Reducer
export const scrambleWordReducer = (
  state: IScrambleWordState,
  action: TScrambleWordAction
): IScrambleWordState => {
  switch (action.type) {
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case 'CHECK_ANSWER': {
      const isCorrect = state.guess === state.currentWord;

      if (!isCorrect) {
        return {
          ...state,
          guess: '',
          errorCounter: state.errorCounter + 1,
          isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
        };
      }

      const newWords = state.words.slice(1);
      const nextWord = newWords[0];

      return {
        ...state,
        words: newWords,
        points: state.points + 1,
        guess: '',
        currentWord: nextWord,
        scrambledWord: scrambleWord(nextWord),
      };
    }

    default:
      return state;
  }
};
