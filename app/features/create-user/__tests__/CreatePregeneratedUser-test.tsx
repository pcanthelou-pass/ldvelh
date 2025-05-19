import { render, screen } from '@testing-library/react-native'
import { Wrapper } from '../../wrapper'
import { CreatePregeneratedCharacter } from '../CreatePregeneratedCharacter'

describe('<CreatePregeneratedCharacter/>', () => {
  it('Un écran intitulé "Personnage"', async () => {
    render(
      <Wrapper>
        <CreatePregeneratedCharacter />
      </Wrapper>,
    )
    expect(screen.getByText(/le personnage/i)).toBeVisible()
  })

  it('Les caractéristiques du personnage sont affichées', async () => {
    render(
      <Wrapper>
        <CreatePregeneratedCharacter />
      </Wrapper>,
    )
    expect(screen.getByText(/agilité : 12/i)).toBeVisible()
    expect(screen.getByText(/endurance : 24/i)).toBeVisible()
    expect(screen.getByText(/chance : 12/i)).toBeVisible()
  })

  it("Et son équipement aussi, mais juste les clés, ce n'est pas important ici", async () => {
    render(
      <Wrapper>
        <CreatePregeneratedCharacter />
      </Wrapper>,
    )
    expect(screen.getByText(/torch/i)).toBeVisible()
    expect(screen.getByText(/necklace/i)).toBeVisible()
  })
  it('L\'écran contient juste un bouton "Suivant"', async () => {
    render(
      <Wrapper>
        <CreatePregeneratedCharacter />
      </Wrapper>,
    )
    expect(await screen.findByRole(/button/i)).toBeTruthy()
    expect(await screen.findByText('Suivant')).toBeTruthy()
  })
})
