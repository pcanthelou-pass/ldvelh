import { useReadScene } from '@hooks'
import { useGoToFightScene } from '@navigation'
import { ItemProps } from '@types'
import { ReadSceneEmptyView } from './components/ReadSceneEmptyView'
import { ReadSceneFailureView } from './components/ReadSceneFailureView'
import { ReadSceneFightView } from './components/ReadSceneFightView'
import { ReadSceneNormalView } from './components/ReadSceneNormalView'
import { ReadSceneSuccessView } from './components/ReadSceneSuccessView'

function BuildSceneByPredicate(
  onPressQuit: () => void,
  onPressItem: (item: ItemProps) => void,
  onPressAction: (key: string) => void,
) {
  const {
    sceneIsEmpty,
    sceneNeedFight,
    sceneIsSuccess,
    sceneIsFailure,
    sceneIsNormal,
    text,
    fightText,
    items,
    actions,
  } = useReadScene()

  const fightScene = useGoToFightScene()

  return [
    {
      predicate: () => sceneIsEmpty,
      render: () => <ReadSceneEmptyView />,
    },
    {
      predicate: () => sceneNeedFight,
      render: () => (
        <ReadSceneFightView sceneText={fightText} onPressFight={fightScene} />
      ),
    },
    {
      predicate: () => sceneIsSuccess,
      render: () => (
        <ReadSceneSuccessView sceneText={text} onPressQuit={onPressQuit} />
      ),
    },
    {
      predicate: () => sceneIsFailure,
      render: () => (
        <ReadSceneFailureView sceneText={text} onPressQuit={onPressQuit} />
      ),
    },
    {
      predicate: () => sceneIsNormal,
      render: () => (
        <ReadSceneNormalView
          sceneText={text}
          items={items}
          onPressItem={onPressItem}
          actions={actions}
          onPressAction={onPressAction}
        />
      ),
    },
  ]
}

export const useBuildSceneByPredicate = (
  onPressQuit: () => void,
  onPressItem: (item: ItemProps) => void,
  onPressAction: (key: string) => void,
) => {
  const views = BuildSceneByPredicate(onPressQuit, onPressItem, onPressAction)

  const { render } = views.find((v) => v.predicate())!

  return render
}
