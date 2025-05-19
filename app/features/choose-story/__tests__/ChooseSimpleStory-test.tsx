import { useBookStore, useGameStore } from '@core'
import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Wrapper } from '../../wrapper'
import { ChooseSimpleStory } from '../ChooseSimpleStory'

const MockedComponent = () => {
  const [loading, setLoading] = useState(true)
  const { setTitle, setDescription } = useBookStore()
  const { book } = useGameStore()
  useEffect(() => {
    setTitle('Book Title Test')
    setDescription('Book Test Description')
    setLoading(false)
  }, [setTitle, setDescription, setLoading])
  return loading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <>
      <ChooseSimpleStory />
      {!book?.title && <Text>Appuyer sur entrer</Text>}
    </>
  )
}

describe('<ChooseStory></ChooseStory>', () => {
  it('Should display the only book', async () => {
    render(
      <Wrapper>
        <MockedComponent />
      </Wrapper>,
    )

    expect(screen.getByText(/book title test/i)).toBeVisible()
    expect(screen.getByText(/book test description/i)).toBeVisible()
  })

  it('Should not display the only book as selected', async () => {
    render(
      <Wrapper>
        <MockedComponent />
      </Wrapper>,
    )

    expect(await screen.findByText('Appuyer sur entrer')).toBeVisible()
  })

  it('should update the game state when pressing enter', async () => {
    const user = userEvent.setup()

    render(
      <Wrapper>
        <MockedComponent />
      </Wrapper>,
    )

    expect(screen.getByText('Entrer')).toBeVisible()
    await user.press(screen.getByText('Entrer'))

    await waitFor(() => {
      expect(screen.queryByText(/appuyer sur entrer/i)).not.toBeOnTheScreen()
    })
  })
})
