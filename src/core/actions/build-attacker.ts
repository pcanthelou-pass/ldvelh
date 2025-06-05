import { D6x2 } from '@/src/core/actions/D6'
import {
  AttackerProps,
  AttackerStatsProps,
  HitProps,
  RoundAttackProps,
} from '../types/attacker'

const defaultAttack: RoundAttackProps = (
  attacker?: AttackerStatsProps,
): number => (attacker?.abilities?.agility ?? 0) + D6x2()

const defaultHit: HitProps = (
  attacker?: AttackerStatsProps,
  value: number = 2,
): number => (attacker?.abilities?.endurance ?? 0) - value

/**
 *
 * Build the attacker with default attacks and hits
 * @returns A fully filled attacker
 */
export const BuildAttacker = (props: AttackerStatsProps): AttackerProps => {
  return {
    ...props,
    attack: () => defaultAttack(props),
    hit: () => defaultHit(props),
  }
}
