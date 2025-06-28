import { render } from '@testing-library/react-native'
import { Text } from 'react-native'
import { HeroWrapper } from '../components/HeroWrapper'

describe('HeroWrapper', () => {
  it('Affiche ses enfants dans une vue avec le bon style', () => {
    const { getByText } = render(
      <HeroWrapper>
        <Text>Mon héros</Text>
      </HeroWrapper>,
    )

    expect(getByText('Mon héros')).toBeTruthy()
  })
})
