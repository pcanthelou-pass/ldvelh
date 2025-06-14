import { useGoToChooseStory } from '@navigation'
import {
  AboveNavWrapper,
  ButtonNav,
  NavWrapper,
  ScreenWithNav,
  WelcomeText,
  WelcomeTitle,
} from '@ui'

export default function Index() {
  const route = useGoToChooseStory()
  return (
    <ScreenWithNav>
      <AboveNavWrapper centered>
        <WelcomeTitle title="Bienvenue" />
        <WelcomeText>
          Vous entrez dans une aventure unique et ferez progresser votre héro au
          fil des écrans de cette histoire. Attention aux adversaires et autres
          montres que vous rencontrerez !
        </WelcomeText>
      </AboveNavWrapper>
      <NavWrapper>
        <ButtonNav title="Choisir une histoire" onPress={route} />
      </NavWrapper>
    </ScreenWithNav>
  )
}
