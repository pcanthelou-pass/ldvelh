import { useGameStore } from '@core'
import { TEST_BOOK, WrapperTest } from '@shared'
import { render, screen, userEvent } from '@testing-library/react-native'
import { useEffect } from 'react'
import { Button, Text, View } from 'react-native'

const MyComponent = () => {
  const { date, setDate, setBook, gameBook } = useGameStore()

  useEffect(() => {
    setBook(TEST_BOOK)
    setDate('10/10/10')
  }, [setBook, setDate])

  const onPress = () => {
    setDate('11/11/11')
  }

  return (
    <View>
      <Text>{gameBook.title}</Text>
      <Text>{`Date: ${date}`}</Text>
      <Button onPress={onPress} title={'Change date'} />
    </View>
  )
}

describe('Store in Core', () => {
  it('should be able to use the store within a component', async () => {
    const user = userEvent.setup()

    render(<MyComponent />, { wrapper: WrapperTest })

    expect(screen.getByText('Mon livre')).toBeVisible()
    expect(screen.getByText(`Date: 10/10/10`)).toBeVisible()
    await user.press(screen.getByRole('button'))
    expect(screen.getByText(`Date: 11/11/11`)).toBeVisible()
  })
})
