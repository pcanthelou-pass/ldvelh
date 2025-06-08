import { Ability } from './Ability'
import { HeroAbilities } from './HeroAbilities'
import { HeroName } from './HeroName'
import { HeroWrapper } from './HeroWrapper'

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
    <HeroWrapper>
      <HeroName name={name} />
      <HeroAbilities>
        <Ability label="Agility" value={agility} />
        <Ability label="Endurance" value={endurance} />
        <Ability label="Chance" value={chance} />
      </HeroAbilities>
    </HeroWrapper>
  )
}
