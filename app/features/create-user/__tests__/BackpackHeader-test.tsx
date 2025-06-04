import { render, screen } from '@testing-library/react-native'
import { BackpackHeader } from '../components/BackpackHeader'

describe('BackpackHeader', () => {
  it('should show object numbers', () => {
    render(<BackpackHeader items={[]} />)

    expect(screen.getByText('0 objet')).toBeVisible()
  })

  it('should show 1 object numbers when there is some', () => {
    render(<BackpackHeader items={['truc']} />)

    expect(screen.getByText('1 objet')).toBeVisible()
  })

  it('should show objects numbers when there is some', () => {
    render(<BackpackHeader items={['truc', 'machin']} />)

    expect(screen.getByText('2 objets')).toBeVisible()
  })
})
