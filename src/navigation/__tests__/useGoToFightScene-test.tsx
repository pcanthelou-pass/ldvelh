import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { mockPush } from 'src/shared/helpers/mocks/mockReplace'
import { useGoToFightScene } from '../useGoToFightScene'

describe('useGoToFightScene', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should go to fight scene', async () => {
    const { result } = renderHook(() => useGoToFightScene(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockPush).toHaveBeenCalledWith('/fight-scene')
  })
})
