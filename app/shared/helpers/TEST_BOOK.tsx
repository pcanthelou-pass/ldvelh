import { Book } from '@core'

export const TEST_BOOK: Book = {
  title: 'Mon livre',
  description: 'Mon livre description',
  introduction: {
    title: 'Scène #1',
    text: 'Dolor fugiat eiusmod',
  },
  scenes: {
    '1': {
      question: 'Scène #1',
      text: 'Texte de la scène #1',
      next: {
        '1-1': {
          question: 'Scène #1-1',
          text: 'Texte de la scène #1 1',
          next: {
            '2-1': {
              question: 'Scène #2-1',
              text: 'Texte de la scène #2 1',
              next: {
                '3-1': {
                  question: 'Scène #3-1',
                  text: 'Texte de la scène #3 1',
                  next: 'end',
                },
                '3-2': {
                  question: 'Scène #3-2',
                  text: 'Texte de la scène #3 2',
                  next: 'end',
                },
                '3-3': {
                  question: 'Scène #3-3',
                  text: 'Texte de la scène #3 3',
                  next: 'end',
                },
              },
            },
            '2-2': {
              question: 'Scène #2-2',
              text: 'Texte de la scène #2 2',
              next: 'end-fail',
            },
          },
        },
        '1-2': {
          question: 'Scène #1-2',
          text: 'Texte de la scène #1 2',
          next: 'end-fail',
        },
      },
    },
  },
}
