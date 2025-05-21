import { useGameStore } from '@core'
import { ReadIntroductionView } from './components'

export const ReadIntroduction = ({ forward }: { forward?: () => void }) => {
  const { gameBook: book } = useGameStore()

  return (
    <ReadIntroductionView
      title={book?.introduction?.title ?? 'Error'}
      forward={forward}
    >
      {book?.introduction?.text}
    </ReadIntroductionView>
  )
}
