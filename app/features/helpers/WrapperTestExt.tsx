import { useGameStore } from '@core'
import { TEST_BOOK, TEST_HERO } from '@core/__tests__/useGameStore-test'
import { WrapperTest } from '@features/helpers/WrapperTest'
import { useEffect } from 'react'

const WrapperTestGameStore = ({ children }: { children: React.ReactNode }) => {
  const { setBook, setCharacter } = useGameStore()

  useEffect(() => {
    setBook(TEST_BOOK)
    setCharacter(TEST_HERO)
  }, [setBook, setCharacter])

  return children
}
export const WrapperTestExt = ({ children }: { children: React.ReactNode }) => {
  return (
    <WrapperTest>
      <WrapperTestGameStore>{children}</WrapperTestGameStore>
    </WrapperTest>
  )
}
