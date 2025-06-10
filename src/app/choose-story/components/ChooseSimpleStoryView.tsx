import { ButtonNav, CenteredScreenView, TextBox, Title, TopView } from '@ui'

const ChooseStoryView = ({
  title,
  description,
  onPress,
}: {
  title: string
  description: string
  onPress: () => void
}) => (
  <CenteredScreenView>
    <TopView>
      <Title>{title}</Title>
      <TextBox>{description}</TextBox>
    </TopView>
    <ButtonNav onPress={onPress} title="Entrer" />
  </CenteredScreenView>
)

export default ChooseStoryView
