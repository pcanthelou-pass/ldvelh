import { WrapperTest } from '@shared'
import { render, screen } from '@testing-library/react-native'
import ChooseSimpleStory from '..'

describe('<ChooseStory></ChooseStory>', () => {
  it('Should display the only book', async () => {
    render(<ChooseSimpleStory />, { wrapper: WrapperTest })

    expect(
      screen.getByText(
        /Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore./i,
      ),
    ).toBeVisible()
  })

  it('Should not display the only book as selected', async () => {
    render(<ChooseSimpleStory />, { wrapper: WrapperTest })

    expect(await screen.findByText('Entrer')).toBeVisible()
  })
})
