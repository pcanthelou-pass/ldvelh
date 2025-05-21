import { Scenes } from '@core'
import { ReadScene, useReadScene, WrapperTestExt } from '@features'
import { TEST_BOOK } from '@shared/helpers/TEST_BOOK'
import {
  render,
  renderHook,
  screen,
  userEvent,
} from '@testing-library/react-native'

describe('Given the user has selected a book and has a character', () => {
  const user = userEvent.setup()
  const onPressActionExtFn = jest.fn()

  beforeEach(() => {
    render(<ReadScene onPressActionExt={onPressActionExtFn} />, {
      wrapper: WrapperTestExt,
    })
  })

  describe('When displaying the ReadScene screen for the first time', () => {
    it('Then it show the text for the first scene', async () => {
      expect(await screen.findByText(TEST_BOOK.scenes['1']?.text)).toBeVisible()
    })
    it('Then it show the choices for the next scenes', async () => {
      expect(
        await screen.findByText(TEST_BOOK.scenes['1'].next['1-1'].question),
      ).toBeVisible()
      expect(
        await screen.findByText(TEST_BOOK.scenes['1'].next['1-2'].question),
      ).toBeVisible()
    })
    it('Allows to push button to change current scene', async () => {
      const button = screen.getByTestId('Choice1-1')
      expect(button).toBeVisible()

      await user.press(button)

      expect(onPressActionExtFn).toHaveBeenCalledWith('1-1')
    })
    it('Then it show the choice to use a potion item', async () => {
      expect(
        await screen.findByText(/boire la potion d'endurance/i),
      ).toBeVisible()
    })
  })
})

describe('useReadScene', () => {
  const scenes: Scenes = TEST_BOOK.scenes
  it('can read an empty scene', () => {
    const { result } = renderHook(() => useReadScene('', null))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toBe(undefined)
  })
  it('can read an empty scene with good key', () => {
    const { result } = renderHook(() => useReadScene('1', null))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toBe(undefined)
  })
  it('can read an scene without a good key', () => {
    const { result } = renderHook(() => useReadScene('', scenes))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toBeNull()
  })
  it('can read an scene with good key', () => {
    const { result } = renderHook(() => useReadScene('1', scenes))
    expect(result.current.sceneText).toBe(TEST_BOOK.scenes['1']?.text)
    expect(result.current.actions).toStrictEqual([
      { dest: '1-1', question: 'Scène #1-1' },
      { dest: '1-2', question: 'Scène #1-2' },
    ])
  })
})
