import { BackpackItems, ItemProps, SceneAction } from '@types'
import { AboveNavWrapper, NavWrapper, ScreenWithNav } from '@ui'
import { ItemsActionsView } from './ItemsActionsView'
import { ReadSceneActions } from './ReadSceneActions'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneNormalView = ({
  sceneText,
  items,
  onPressItem,
  actions,
  onPressAction,
}: {
  sceneText: string
  items: BackpackItems
  onPressItem: (item: ItemProps) => void
  actions: SceneAction[]
  onPressAction: (key: string) => void
}) => {
  return (
    <ScreenWithNav>
      <AboveNavWrapper>
        <ReadSceneView>{sceneText}</ReadSceneView>
      </AboveNavWrapper>
      <NavWrapper>
        <ItemsActionsView items={items} onPress={onPressItem} />
        <ReadSceneActions actions={actions} onPress={onPressAction} />
      </NavWrapper>
    </ScreenWithNav>
  )
}
