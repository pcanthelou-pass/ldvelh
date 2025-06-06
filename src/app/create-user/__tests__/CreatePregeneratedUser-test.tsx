import { WrapperTest } from '@/src/shared'
import { render, screen } from '@testing-library/react-native'
import { CreatePregeneratedCharacter } from '../CreatePregeneratedCharacter'

describe('<CreatePregeneratedCharacter/>', () => {
  it('Un écran intitulé "Personnage"', async () => {
    render(<CreatePregeneratedCharacter />, { wrapper: WrapperTest })
    expect(screen.getByText(/Mon héro/i)).toBeVisible()
  })

  it('Les caractéristiques du personnage sont affichées', async () => {
    render(<CreatePregeneratedCharacter />, { wrapper: WrapperTest })
    expect(screen.getByText(/agilité : 12/i)).toBeVisible()
    expect(screen.getByText(/endurance : 24/i)).toBeVisible()
    expect(screen.getByText(/chance : 12/i)).toBeVisible()
  })

  it("Et son équipement aussi, mais juste les clés, ce n'est pas important ici", async () => {
    render(<CreatePregeneratedCharacter />, { wrapper: WrapperTest })
    expect(screen.getByText(/potion d'endurance/i)).toBeVisible()
    expect(await screen.queryByText(/necklace/i)).not.toBeVisible()
  })

  it('L\'écran contient juste un bouton "Suivant"', async () => {
    render(<CreatePregeneratedCharacter />, { wrapper: WrapperTest })
    expect(await screen.findByRole(/button/i)).toBeTruthy()
    expect(await screen.findByText('Suivant')).toBeTruthy()
  })
})
