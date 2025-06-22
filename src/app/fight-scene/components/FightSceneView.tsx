import { AttackerProps } from '@core'
import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  Paragraph,
  ScreenWithNav,
  Title,
} from '@ui'

export const FightSceneView: React.FC<{
  opponent: AttackerProps
  round: number
  children: React.ReactNode
  onPressAttack: () => void
  onPressFlee: () => void
  onPressChance: () => void
}> = ({
  round,
  opponent,
  children,
  onPressAttack,
  onPressFlee,
  onPressChance,
}) => (
  <ScreenWithNav>
    <AboveNavWrapper centered>
      <Title centered>{opponent.description}</Title>
      <Paragraph>Round {round + 1}</Paragraph>
      {children}
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav title="Attaquer" onPress={onPressAttack} />
      {round > 0 && (
        <ButtonNav title="Tenter sa chance" onPress={onPressChance} />
      )}
      <ButtonNav title="Fuir" onPress={onPressFlee} />
    </NavWrapper>
  </ScreenWithNav>
)
