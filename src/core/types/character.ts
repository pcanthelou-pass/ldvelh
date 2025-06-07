import { EmptyBackpackItems } from '../actions/build-backpack'
import { AbilitiesProps, EmptyAbilitiesProps } from './abilities'
import { BackpackItems } from './backpack'
import { ItemStatsProps } from './items'

export interface CharacterRawProps {
  name: string
  abilities: AbilitiesProps
  items: Record<string, ItemStatsProps>
}
export interface CharacterProps {
  name: string
  abilities: AbilitiesProps
  items: BackpackItems
}

export const EmptyCharacter: CharacterProps = {
  name: '',
  abilities: EmptyAbilitiesProps,
  items: EmptyBackpackItems,
}
