import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { mockReplace } from 'src/shared/helpers/__mocks__/mockReplace'
import { useGoToChooseStory } from '../useGoToChooseStory'

describe('useGoToChooseStory', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('should go to choose story scene', async () => {
    const { result } = renderHook(() => useGoToChooseStory(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockReplace).toHaveBeenCalledWith('/choose-story')
  })
})
