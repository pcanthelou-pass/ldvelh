import { usePregeneratedCharacter } from '@hooks'
import { useGoToReadIntroduction } from '@navigation'
import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  ScreenWithNav,
  Space,
} from '@ui'
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
    <ScreenWithNav>
      <AboveNavWrapper>
        <FullCharacterView
          name={name}
          agility={agility}
          endurance={endurance}
          chance={chance}
        />
        <Space count={3} />
        <Backpack items={items} />
      </AboveNavWrapper>
      <NavWrapper>
        <ButtonNav title="Suivant" onPress={onPress} />
      </NavWrapper>
    </ScreenWithNav>
  )
}
