import { createGameStore } from './game'
import { createUserStore } from './user'

export const createStores = () => ({
  game: createGameStore(),
  user: createUserStore(),
})

export type StoresProps = ReturnType<typeof createStores>
