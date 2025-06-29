import { render, screen, userEvent } from '@testing-library/react-native'
import { ShortListOfStories } from '@types'
import { StoriesToChooseView } from '../components/StoriesToChooseView'

describe('<StoriesToChooseView>', () => {
  const list: ShortListOfStories = [
    {
      name: 'Livre #1',
      text: 'Texte livre #1',
      reference: 0,
    },
    {
      name: 'Livre #2',
      text: 'Texte livre #2',
      reference: 1,
    },
  ]

  it('render en error there is no books te choose', async () => {
    const onSelectFn = jest.fn()
    render(<StoriesToChooseView books={[]} onSelect={onSelectFn} />)

    expect(await screen.queryByText('Livre #1')).not.toBeVisible()
  })
  it('render the list of book names and description', async () => {
    const onSelectFn = jest.fn()
    render(<StoriesToChooseView books={list} onSelect={onSelectFn} />)

    expect(screen.getByText(list[0].name)).toBeVisible()
    expect(screen.getByText(list[1].name)).toBeVisible()
    expect(screen.getByText(list[0].text)).toBeVisible()
    expect(screen.getByText(list[1].text)).toBeVisible()
  })
  it('can handle the book chosen by the user', async () => {
    const user = userEvent.setup()
    const onSelectFn = jest.fn()

    render(<StoriesToChooseView books={list} onSelect={onSelectFn} />)

    await user.press(screen.getByTestId('book-1'))

    expect(onSelectFn).toHaveBeenCalledWith(1)
  })
})
