import { renderHook } from '@testing-library/react-native'
import { useReadIntroduction } from '../useReadIntroduction'

describe('useReadIntroduction', () => {
  it('should be able to load the default introduction', () => {
    const { result } = renderHook(() => useReadIntroduction())

    expect(result.current).toHaveProperty('title')
    expect(result.current).toHaveProperty('introduction')
  })
})
