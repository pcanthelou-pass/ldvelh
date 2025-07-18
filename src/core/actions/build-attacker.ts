import {
  AttackerProps,
  AttackerStatsProps,
  HitProps,
  RoundAttackProps,
} from '../types'
import { D6x2 } from './D6'

const defaultAttack: RoundAttackProps = (
  attacker?: AttackerStatsProps,
): number => (attacker?.abilities?.agility ?? 0) + D6x2()

const defaultHit: HitProps = (): number => 2

/**
 *
 * Build the attacker with default attacks and hits
 * @returns A fully filled attacker
 */
export const BuildAttacker = (props: AttackerStatsProps): AttackerProps => {
  return {
    ...props,
    attack: () => defaultAttack(props),
    hit: () => defaultHit(),
  }
}
