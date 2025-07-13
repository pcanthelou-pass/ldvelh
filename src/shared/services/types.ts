import { ReactNode } from 'react'
import { BookProps, CharacterRawProps } from '@types'

export interface IAlertService {
  show: (message: string) => void | string | ReactNode
}

export interface IApiService {
  getBooks: () => Promise<BookProps[]>
  getPregeneratedCharacter: () => Promise<CharacterRawProps>
}

export interface Services {
  alert: IAlertService
  api: IApiService
}
