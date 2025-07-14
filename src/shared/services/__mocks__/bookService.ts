export const listBooks = jest.fn(async () => [
  {
    name: 'Les mésaventures de Grok, gobelin maladroit',
    text:
      'Un jeune gobelin voleur tente désespérément de rejoindre son père perdu dans la forêt sauvage.',
    reference: 0,
  },
  {
    name: 'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis',
    text:
      'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore.',
    reference: 1,
  },
])
export const getBook = jest.fn(async (id: string) => ({
  title: 'Test Book',
  description: 'desc',
  introduction: { title: 'intro', text: 'text' },
  scenes: {},
}))
export const getScenes = jest.fn(async (id: string) => ({}))
export const getIntroduction = jest.fn(async (id: string) => ({
  title: 'intro',
  text: 'text',
}))
