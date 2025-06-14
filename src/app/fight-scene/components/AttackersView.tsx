import { AttackerProps } from '@core'
import { Space, Title } from '@ui'
import { AttackerRow } from './AttackerRow'

export const AttackersView: React.FC<{
  character: AttackerProps
  heroEndurance: number
  opponentEndurance: number
  opponent: AttackerProps
}> = ({ character, heroEndurance, opponentEndurance, opponent }) => (
  <>
    <AttackerRow
      name={opponent.name}
      agility={opponent?.abilities?.agility ?? 0}
      endurance={opponentEndurance}
    />
    <Space count={2} />
    <Title>VS.</Title>
    <Space />
    <AttackerRow
      name={character.name}
      agility={character?.abilities?.agility ?? 0}
      endurance={heroEndurance}
    />
  </>
)
