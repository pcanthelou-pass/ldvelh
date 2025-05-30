import {
  act,
  render,
  renderHook,
  screen,
  userEvent,
} from '@testing-library/react-native'
import { Button, Text, View } from 'react-native'
import { useUserStore } from '../userStore'

describe('User Store Hook', () => {
  // const store = useUserStore()

  const TestInsideComponent = () => {
    const pseudo = useUserStore((state) => state.pseudo)
    const setPseudo = useUserStore((state) => state.setPseudo)
    const onPress = () => {
      setPseudo('Other pseudo')
    }
    return (
      <View>
        <Text>{pseudo}</Text>
        <Button onPress={onPress} title="Changer" />
      </View>
    )
  }

  test('should be empty at start', async () => {
    render(<TestInsideComponent />)

    expect(await screen.queryByText('New pseudo')).not.toBeVisible()
  })
  test('should be init with empty pseudo', async () => {
    const { result } = renderHook(() => useUserStore((state) => state.pseudo))
    expect(result.current).toBe('')
  })
  test('should be able to change the pseudo', async () => {
    const { result } = renderHook(() => useUserStore((state) => state))
    act(() => {
      result.current.setPseudo('New pseudo')
    })
    expect(result.current.pseudo).not.toBe('')
    expect(result.current.pseudo).toBe('New pseudo')
  })
  test('Should be accessible inside a component', async () => {
    render(<TestInsideComponent />)

    expect(await screen.queryByText('New pseudo')).toBeVisible()
  })
  test('Should be able to change pseudo inside a component', async () => {
    const user = userEvent.setup()
    render(<TestInsideComponent />)
    await user.press(screen.getByText('Changer'))
    expect(await screen.queryByText('New pseudo')).not.toBeVisible()
    expect(await screen.queryByText('Other pseudo')).toBeVisible()
  })
})
