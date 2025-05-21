import { useGameStore } from '@core'
import { WrapperTest } from '@shared/helpers'
import { useEffect } from 'react'
import { TEST_BOOK } from './TEST_BOOK'
import { TEST_HERO } from './TEST_HERO'

const WrapperTestGameStore = ({ children }: { children: React.ReactNode }) => {
  const { setBook, setCharacter, startBook } = useGameStore()

  useEffect(() => {
    setBook(TEST_BOOK)
    setCharacter(TEST_HERO)
    startBook()
  }, [setBook, setCharacter, startBook])

  return children
}
export const WrapperTestExt = ({ children }: { children: React.ReactNode }) => {
  return (
    <WrapperTest>
      <WrapperTestGameStore>{children}</WrapperTestGameStore>
    </WrapperTest>
  )
}
