import { render, screen } from '@testing-library/react-native'
import { ReadIntroductionView } from '../components'

describe('Given the ReadIntroductionView component', () => {
  it('When rendered Then it shows is props title, text', () => {
    const title = 'Scene Title'
    const text = 'Scene text'
    render(<ReadIntroductionView title={title}>{text}</ReadIntroductionView>)

    expect(screen.getByText(title)).toBeVisible()
    expect(screen.getByText(text)).toBeVisible()
  })
})
