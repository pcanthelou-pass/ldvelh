import { GameState } from '@core'
import { ItemPower } from './Item-power'

export type RunEffectProps = (store?: GameState) => void

export type EffectProps = object | RunEffectProps

/**
 * What is read from the character file or the book file
 */
export interface ItemStatsProps {
  quantity: number
  value: number
  power: ItemPower
  effect?: EffectProps
}

interface ItemActionProps {
  action: (store?: GameState) => void
}

export type ItemProps = { name: string } & ItemStatsProps & ItemActionProps
