import { useGoToChooseStory } from '@navigation'
import { useDieScene } from '../../core/hooks/useDieScene'
import { DieSceneView } from './components/DieSceneView'

const DieScene = () => {
  const { title, text } = useDieScene()
  const home = useGoToChooseStory()

  const onPressQuit = () => {
    home()
  }

  return (
    <DieSceneView title={title} onPress={onPressQuit}>
      {text}
    </DieSceneView>
  )
}

export default DieScene
