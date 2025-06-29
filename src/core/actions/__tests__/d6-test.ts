import { D6 } from '@actions'

describe('Given a D6', () => {
  it('When launched it has a result between 1 and 6', () => {
    const dice = D6(1, () => 1)
    expect(dice).toBe(6)
  })
  it('When launched D6x2 it has a result between 2 and 12', () => {
    const dice = D6(2, () => 1)
    expect(dice).toBe(12)
  })
})
