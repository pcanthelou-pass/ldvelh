import { ShortListOfStories, useGetStoriesToChoose } from '@core'
import { WrapperTest } from '@shared'
import { renderHook } from '@testing-library/react-native'

describe('useGetStoriesToChoose', () => {
  function myRender(): ShortListOfStories {
    const { result } = renderHook(() => useGetStoriesToChoose(), {
      wrapper: WrapperTest,
    })
    return result.current
  }
  it('Have the right properties to be used', () => {
    const list = myRender()

    expect(list[0]).toHaveProperty('name')
    expect(list[0]).toHaveProperty('text')
    expect(list[0]).toHaveProperty('reference')
  })
  it('Have the right number of stories', () => {
    const list = myRender()
    expect(list.length).toBe(2)
  })
})
