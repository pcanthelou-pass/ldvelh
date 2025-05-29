import { RawBookType } from '@core/classes/book-scene'

export const TEST_BOOK: RawBookType = {
  title: 'Mon livre',
  description: 'Mon livre description',
  introduction: {
    title: 'Mon livre introduction',
    text: 'Mon livre introduction description',
  },
  scenes: {
    '1': {
      id: '1',
      question: 'Scène #1',
      text: 'Texte de la scène #1',
      nextIds: ['1-1', '1-2', '1-3'],
    },
    '1-1': {
      id: '1-1',
      question: 'Scène #1-1',
      text: 'Texte de la scène #1 1',
      nextIds: ['2-1', '2-2'],
    },
    '1-2': {
      id: '1-2',
      question: 'Scène #1-2',
      text: 'Texte de la scène #1 2',
      nextIds: [],
      isEnding: true,
      endingType: 'failure',
    },
    '1-3': {
      id: '1-3',
      question: 'Scène #1-3',
      text: 'Texte de la scène après le combat',
      nextIds: ['2-1'],
      opponent: {
        description: 'Vous devez battre Toto',
        name: 'Monster',
        abilities: { agility: 8, endurance: 8, chance: 0 },
      },
    },
    '2-1': {
      id: '2-1',
      question: 'Scène #2-1',
      text: 'Texte de la scène #2 1',
      nextIds: ['3-1', '3-2', '3-3'],
    },
    '2-2': {
      id: '2-2',
      question: 'Scène #2-2',
      text: 'Texte de la scène #2 2',
      nextIds: [],
      isEnding: true,
      endingType: 'failure',
    },
    // scènes finales « success »
    '3-1': {
      id: '3-1',
      question: 'Scène #3-1',
      text: 'Texte de la scène #3 1',
      nextIds: [],
      isEnding: true,
      endingType: 'success',
    },
    '3-2': {
      id: '3-2',
      question: 'Scène #3-2',
      text: 'Texte de la scène #3 2',
      nextIds: [],
      isEnding: true,
      endingType: 'success',
    },
    '3-3': {
      id: '3-3',
      question: 'Scène #3-3',
      text: 'Texte de la scène #3 3',
      nextIds: [],
      isEnding: true,
      endingType: 'success',
    },
  },
}
