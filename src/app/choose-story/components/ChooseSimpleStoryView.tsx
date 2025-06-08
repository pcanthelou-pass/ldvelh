import { ButtonNav, CenteredScreenView, Paragraph, Title, TopView } from '@ui'

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
      <Paragraph>{description}</Paragraph>
    </TopView>
    <ButtonNav onPress={onPress} title="Entrer" />
  </CenteredScreenView>
)

export default ChooseStoryView
