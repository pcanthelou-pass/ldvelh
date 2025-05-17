import { Wrapper } from '@/app/features/wrapper'
import { BookSlice, useGameStore, useUserStore, useZeStore } from '@core'
import { render, screen, userEvent } from '@testing-library/react-native'
import { Button, Text, View } from 'react-native'

const MyComponent = () => {
  const date = useGameStore((state) => state.date)
  const setDate = useGameStore((state) => state.setDate)
  const { pseudo, setPseudo } = useUserStore((state) => state)
  const title = useZeStore<BookSlice>((state) => state.title)

  const onPress = () => {
    setDate('11/11/11')
    setPseudo('TOTO')
  }

  return (
    <View>
      <Text>{title}</Text>
      <Text>{`Date: ${date}`}</Text>
      <Text>{`Bonjour ${pseudo}`}</Text>
      <Button onPress={onPress} title={'Change date'} />
    </View>
  )
}

describe('Store in Core', () => {
  it('should be able to use the store within a component', async () => {
    const user = userEvent.setup()

    render(
      <Wrapper>
        <MyComponent />
      </Wrapper>,
    )

    expect(screen.getByText('Test Book Title')).toBeDefined()
    expect(screen.getByText(`Date: 10/10/10`)).toBeDefined()
    expect(screen.getByText(`Bonjour PSEUDO`)).toBeDefined()
    await user.press(screen.getByRole('button'))
    expect(screen.getByText(`Date: 11/11/11`)).toBeDefined()
    expect(screen.getByText(`Bonjour TOTO`)).toBeDefined()
  })
})
