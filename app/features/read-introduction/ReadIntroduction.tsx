import { useGameStore } from '@core'
import { ReadIntroductionView } from './components/ReadIntroductionView'

export const ReadIntroduction = ({ forward }: { forward?: () => void }) => {
  const { book } = useGameStore()

  return (
    <ReadIntroductionView title={book.introduction.title}>
      {book.introduction.text}
    </ReadIntroductionView>
  )
}
