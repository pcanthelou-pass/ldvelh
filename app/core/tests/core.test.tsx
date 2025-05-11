import { useQuery } from "@tanstack/react-query"
import { renderHook, waitFor } from "@testing-library/react-native"
import { ReactNode } from "react"
import Core from '../components/core'

const RETURN_VALUE='Hello World'

const useCustomHookToTest = () => {
  return useQuery({queryKey:['customHookTest'],queryFn: () => RETURN_VALUE})
}

describe('<Core></Core>',()=>{
  it('should have a cache manager in it', async () => {
    const wrapper = ({children}:{children:ReactNode})=>(<Core>{children}</Core>)

    const {result} = renderHook(()=>useCustomHookToTest(),{wrapper})

    await waitFor(()=>expect(result.current.isSuccess).toBe(true))
    
    expect(result.current.data).toBe(RETURN_VALUE)
  })
})