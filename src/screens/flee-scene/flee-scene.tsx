import { useFleeScene } from '@hooks'
import { useGoToAfterFlee } from '@navigation'
import { FleeView } from './components/FleeView'

const FleeScene = () => {
  const { name, endurance } = useFleeScene()
  const next = useGoToAfterFlee()

  const onPressNext = () => {
    next()
  }

  return (
    <FleeView name={name} endurance={endurance} onPressNext={onPressNext} />
  )
}

export default FleeScene
