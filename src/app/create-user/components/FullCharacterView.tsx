import { HeroAbilities } from '@ui'
import { Ability } from '../../../shared/ui/Ability'
import { HeroName } from './HeroName'

interface Character {
  name: string
  agility: number
  endurance: number
  chance: number
}

export const FullCharacterView = ({
  name,
  agility,
  endurance,
  chance,
}: Character) => {
  return (
    <>
      <HeroName name={name} />
      <HeroAbilities>
        <Ability label="Agility" value={agility} />
        <Ability label="Endurance" value={endurance} />
        <Ability label="Chance" value={chance} />
      </HeroAbilities>
    </>
  )
}
