import {
  BookSlice,
  Core,
  GameSlice,
  useGameStore,
  UserSlice,
  useUserStore,
  useZeStore,
} from '@core'
import { IAlertService } from '@services'
import { render, screen, userEvent } from '@testing-library/react-native'
import { ReactNode } from 'react'
import { Button, Text, View } from 'react-native'
import { StateCreator } from 'zustand'

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

const createGameSlice: StateCreator<GameSlice, [], [], GameSlice> = (set) => ({
  date: '10/10/10',
  setDate: (date?: string) => set(() => ({ date })),
})
const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  pseudo: 'PSEUDO',
  setPseudo: (pseudo) => set(() => ({ pseudo })),
})
const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (set) => ({
  title: 'Test Book',
})

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null
  }
}

const defaultServices = { alert: new MockAlertService() }
const mockSlices = {
  game: createGameSlice,
  user: createUserSlice,
  book: createBookSlice,
}

describe('Store in Core', () => {
  it('should be able to use the store within a component', async () => {
    const user = userEvent.setup()
    const Wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <Core services={defaultServices} slices={mockSlices}>
          {children}
        </Core>
      )
    }

    render(
      <Wrapper>
        <MyComponent />
      </Wrapper>,
    )

    expect(screen.getByText('Test Book')).toBeDefined()
    expect(screen.getByText(`Date: 10/10/10`)).toBeDefined()
    expect(screen.getByText(`Bonjour PSEUDO`)).toBeDefined()
    await user.press(screen.getByRole('button'))
    expect(screen.getByText(`Date: 11/11/11`)).toBeDefined()
    expect(screen.getByText(`Bonjour TOTO`)).toBeDefined()
  })
})
