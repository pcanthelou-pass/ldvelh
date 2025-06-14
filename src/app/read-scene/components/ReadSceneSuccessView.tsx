import { AboveNavWrapper, NavWrapper, ScreenWithNav, Title } from '@ui'
import { Button } from 'react-native'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneSuccessView = ({
  sceneText,
  onPressQuit,
}: {
  sceneText: string
  onPressQuit: () => void
}) => {
  return (
    <ScreenWithNav>
      <AboveNavWrapper>
        <Title>Vous avez réussi !!!</Title>
        <ReadSceneView>{sceneText}</ReadSceneView>
      </AboveNavWrapper>
      <NavWrapper>
        <Button title="Quitter" onPress={onPressQuit} />
      </NavWrapper>
    </ScreenWithNav>
  )
}
