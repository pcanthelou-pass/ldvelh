import { AbilitiesProps } from './abilities'

export type RoundAttackProps = (attacker?: AttackerStatsProps) => number

export type HitProps = (attacker?: AttackerStatsProps, value?: number) => number

export interface AttackerStatsProps {
  name: string
  abilities: AbilitiesProps
  description?: string
}

export interface AttackerActionsProps {
  attack: RoundAttackProps
  hit: HitProps
}

export type AttackerProps = AttackerStatsProps & AttackerActionsProps
