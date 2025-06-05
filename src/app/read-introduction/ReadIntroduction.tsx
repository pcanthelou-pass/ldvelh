import { useReadIntroduction } from '@core'
import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { ReadIntroductionView } from './components/ReadIntroductionView'

export const ReadIntroduction = () => {
  const { title, introduction, startBook } = useReadIntroduction()
  const router = useRouter()

  const forward = useCallback(() => {
    startBook()
    router.replace('/read-scene')
  }, [startBook, router])

  return (
    <ReadIntroductionView title={title} forward={forward}>
      {introduction}
    </ReadIntroductionView>
  )
}
