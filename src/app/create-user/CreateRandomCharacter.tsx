import { useRandomCharacter } from '@core'
import { useGoToReadIntroduction } from '@navigation'
import { ButtonNav, CenteredScreenView } from '@ui'
import { Backpack } from './Backpack'
import { FullCharacterView } from './components/FullCharacterView'

/**
 * A component that displays a randomly generated character with their attributes and items.
 * It allows the user to proceed to the next step in the character creation process.
 */
export const CreateRandomCharacter = () => {
  const { name, agility, endurance, chance, items } = useRandomCharacter()
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
