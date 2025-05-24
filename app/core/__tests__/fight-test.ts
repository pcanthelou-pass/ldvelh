import { Attacker, D6, D6x2, Fight } from '@core/classes'

describe('Given a D6', () => {
  it('When launched it has a result between 1 and 6', () => {
    const d6 = D6()
    expect(d6 <= 6).toBeTruthy()
    expect(1 <= d6).toBeTruthy()
  })
  it('When launched D6x2 it has a result between 2 and 12', () => {
    const d6x2 = D6x2()
    expect(d6x2 <= 12).toBeTruthy()
    expect(2 <= d6x2).toBeTruthy()
  })
})

describe('Given a Hero and an Opponent', () => {
  describe('When fighting Then chain round and each round make a roll and describe attack result', () => {
    it('When both attacks are the same then nothing happen and the fight goes to next round', () => {
      const fight = new Fight(
        new Attacker({ agility: 2, endurance: 4, attack: () => 2 }),
        new Attacker({ agility: 2, endurance: 4, attack: () => 2 }),
      )
      fight.resolveRound()
      expect(fight.canContinue()).toBeTruthy()
      expect(fight.heroEndurance()).toBe(4)
      expect(fight.opponentEndurance()).toBe(4)
    })
    it('When Opponent attack > Hero attack then the Hero is wounded and the fight goes to next round', () => {
      const fight = new Fight(
        new Attacker({ agility: 2, endurance: 4, attack: () => 4 }),
        new Attacker({ agility: 2, endurance: 4, attack: () => 2 }),
      )
      fight.resolveRound()
      expect(fight.canContinue()).toBeTruthy()
      expect(fight.heroEndurance()).toBe(2)
      expect(fight.opponentEndurance()).toBe(4)
    })
    it('When Opponent attack < Hero attack then the Opponent is wounded and the fight goes to next round', () => {
      const fight = new Fight(
        new Attacker({ agility: 2, endurance: 4, attack: () => 2 }),
        new Attacker({ agility: 2, endurance: 4, attack: () => 4 }),
      )
      fight.resolveRound()
      expect(fight.canContinue()).toBeTruthy()
      expect(fight.heroEndurance()).toBe(4)
      expect(fight.opponentEndurance()).toBe(2)
    })
    it('When Opponent has 0 endurance at end of round the fight end', () => {
      const fight = new Fight(
        new Attacker({ agility: 2, endurance: 2, attack: () => 2 }),
        new Attacker({ agility: 2, endurance: 4, attack: () => 4 }),
      )
      fight.resolveRound()
      expect(fight.canContinue()).toBeFalsy()
      expect(fight.heroEndurance()).toBe(4)
      expect(fight.opponentEndurance()).toBe(0)
    })
    it('When Hero has 0 endurance at end of round the fight end', () => {
      const fight = new Fight(
        new Attacker({ agility: 2, endurance: 2, attack: () => 4 }),
        new Attacker({ agility: 2, endurance: 4, attack: () => 2 }),
      )
      fight.resolveRound()
      fight.resolveRound()
      expect(fight.canContinue()).toBeFalsy()
      expect(fight.heroEndurance()).toBe(0)
      expect(fight.opponentEndurance()).toBe(2)
    })
  })
})
