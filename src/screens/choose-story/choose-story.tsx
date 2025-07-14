import StoriesToChooseEmptyView from '@features/choose-story/components/StoriesToChooseEmptyView'
import { StoriesToChooseLoadingView } from '@features/choose-story/components/StoriesToChooseLoadingView'
import { StoriesToChooseView } from '@features/choose-story/components/StoriesToChooseView'
import { useGameStore, useGetStoriesToChoose } from '@hooks'
import { useGoToCreateUser } from '@navigation'
import { useEffect } from 'react'
import { getIntroduction, listBooks } from 'src/shared/services/bookService'

const ChooseStory = () => {
  const setBook = useGameStore((state) => state.setBook)
  const { loading, books, load, selectBook } = useGetStoriesToChoose(listBooks)
  const route = useGoToCreateUser()

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onPress = async (key: string | number) => {
    const selectedBook = await selectBook(key)
    if (selectedBook) {
      const intro = await getIntroduction(String(key))
      setBook({ id: String(key), intro })
    }
    route()
  }

  if (loading) return <StoriesToChooseLoadingView />
  else if (books.length === 0) return <StoriesToChooseEmptyView />
  return <StoriesToChooseView books={books} onSelect={onPress} />
}

export default ChooseStory
