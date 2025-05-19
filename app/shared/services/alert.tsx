import { ReactNode } from 'react'
import { IAlertService } from './types'

export class AlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return `alert: ${message}`
  }
}
