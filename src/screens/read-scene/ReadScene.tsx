import { useCharacterStats, useReadScene } from '@hooks'
import { useGoToChooseStory } from '@navigation'
import { ItemProps } from '@types'
import { View } from 'react-native'
import { useBuildSceneByPredicate } from './BuildSceneByPredicate'
import { CharacterView } from './components/CharacterView'

const ReadScene = ({
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
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}
    >
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
