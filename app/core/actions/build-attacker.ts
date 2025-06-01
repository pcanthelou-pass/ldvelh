import {
  AttackerProps,
  AttackerStatsProps,
  HitProps,
  RoundAttackProps,
} from '../types/attacker'
import { D6x2 } from '../types/dice'

const defaultAttack: RoundAttackProps = (attacker: AttackerProps): number =>
  attacker.abilities.agility + D6x2()

const defaultHit: HitProps = (
  attacker: AttackerProps,
  value: number = 2,
): number => (attacker.abilities.endurance -= value)

/**
 *
 * Build the attacker with default attacks and hits
 * @returns A fully filled attacker
 */
export const BuildAttacker = ({
  name,
  abilities,
  description,
}: AttackerStatsProps): AttackerProps => ({
  name,
  abilities,
  description,
  attack: defaultAttack,
  hit: defaultHit,
})
