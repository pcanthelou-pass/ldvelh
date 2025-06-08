import { usePregeneratedCharacter } from '@core'
import { useGoToReadIntroduction } from '@navigation'
import { ButtonNav, CenteredScreenView } from '@ui'
import { Backpack } from './Backpack'
import { FullCharacterView } from './components/FullCharacterView'

/**
 *
 * @returns A component that displays a pregenerated character with their attributes and items.
 * It allows the user to proceed to the next step in the character creation process.
 */
export const CreatePregeneratedCharacter = () => {
  const { name, agility, endurance, chance, items } = usePregeneratedCharacter()
  const route = useGoToReadIntroduction()

  const onPress = () => {
    route()
  }

  return (
    <CenteredScreenView>
      <FullCharacterView
        name={name}
        agility={agility}
        endurance={endurance}
        chance={chance}
      />
      <Backpack items={items} />
      <ButtonNav title="Suivant" onPress={onPress} />
    </CenteredScreenView>
  )
}
