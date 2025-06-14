import { AttackerProps } from '@core'
import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  ScreenWithNav,
  Title,
} from '@ui'

export const FightSceneView: React.FC<{
  opponent: AttackerProps
  children: React.ReactNode
  onPressAttack: () => void
  onPressFlee: () => void
}> = ({ opponent, children, onPressAttack, onPressFlee }) => (
  <ScreenWithNav>
    <AboveNavWrapper centered>
      <Title centered>{opponent.description}</Title>
      {children}
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav title="Attaquer" onPress={onPressAttack} />
      <ButtonNav title="Fuir" onPress={onPressFlee} />
    </NavWrapper>
  </ScreenWithNav>
)
