import { useGameStore, GAME_STORE } from '@hooks'
import { GameState } from '@types'
import { useEffect } from 'react'
import { TEST_BOOK } from './TEST_BOOK'
import { TEST_HERO } from './TEST_HERO'
import { WrapperTest } from './WrapperTest'

export type RunOnStartType = (store: GameState) => void

const WrapperTestPlusStore = ({
  runOnStart,
  children,
}: {
  runOnStart?: RunOnStartType
  children: React.ReactNode
}) => {
  const setBook = useGameStore((state) => state.setBook)
  const setCharacter = useGameStore((state) => state.setCharacter)

  useEffect(() => {
    setBook({ id: 'TEST_BOOK', intro: TEST_BOOK.introduction })
    setCharacter(TEST_HERO)

    if (runOnStart) {
      // Provide a proxy around the store state so callbacks can both
      // read and mutate the latest store values even after updates.
      const proxy = new Proxy({} as GameState, {
        get: (_t, prop) => (GAME_STORE.getState() as any)[prop as keyof GameState],
        set: (_t, prop, value) => {
          GAME_STORE.setState((s) => {
            ;(s as any)[prop as keyof GameState] = value
          })
          return true
        },
      })
      runOnStart(proxy)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBook, setCharacter, runOnStart])

  return children
}

export const WrapperTestExt = ({
  children,
  runOnStart,
}: {
  runOnStart?: RunOnStartType
  children: React.ReactNode
}) => {
  return (
    <WrapperTest>
      <WrapperTestPlusStore runOnStart={runOnStart}>
        {children}
      </WrapperTestPlusStore>
    </WrapperTest>
  )
}
