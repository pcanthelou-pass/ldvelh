import { ApiService } from '@services'
import { BookProps } from '../types/book'

const api = new ApiService()

export const getBooks = async (): Promise<BookProps[]> => api.getBooks()
