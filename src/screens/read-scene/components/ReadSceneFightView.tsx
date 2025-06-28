import { AboveNavWrapper, ButtonNav, NavWrapper, ScreenWithNav } from '@ui'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneFightView = ({
  sceneText,
  onPressFight,
}: {
  sceneText: string
  onPressFight: () => void
}) => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <ReadSceneView>{sceneText}</ReadSceneView>
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav title="Combattre" onPress={onPressFight} />
    </NavWrapper>
  </ScreenWithNav>
)
