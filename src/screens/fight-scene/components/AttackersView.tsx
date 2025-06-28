import { AttackerProps } from '@types'
import { Paragraph, Space, Title } from '@ui'
import { AttackerRow } from './AttackerRow'

export const AttackersView: React.FC<{
  character: AttackerProps
  heroEndurance: number
  opponentEndurance: number
  opponent: AttackerProps
  chance: number
  opponentIsTouched: boolean
  heroIsTouched: boolean
}> = ({
  character,
  heroEndurance,
  opponentEndurance,
  opponent,
  chance,
  opponentIsTouched,
  heroIsTouched,
}) => (
  <>
    <AttackerRow
      name={opponent.name}
      agility={opponent?.abilities?.agility ?? 0}
      endurance={opponentEndurance}
      isTouched={opponentIsTouched}
    />
    <Space count={2} />
    <Title>VS.</Title>
    <Space />
    <AttackerRow
      name={character.name}
      agility={character?.abilities?.agility ?? 0}
      endurance={heroEndurance}
      isTouched={heroIsTouched}
    />
    <Paragraph align="center">Chance {chance}</Paragraph>
  </>
)
