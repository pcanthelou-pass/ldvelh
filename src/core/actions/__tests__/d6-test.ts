import { D6 } from '@actions'

describe('Given a D6', () => {
  it('When launched it has a result between 1 and 6', () => {
    expect(D6(1, () => 0)).toBe(1)
    expect(D6(1, () => 0.9999)).toBe(6)
  })

  it('When launched D6x2 it has a result between 2 and 12', () => {
    expect(D6(2, () => 0)).toBe(2)
    expect(D6(2, () => 0.9999)).toBe(12)
  })
})
