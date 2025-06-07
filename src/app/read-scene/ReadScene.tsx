import { ItemProps, useReadScene } from '@core'
import { useGoToChooseStory } from '@navigation'
import { useBuildSceneByPredicate } from './BuildSceneByPredicate'

export const ReadScene = ({
  onPressActionExt,
  onPressItemExt,
  onPressQuitExt,
}: {
  onPressActionExt?: (key: string) => void
  onPressItemExt?: (item: ItemProps) => void
  onPressQuitExt?: () => void
}) => {
  const { actionItem, moveToScene, quitGame } = useReadScene()
  const router = useGoToChooseStory()

  const onPressAction = (key: string) => {
    moveToScene(key)
    onPressActionExt?.(key)
  }

  const onPressItem = (item: ItemProps) => {
    actionItem(item)
    onPressItemExt?.(item)
  }

  const onPressQuit = () => {
    quitGame()
    onPressQuitExt?.()
    router()
  }

  const render = useBuildSceneByPredicate(
    onPressQuit,
    onPressItem,
    onPressAction,
  )

  return render()
}
