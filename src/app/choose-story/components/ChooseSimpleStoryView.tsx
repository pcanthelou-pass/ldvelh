import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  ScreenWithNav,
  TextBox,
  Title,
} from '@ui'

const ChooseStoryView = ({
  title,
  description,
  onPress,
}: {
  title: string
  description: string
  onPress: () => void
}) => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <Title>{title}</Title>
      <TextBox>{description}</TextBox>
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav onPress={onPress} title="Entrer" />
    </NavWrapper>
  </ScreenWithNav>
)

export default ChooseStoryView
