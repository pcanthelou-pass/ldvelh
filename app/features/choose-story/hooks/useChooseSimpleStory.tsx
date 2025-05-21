import { getStory, useBookStore } from '@core'

export const useChooseStory = () => {
  const { title, description } = getStory()
  const { setTitle, setDescription } = useBookStore((state) => state)
  setTitle(title)
  setDescription(description)
  return { title, description }
}
