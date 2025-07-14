export const listBooks = jest.fn(async () => [
  { id: 'test-book', title: 'Test Book', description: 'desc' },
])
export const getBook = jest.fn(async (id: string) => ({
  title: 'Test Book',
  description: 'desc',
  introduction: { title: 'intro', text: 'text' },
  scenes: {},
}))
export const getScenes = jest.fn(async (id: string) => ({}))
export const getIntroduction = jest.fn(async (id: string) => ({ title: 'intro', text: 'text' }))
