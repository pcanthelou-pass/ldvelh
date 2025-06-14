import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  ScreenWithNav,
  Title,
} from '@ui'
import { TextBox } from '../../../shared/ui/TextBox'

export const ReadIntroductionView = ({
  title,
  forward,
  children,
}: {
  title: string
  forward?: () => void
  children: React.ReactNode
}) => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <Title>{title}</Title>
      <TextBox>{children}</TextBox>
    </AboveNavWrapper>
    <NavWrapper>
      <ButtonNav title="Et maintenant, tournez la page !" onPress={forward} />
    </NavWrapper>
  </ScreenWithNav>
)
