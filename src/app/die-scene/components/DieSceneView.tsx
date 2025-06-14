import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  Paragraph,
  ScreenWithNav,
  Title,
} from '@ui'

export const DieSceneView = ({
  title,
  children,
  onPress,
}: {
  title: string
  children: React.ReactNode
  onPress: () => void
}) => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <Title>{title}</Title>
      <Paragraph>{children}</Paragraph>
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav onPress={onPress} title="Quitter" />
    </NavWrapper>
  </ScreenWithNav>
)
