import { Fight } from '../fight'

// fight.ts                         |   70.58 |       40 |      70 |   70.58 | 39-57

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
      fight.doResolveRound()
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
      fight.doResolveRound()
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
      fight.doResolveRound()
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
      fight.doResolveRound()
      expect(fight.canContinue).toBeFalsy()
      expect(fight.heroEndurance).toBe(4)
      expect(fight.opponentEndurance).toBe(0)
      expect(fight.opponentIsDead).toBeTruthy()
    })
    it('Hero can be wounded', () => {
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
      fight.doWoundHero()
      expect(fight.heroWound).toBe(2)
    })
    it('React to success chance roll on successful hit', () => {
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
      fight.doResolveRound()
      expect(fight.heroHasBeenTouched).toBeFalsy()
      expect(fight.opponentHasBeenTouched).toBeTruthy()
      fight.doSuccessChance()
      expect(fight.heroWound).toBe(0)
      expect(fight.opponentWound).toBe(4)
    })
    it('React to failed chance roll on successful hit', () => {
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
      fight.doResolveRound()
      expect(fight.heroHasBeenTouched).toBeFalsy()
      expect(fight.opponentHasBeenTouched).toBeTruthy()
      fight.doFailChance()
      expect(fight.heroWound).toBe(0)
      expect(fight.opponentWound).toBe(1)
    })
    it('React to success chance roll on failed hit', () => {
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
      fight.doResolveRound()
      expect(fight.heroHasBeenTouched).toBeTruthy()
      expect(fight.opponentHasBeenTouched).toBeFalsy()
      fight.doSuccessChance()
      expect(fight.heroWound).toBe(1)
      expect(fight.opponentWound).toBe(0)
    })
    it('React to failed chance roll on failed hit', () => {
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
      fight.doResolveRound()
      expect(fight.heroHasBeenTouched).toBeTruthy()
      expect(fight.opponentHasBeenTouched).toBeFalsy()
      fight.doFailChance()
      expect(fight.heroWound).toBe(3)
      expect(fight.opponentWound).toBe(0)
    })
  })
})
