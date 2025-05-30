import { useGameStore } from '@core'
import { WrapperTest } from '@shared'
import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ChooseSimpleStory } from '../ChooseSimpleStory'

const MockedComponent = () => {
  const [loading, setLoading] = useState(true)
  const gameBook = useGameStore((state) => state.gameBook)
  useEffect(() => {
    setLoading(false)
  }, [setLoading, gameBook])
  return loading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <>
      <ChooseSimpleStory />
      {!gameBook?.title && <Text>Appuyer sur entrer</Text>}
    </>
  )
}

describe('<ChooseStory></ChooseStory>', () => {
  it('Should display the only book', async () => {
    render(<MockedComponent />, { wrapper: WrapperTest })

    expect(screen.getByText(/Mon livre description/i)).toBeVisible()
  })

  it('Should not display the only book as selected', async () => {
    render(<MockedComponent />, { wrapper: WrapperTest })

    expect(await screen.findByText('Appuyer sur entrer')).toBeVisible()
  })

  it('should update the game state when pressing enter', async () => {
    const user = userEvent.setup()

    render(<MockedComponent />, { wrapper: WrapperTest })

    expect(screen.getByText('Entrer')).toBeVisible()
    await user.press(screen.getByText('Entrer'))

    await waitFor(() => {
      expect(screen.queryByText(/appuyer sur entrer/i)).not.toBeOnTheScreen()
    })
  })
})
