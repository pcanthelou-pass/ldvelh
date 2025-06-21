import { AboveNavWrapper, ScreenWithNav, TextBox, Title } from '@ui'

const StoriesToChooseEmptyView = () => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <Title>Aucun livre</Title>
      <TextBox>Vous n&apos;avez aucun livre dans votre bibliothèque.</TextBox>
    </AboveNavWrapper>
  </ScreenWithNav>
)

export default StoriesToChooseEmptyView
