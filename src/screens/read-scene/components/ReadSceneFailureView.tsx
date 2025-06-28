import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  ScreenWithNav,
  Title,
} from '@ui'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneFailureView = ({
  sceneText,
  onPressQuit,
}: {
  sceneText: string
  onPressQuit: () => void
}) => {
  return (
    <ScreenWithNav>
      <AboveNavWrapper>
        <Title>Vous avez échoué.</Title>
        <ReadSceneView>{sceneText}</ReadSceneView>
      </AboveNavWrapper>
      <NavWrapper>
        <ButtonNav title="Quitter" onPress={onPressQuit} />
      </NavWrapper>
    </ScreenWithNav>
  )
}
