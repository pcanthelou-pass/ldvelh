import { AttackerProps, BuildAttacker, Fight, useGameStore } from '@core'

/**
 *
 * @returns An object containing the opponent, character, fight instance, and functions to stop or flee from the fight.
 * The opponent is built using the BuildAttacker function from the core, and the character is retrieved from the game store.
 * The fight instance is created with the opponent and character, and the stopFight and fleeFight functions are defined to handle the end of the fight or fleeing from it.
 * The stopFight function hits the character with the heroWound from the fight instance, while the fleeFight function hits the character with a value of 2.
 */
export const useFight = () => {
  const opponent = BuildAttacker(
    useGameStore(
      (state) => state.currentScene.opponent as unknown as AttackerProps,
    ),
  )

  const character = BuildAttacker(useGameStore((state) => state.character))
  const hitCharacter = useGameStore((state) => state.hitCharacter)
  const hitOpponent = useGameStore((state) => state.hitOpponent)

  const fight = new Fight(opponent, character)

  const stopFight = () => {
    hitCharacter(fight.heroWound)
    hitOpponent(fight.opponentWound)
  }

  const fleeFight = () => {
    hitCharacter(fight.heroWound + 2)
    hitOpponent(99)
  }

  return { opponent, character, fight, stopFight, fleeFight }
}
