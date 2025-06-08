import { ItemProps, useCharacterStats, useReadScene } from '@core'
import { useGoToChooseStory } from '@navigation'
import { View } from 'react-native'
import { useBuildSceneByPredicate } from './BuildSceneByPredicate'
import { CharacterView } from './components/CharacterView'

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
  const { name, agility, endurance, chance } = useCharacterStats()
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

  return (
    <View>
      <CharacterView
        name={name}
        agility={agility}
        endurance={endurance}
        chance={chance}
      />
      {render()}
    </View>
  )
}

export default ReadScene
