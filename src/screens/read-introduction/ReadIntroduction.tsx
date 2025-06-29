import { useReadIntroduction } from '@hooks'
import { useGoToFirstScene } from '../../navigation/useGoToFirstScene'
import { ReadIntroductionView } from './components/ReadIntroductionView'

const ReadIntroduction = () => {
  const { title, introduction, startBook } = useReadIntroduction()
  const route = useGoToFirstScene()

  const forward = () => {
    startBook()
    route()
  }

  return (
    <ReadIntroductionView title={title} forward={forward}>
      {introduction}
    </ReadIntroductionView>
  )
}
export default ReadIntroduction
