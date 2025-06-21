import { useGetStoriesToChoose } from '@core'
import { useGoToCreateUser } from '@navigation'
import { useEffect } from 'react'
import StoriesToChooseEmptyView from './components/StoriesToChooseEmptyView'
import { StoriesToChooseLoadingView } from './components/StoriesToChooseLoadingView'
import { StoriesToChooseView } from './components/StoriesToChooseView'

const ChooseStory = () => {
  const { loading, books, load, selectBook } = useGetStoriesToChoose()
  const route = useGoToCreateUser()

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onPress = async (key: string | number) => {
    await selectBook(key)
    route()
  }

  if (loading) return <StoriesToChooseLoadingView />
  else if (books.length === 0) return <StoriesToChooseEmptyView />
  return <StoriesToChooseView books={books} onSelect={onPress} />
}

export default ChooseStory
