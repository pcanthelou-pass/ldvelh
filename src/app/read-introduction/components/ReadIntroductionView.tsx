import { ButtonNav, CenteredScreenView, Title } from '@ui'
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
  <CenteredScreenView>
    <Title>{title}</Title>
    <TextBox>{children}</TextBox>
    <ButtonNav title="Et maintenant, tournez la page !" onPress={forward} />
  </CenteredScreenView>
)
