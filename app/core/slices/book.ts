export interface BookSlice {
  title: string
  description: string
  setTitle: (value: string) => void
  setDescription: (value: string) => void
}
