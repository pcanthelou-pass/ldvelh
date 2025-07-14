import {
  Ability,
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  Paragraph,
  ScreenWithNav,
  Title,
} from '@ui'

interface FleeViewProps {
  name: string
  endurance: number
  onPressNext: () => void
}

export const FleeView = ({ name, endurance, onPressNext }: FleeViewProps) => (
  <ScreenWithNav>
    <AboveNavWrapper centered>
      <Title>{name} a réussi à fuir !</Title>
      <Paragraph align="center">Vous avez perdu 2 points de vie.</Paragraph>
      <Ability label="endurance restante" value={endurance} />
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav title="Continuer" onPress={onPressNext} />
    </NavWrapper>
  </ScreenWithNav>
)
