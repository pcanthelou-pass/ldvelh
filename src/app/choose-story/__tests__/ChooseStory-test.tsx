import { render, screen, waitFor } from '@testing-library/react-native'
import ChooseStory from '..'

describe('<ChooseStory>', () => {
  it('render properly', async () => {
    render(<ChooseStory />)
    await waitFor(() =>
      expect(
        screen.getByText('Les mésaventures de Grok, gobelin maladroit'),
      ).toBeVisible(),
    )
  })
})
