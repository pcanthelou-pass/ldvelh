import { EmptyBook, useGameStore } from '@core'
import { WrapperTest } from '@features/helpers/WrapperTest'
import { act, render, screen, userEvent } from '@testing-library/react-native'
import { Button, Text } from 'react-native'
import { CreatePregeneratedCharacter } from '../CreatePregeneratedCharacter'

const DisplayCharacterName = () => {
  const { character, setBook } = useGameStore()
  const onPress = () => {
    setBook(EmptyBook)
  }
  return (
    <>
      <Text>nom : {character.name}</Text>
      <Button title="Reload a book" onPress={onPress} />
    </>
  )
}

describe('<CreatePregeneratedCharacter/>', () => {
  it('Un écran intitulé "Personnage"', async () => {
    render(
      <WrapperTest>
        <CreatePregeneratedCharacter />
      </WrapperTest>,
    )
    expect(screen.getByText(/Personnage/i)).toBeVisible()
  })

  it('Les caractéristiques du personnage sont affichées', async () => {
    render(
      <WrapperTest>
        <CreatePregeneratedCharacter />
      </WrapperTest>,
    )
    expect(screen.getByText(/agilité : 12/i)).toBeVisible()
    expect(screen.getByText(/endurance : 24/i)).toBeVisible()
    expect(screen.getByText(/chance : 12/i)).toBeVisible()
  })

  it("Et son équipement aussi, mais juste les clés, ce n'est pas important ici", async () => {
    render(
      <WrapperTest>
        <CreatePregeneratedCharacter />
      </WrapperTest>,
    )
    expect(screen.getByText(/torch/i)).toBeVisible()
    expect(await screen.queryByText(/necklace/i)).not.toBeVisible()
  })
  it('L\'écran contient juste un bouton "Suivant"', async () => {
    render(
      <WrapperTest>
        <CreatePregeneratedCharacter />
      </WrapperTest>,
    )
    expect(await screen.findByRole(/button/i)).toBeTruthy()
    expect(await screen.findByText('Suivant')).toBeTruthy()
  })
  it('Si on fait suivant alors notre game store contient le personnage', async () => {
    const user = userEvent.setup()
    render(
      <WrapperTest>
        <CreatePregeneratedCharacter />
        <DisplayCharacterName />
      </WrapperTest>,
    )
    await user.press(await screen.findByText('Suivant'))
    act(() => {})
    expect(await screen.findByText(/nom : toto/i)).toBeVisible()
  })
  it('Et si on appel un setBook entre après avoir sélectionné un personnage alors il est redéfini', async () => {
    const user = userEvent.setup()
    render(
      <WrapperTest>
        <CreatePregeneratedCharacter />
        <DisplayCharacterName />
      </WrapperTest>,
    )
    await user.press(await screen.findByText('Suivant'))
    act(() => {})
    expect(await screen.findByText(/nom : toto/i)).toBeVisible()
    await user.press(await screen.findByText('Reload a book'))
    act(() => {})
    expect(await screen.queryByText(/nom : toto/i)).not.toBeVisible()
  })
})
