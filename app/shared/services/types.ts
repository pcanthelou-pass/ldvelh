import { ReactNode } from 'react';

export interface IAlertService {
  show: (message: string) => void | string | ReactNode;
}

export interface Services {
  alert: IAlertService;
}
