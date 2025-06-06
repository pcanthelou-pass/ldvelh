import { ItemProps, ItemStatsProps } from './items'

export type BackpackItemsStats = Record<string, ItemStatsProps>

export type BackpackItems = Map<string, ItemProps>
