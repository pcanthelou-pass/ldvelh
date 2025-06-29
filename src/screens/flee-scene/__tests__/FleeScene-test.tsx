import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { render, screen, userEvent } from '@testing-library/react-native'
import { mockReplace } from 'src/shared/helpers/__mocks__/mockReplace'
import FleeScene from '../flee-scene'

describe('FleeScene', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })
  it('should render correctly', () => {
    render(<FleeScene />, { wrapper: WrapperTestExt })

    expect(screen.getByText('Héro a réussi à fuir !')).toBeTruthy()
    expect(screen.getByText('Vous avez perdu 2 points de vie.')).toBeTruthy()
    expect(screen.getByText('endurance restante')).toBeTruthy()
    expect(screen.getByText('18')).toBeTruthy()
  })
  it('should handle button press', async () => {
    const user = userEvent.setup()

    render(<FleeScene />, { wrapper: WrapperTestExt })

    const button = screen.getByText('Continuer')
    await user.press(button)
    expect(mockReplace).toHaveBeenCalledWith('/read-scene')
  })
})
