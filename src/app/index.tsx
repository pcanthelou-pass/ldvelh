import { useGoToChooseStory } from '@navigation'
import {
  ButtonNav,
  CenteredScreenView,
  CenteredView,
  WelcomeText,
  WelcomeTitle,
} from '@ui'

export default function Index() {
  const route = useGoToChooseStory()
  return (
    <CenteredScreenView>
      <CenteredView>
        <WelcomeTitle title="Bienvenue" />
        <WelcomeText>
          Vous entrez dans une aventure unique et ferez progresser votre héro au
          fil des écrans de cette histoire. Attention aux adversaires et autres
          montres que vous rencontrerez !
        </WelcomeText>
      </CenteredView>
      <ButtonNav title="Choisir une histoire" onPress={route} />
    </CenteredScreenView>
  )
}
