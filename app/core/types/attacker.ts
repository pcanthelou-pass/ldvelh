import { CharacterAbilitiesProps } from './character-abilities'

export type RoundAttackProps = (attacker: AttackerProps) => number

export type HitProps = (attacker: AttackerProps, value?: number) => number

export interface AttackerStatsProps {
  name: string
  abilities: CharacterAbilitiesProps
  description?: string
}

export interface AttackerActionsProps {
  attack: RoundAttackProps
  hit: HitProps
}

export type AttackerProps = AttackerStatsProps & AttackerActionsProps
