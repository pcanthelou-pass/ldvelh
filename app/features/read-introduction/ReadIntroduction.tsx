import { useReadIntroduction } from '@core'
import { ReadIntroductionView } from './components/ReadIntroductionView'

export const ReadIntroduction = ({ forward }: { forward?: () => void }) => {
  const { title, introduction } = useReadIntroduction()

  return (
    <ReadIntroductionView title={title} forward={forward}>
      {introduction}
    </ReadIntroductionView>
  )
}
