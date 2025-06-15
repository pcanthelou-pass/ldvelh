import { WrapperTest } from '@shared'
import { renderHook } from '@testing-library/react-native'

describe('useGetStoriesToChoose', () => {
  it('Have the right properties to be used', () => {
    const { result } = renderHook(() => useGetStoriesToChoose(), {
      wrapper: WrapperTest,
    })
  })
})

function useGetStoriesToChoose(): any {
  throw new Error('Function not implemented.')
}
