import { render } from '@testing-library/react-native'

import Index from '@/src/app'

describe('<Index />', () => {
  it('Should render text correctly on home screen', () => {
    const { getByText } = render(<Index />)

    getByText('Welcome')
  })
})
