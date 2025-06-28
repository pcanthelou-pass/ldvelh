import { useGameStore } from '@hooks'
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
  const usegamestore = useGameStore((state) => state)
  const setBook = useGameStore((state) => state.setBook)
  const setCharacter = useGameStore((state) => state.setCharacter)

  useEffect(() => {
    setBook(TEST_BOOK)
    setCharacter(TEST_HERO)

    if (runOnStart) {
      runOnStart(usegamestore)
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
