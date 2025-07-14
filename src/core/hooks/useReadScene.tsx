import { ItemProps } from '@types'
import { GAME_STORE, useGameStore } from './useGameStore'
import { useCallback, useMemo } from 'react'

export const useReadScene = () => {
  const currentScene = useGameStore((state) => state.currentScene)
  const items = useGameStore((state) => state.character.items)
  const moveToScene = useGameStore((state) => state.moveToScene)
  const quitGame = useGameStore((state) => state.quitGame)

  const sceneIsEmpty = useMemo(() => currentScene.id === '', [currentScene.id])
  const sceneNeedFight = useMemo(
    () =>
      !!currentScene.opponent && currentScene.opponent.abilities.endurance > 0,
    [currentScene.opponent],
  )
  const sceneIsSuccess = useMemo(
    () => currentScene.isEnding && currentScene.endingType === 'success',
    [currentScene.isEnding, currentScene.endingType],
  )
  const sceneIsFailure = useMemo(
    () => currentScene.isEnding && currentScene.endingType === 'failure',
    [currentScene.isEnding, currentScene.endingType],
  )
  const sceneIsNormal = useMemo(
    () => !currentScene.isEnding,
    [currentScene.isEnding],
  )

  const actionItem = useCallback((item: ItemProps) => {
    item.action(GAME_STORE.getState())
  }, [])

  return {
    sceneIsEmpty,
    sceneNeedFight,
    sceneIsSuccess,
    sceneIsFailure,
    sceneIsNormal,
    items,
    text: currentScene.text,
    fightText:
      (!!currentScene.opponent && currentScene.opponent.description) || '',
    actions: currentScene.actions,
    actionItem,
    moveToScene,
    quitGame,
  }
}
