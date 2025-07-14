import { useServices } from '@contexts'
import StoriesToChooseEmptyView from '@features/choose-story/components/StoriesToChooseEmptyView'
import { StoriesToChooseLoadingView } from '@features/choose-story/components/StoriesToChooseLoadingView'
import { StoriesToChooseView } from '@features/choose-story/components/StoriesToChooseView'
import { useGameStore, useGetStoriesToChoose } from '@hooks'
import { useGoToCreateUser } from '@navigation'
import { useEffect } from 'react'

const ChooseStory = () => {
  const setBook = useGameStore((state) => state.setBook)
  const { api } = useServices()
  const { loading, books, load, selectBook } = useGetStoriesToChoose(
    api.getBooks,
  )
  const route = useGoToCreateUser()

  useEffect(() => {
    load()
  }, [load])

  const onPress = async (key: string | number) => {
    const selectedBook = await selectBook(key)
    if (selectedBook) {
      setBook(selectedBook)
    }
    route()
  }

  if (loading) return <StoriesToChooseLoadingView />
  else if (books.length === 0) return <StoriesToChooseEmptyView />
  return <StoriesToChooseView books={books} onSelect={onPress} />
}

export default ChooseStory
