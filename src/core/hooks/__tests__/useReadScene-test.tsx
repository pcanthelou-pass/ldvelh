import React from 'react'
import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { act, renderHook } from '@testing-library/react-native'
import { GameState } from '@types'
import { GAME_STORE } from '../useGameStore'
import { useReadScene } from '../useReadScene'

const makeWrapper =
  (runOnStart?: (store: GameState) => void) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children: React.ReactNode }) => (
    <WrapperTestExt runOnStart={runOnStart}>{children}</WrapperTestExt>
  )

describe('useReadScene', () => {
  it('flags scene as empty before starting the book', () => {
    const { result } = renderHook(() => useReadScene(), {
      wrapper: makeWrapper(),
    })
    expect(result.current.sceneIsEmpty).toBe(true)
    expect(result.current.sceneIsNormal).toBe(true)
  })

  it('computes flags for a normal scene', () => {
    const runOnStart = (store: GameState) => {
      store.startBook()
    }
    const { result } = renderHook(() => useReadScene(), {
      wrapper: makeWrapper(runOnStart),
    })
    expect(result.current.sceneIsEmpty).toBe(false)
    expect(result.current.sceneNeedFight).toBe(false)
    expect(result.current.sceneIsNormal).toBe(true)
  })

  it('detects fight scenes', () => {
    const runOnStart = (store: GameState) => {
      store.startBook()
      store.moveToScene('1-3')
    }
    const { result } = renderHook(() => useReadScene(), {
      wrapper: makeWrapper(runOnStart),
    })
    expect(result.current.sceneNeedFight).toBe(true)
    expect(result.current.fightText).toMatch(/Vous devez battre Toto/)
  })

  it('detects success and failure scenes', () => {
    const startSuccess = (store: GameState) => {
      store.startBook()
      store.moveToScene('1-1')
      store.moveToScene('2-1')
      store.moveToScene('3-1')
    }
    const { result: success } = renderHook(() => useReadScene(), {
      wrapper: makeWrapper(startSuccess),
    })
    expect(success.current.sceneIsSuccess).toBe(true)

    const startFailure = (store: GameState) => {
      store.startBook()
      store.moveToScene('1-2')
    }
    const { result: failure } = renderHook(() => useReadScene(), {
      wrapper: makeWrapper(startFailure),
    })
    expect(failure.current.sceneIsFailure).toBe(true)
  })

  it('calls store actions through callbacks', () => {
    const runOnStart = (store: GameState) => {
      store.startBook()
      store.consumeItemByOne = jest.fn()
      store.resetEndurance = jest.fn()
      store.moveToScene = jest.fn()
      store.quitGame = jest.fn()
    }
    const { result } = renderHook(() => useReadScene(), {
      wrapper: makeWrapper(runOnStart),
    })

    act(() => {
      result.current.actionItem(result.current.items[0])
    })
    expect(GAME_STORE.getState().resetEndurance).toHaveBeenCalled()
    expect(GAME_STORE.getState().consumeItemByOne).toHaveBeenCalled()

    act(() => {
      result.current.moveToScene('1-1')
      result.current.quitGame()
    })
    expect(GAME_STORE.getState().moveToScene).toHaveBeenCalledWith('1-1')
    expect(GAME_STORE.getState().quitGame).toHaveBeenCalled()
  })
})
