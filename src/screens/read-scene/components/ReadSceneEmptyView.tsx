import { AboveNavWrapper, ScreenWithNav } from '@ui'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneEmptyView = () => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <ReadSceneView>Pas de scène !</ReadSceneView>
    </AboveNavWrapper>
  </ScreenWithNav>
)
