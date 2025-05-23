import { useGameStore } from '@core'
import { GameSlice } from '@core/slices/game'
import { WrapperTest } from '@shared/helpers'
import { useEffect } from 'react'
import { TEST_BOOK } from './TEST_BOOK'
import { TEST_HERO } from './TEST_HERO'

type StartStoreCallback = (store: GameSlice) => void

const WrapperTestPlusStore = ({
  runOnStart,
  children,
}: {
  runOnStart?: StartStoreCallback
  children: React.ReactNode
}) => {
  const store = useGameStore()
  const { setBook, setCharacter, startBook } = store

  useEffect(() => {
    store.setBook(TEST_BOOK)
    store.setCharacter(TEST_HERO)
    store.startBook()

    if (runOnStart) {
      runOnStart(store)
    }
  }, [setBook, setCharacter, startBook, runOnStart])

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
