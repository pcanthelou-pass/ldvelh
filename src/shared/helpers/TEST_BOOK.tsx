import { BookProps } from '@core'

export const TEST_BOOK: BookProps = {
  title:
    'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis',
  description:
    'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore.',
  introduction: {
    title: 'Mon livre introduction',
    text: 'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore. Veniam aliquip ipsum voluptate velit pariatur officia occaecat sit culpa. Sunt cupidatat in sit consequat in eu ea minim sunt do ex tempor voluptate officia. Commodo commodo reprehenderit laboris culpa adipisicing anim enim exercitation qui proident dolore. Veniam officia quis ut voluptate laborum exercitation voluptate. Mollit incididunt id ad magna pariatur qui aliquip aliquip velit velit veniam. Consectetur excepteur ullamco adipisicing deserunt exercitation officia irure adipisicing. Dolor dolore laboris elit do sunt nisi. Aliquip occaecat amet anim officia officia culpa in tempor pariatur mollit. Laboris dolore do ullamco aliqua ad commodo aliquip sint ad labore aliqua duis aliqua. Ex elit adipisicing anim cillum amet cillum irure voluptate amet. Elit fugiat nostrud consequat dolore dolor minim do. Amet laboris tempor anim aute adipisicing. Ullamco aliqua dolore aliquip dolore officia nisi reprehenderit sunt laborum tempor qui velit. Fugiat excepteur veniam consectetur tempor labore cupidatat ex et excepteur voluptate aute ad adipisicing do. Nisi qui qui amet non adipisicing aliqua mollit commodo Lorem laboris ad. Culpa fugiat amet in officia dolore exercitation nostrud fugiat nostrud mollit ea voluptate. Velit occaecat ullamco id culpa irure laborum nostrud elit Lorem do pariatur laboris duis. Ea duis laborum et proident nostrud sunt. Duis sit eiusmod aliquip duis excepteur officia qui esse esse minim commodo commodo laborum. Reprehenderit ex duis deserunt qui quis ad est. Aute aliquip ad ex est in nulla ex. Fugiat nulla proident irure nostrud. Fugiat nisi laboris reprehenderit sunt veniam nisi aute elit consequat cupidatat cillum. Enim dolore adipisicing do ea exercitation ea. Id deserunt magna esse veniam sit velit fugiat do. Dolor amet velit elit quis consectetur aliquip.',
  },
  scenes: {
    '1': {
      id: '1',
      question: 'Scène #1',
      text: 'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore. Veniam aliquip ipsum voluptate velit pariatur officia occaecat sit culpa. Sunt cupidatat in sit consequat in eu ea minim sunt do ex tempor voluptate officia. Commodo commodo reprehenderit laboris culpa adipisicing anim enim exercitation qui proident dolore. Veniam officia quis ut voluptate laborum exercitation voluptate. Mollit incididunt id ad magna pariatur qui aliquip aliquip velit velit veniam. Consectetur excepteur ullamco adipisicing deserunt exercitation officia irure adipisicing. Dolor dolore laboris elit do sunt nisi. Aliquip occaecat amet anim officia officia culpa in tempor pariatur mollit. Laboris dolore do ullamco aliqua ad commodo aliquip sint ad labore aliqua duis aliqua. Ex elit adipisicing anim cillum amet cillum irure voluptate amet. Elit fugiat nostrud consequat dolore dolor minim do. Amet laboris tempor anim aute adipisicing. Ullamco aliqua dolore aliquip dolore officia nisi reprehenderit sunt laborum tempor qui velit. Fugiat excepteur veniam consectetur tempor labore cupidatat ex et excepteur voluptate aute ad adipisicing do. Nisi qui qui amet non adipisicing aliqua mollit commodo Lorem laboris ad. Culpa fugiat amet in officia dolore exercitation nostrud fugiat nostrud mollit ea voluptate. Velit occaecat ullamco id culpa irure laborum nostrud elit Lorem do pariatur laboris duis. Ea duis laborum et proident nostrud sunt. Duis sit eiusmod aliquip duis excepteur officia qui esse esse minim commodo commodo laborum. Reprehenderit ex duis deserunt qui quis ad est. Aute aliquip ad ex est in nulla ex. Fugiat nulla proident irure nostrud. Fugiat nisi laboris reprehenderit sunt veniam nisi aute elit consequat cupidatat cillum. Enim dolore adipisicing do ea exercitation ea. Id deserunt magna esse veniam sit velit fugiat do. Dolor amet velit elit quis consectetur aliquip.',
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
      text: 'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore. Veniam aliquip ipsum voluptate velit pariatur officia occaecat sit culpa. Sunt cupidatat in sit consequat in eu ea minim sunt do ex tempor voluptate officia. Commodo commodo reprehenderit laboris culpa adipisicing anim enim exercitation qui proident dolore. Veniam officia quis ut voluptate laborum exercitation voluptate. Mollit incididunt id ad magna pariatur qui aliquip aliquip velit velit veniam. Consectetur excepteur ullamco adipisicing deserunt exercitation officia irure adipisicing. Dolor dolore laboris elit do sunt nisi. Aliquip occaecat amet anim officia officia culpa in tempor pariatur mollit. Laboris dolore do ullamco aliqua ad commodo aliquip sint ad labore aliqua duis aliqua. Ex elit adipisicing anim cillum amet cillum irure voluptate amet. Elit fugiat nostrud consequat dolore dolor minim do. Amet laboris tempor anim aute adipisicing. Ullamco aliqua dolore aliquip dolore officia nisi reprehenderit sunt laborum tempor qui velit. Fugiat excepteur veniam consectetur tempor labore cupidatat ex et excepteur voluptate aute ad adipisicing do. Nisi qui qui amet non adipisicing aliqua mollit commodo Lorem laboris ad. Culpa fugiat amet in officia dolore exercitation nostrud fugiat nostrud mollit ea voluptate. Velit occaecat ullamco id culpa irure laborum nostrud elit Lorem do pariatur laboris duis. Ea duis laborum et proident nostrud sunt. Duis sit eiusmod aliquip duis excepteur officia qui esse esse minim commodo commodo laborum. Reprehenderit ex duis deserunt qui quis ad est. Aute aliquip ad ex est in nulla ex. Fugiat nulla proident irure nostrud. Fugiat nisi laboris reprehenderit sunt veniam nisi aute elit consequat cupidatat cillum. Enim dolore adipisicing do ea exercitation ea. Id deserunt magna esse veniam sit velit fugiat do. Dolor amet velit elit quis consectetur aliquip.',
      nextIds: ['3-1', '3-2', '3-3'],
      opponent: {
        description: 'Vous devez battre le méga monstre show',
        name: 'Trop fort',
        abilities: { agility: 12, endurance: 24, chance: 12 },
      },
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
