import { useGameStore } from '@core'
import { ReadIntroductionView } from './components/ReadIntroductionView'

export const ReadIntroduction = ({ forward }: { forward?: () => void }) => {
  const { book } = useGameStore()

  return (
    <ReadIntroductionView
      title={book?.introduction?.title ?? 'Error'}
      forward={forward}
    >
      {book?.introduction?.text}
    </ReadIntroductionView>
  )
}
