import { Fight } from '@core'

describe('Given a Hero and an Opponent', () => {
  describe('When fighting Then chain round and each round make a roll and describe attack result', () => {
    it('When both attacks are the same then nothing happen and the fight goes to next round', () => {
      const fight = new Fight(
        {
          name: 'Opponent',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 2,
          hit: () => 2,
        },
        {
          name: 'Hero',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 2,
          hit: () => 2,
        },
      )
      fight.resolveRound()
      expect(fight.canContinue).toBeTruthy()
      expect(fight.heroEndurance).toBe(4)
      expect(fight.opponentEndurance).toBe(4)
    })
    it('When Opponent attack > Hero attack then the Hero is wounded and the fight goes to next round', () => {
      const fight = new Fight(
        {
          name: 'Opponent',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 24,
          hit: () => 2,
        },
        {
          name: 'Hero',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 2,
          hit: () => 2,
        },
      )
      fight.resolveRound()
      expect(fight.canContinue).toBeTruthy()
      expect(fight.heroIsDead).toBeFalsy()
      expect(fight.opponentEndurance).toBe(4)
    })
    it('When Opponent attack < Hero attack then the Opponent is wounded and the fight goes to next round', () => {
      const fight = new Fight(
        {
          name: 'Opponent',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 2,
          hit: () => 2,
        },
        {
          name: 'Hero',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 24,
          hit: () => 2,
        },
      )
      fight.resolveRound()
      expect(fight.canContinue).toBeTruthy()
      expect(fight.heroEndurance).toBe(4)
      expect(fight.opponentEndurance).toBe(2)
      expect(fight.opponentIsDead).toBeFalsy()
    })
    it('When Opponent has 0 endurance at end of round the fight end', () => {
      const fight = new Fight(
        {
          name: 'Opponent',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 2,
          hit: () => 2,
        },
        {
          name: 'Hero',
          abilities: {
            agility: 2,
            endurance: 4,
            chance: 0,
          },
          attack: () => 24,
          hit: () => 4,
        },
      )
      fight.resolveRound()
      expect(fight.canContinue).toBeFalsy()
      expect(fight.heroEndurance).toBe(4)
      expect(fight.opponentEndurance).toBe(0)
      expect(fight.opponentIsDead).toBeTruthy()
    })
  })
})
