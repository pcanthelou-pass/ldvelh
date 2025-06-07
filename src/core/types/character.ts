import { EmptyBackpackItems } from '../actions/build-backpack'
import { AbilitiesProps, EmptyAbilitiesProps } from './abilities'
import { BackpackItems, BackpackItemsStats } from './backpack'

export interface CharacterRawProps {
  name: string
  abilities: AbilitiesProps
  items: BackpackItemsStats
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
