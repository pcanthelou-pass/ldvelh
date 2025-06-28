import { ItemProps } from '@types'
import { useGameStore } from './useGameStore'

export const useReadScene = () => {
  const store = useGameStore((state) => state)
  const { character, currentScene, moveToScene, quitGame } = store

  return {
    sceneIsEmpty: currentScene.id === '',
    sceneNeedFight:
      !!currentScene.opponent && currentScene.opponent.abilities.endurance > 0,
    sceneIsSuccess:
      currentScene.isEnding && currentScene.endingType === 'success',
    sceneIsFailure:
      currentScene.isEnding && currentScene.endingType === 'failure',
    sceneIsNormal: !currentScene.isEnding,
    items: character.items,
    text: currentScene.text,
    fightText:
      (!!currentScene.opponent && currentScene.opponent.description) || '',
    actions: currentScene.actions,
    actionItem: (item: ItemProps) => {
      item.action(store)
    },
    moveToScene,
    quitGame,
  }
}
