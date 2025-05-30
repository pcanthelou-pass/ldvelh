import { GameSlice, useGameStore } from '@core'
import { useEffect } from 'react'
import { TEST_BOOK } from './TEST_BOOK'
import { TEST_HERO } from './TEST_HERO'
import { WrapperTest } from './WrapperTest'

type StartStoreCallback = (store: GameSlice) => void

const WrapperTestPlusStore = ({
  runOnStart,
  children,
}: {
  runOnStart?: StartStoreCallback
  children: React.ReactNode
}) => {
  const store = useGameStore()
  const { setBook, setCharacter } = store

  useEffect(() => {
    store.setBook(TEST_BOOK)
    store.setCharacter(TEST_HERO)

    if (runOnStart) {
      runOnStart(store)
    }
  }, [setBook, setCharacter, runOnStart])

  return children
}

export const WrapperTestExt = ({
  children,
  runOnStart,
}: {
  runOnStart?: StartStoreCallback
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
