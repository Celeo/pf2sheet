import {
  getAbilityMod,
  formatMod,
  getProficiencyMod,
  lookupAbilityScore,
  calculateSkillMod,
  calculateAttackMod,
  calculateArmorClass,
  calculateSavingThrow
} from './rules'

describe('getAbilityMod', () => {
  it('produces the correct values', () => {
    expect(getAbilityMod(1)).toBe(-5)
    expect(getAbilityMod(10)).toBe(0)
    expect(getAbilityMod(20)).toBe(5)
    expect(getAbilityMod(30)).toBe(10)
  })
})

describe('formatMod', () => {
  it('produces the correct values', () => {
    expect(formatMod(-5)).toBe("-5")
    expect(formatMod(0)).toBe("0")
    expect(formatMod(5)).toBe("+5")
  })
})

describe('getProficiencyMod', () => {
  it('produces the correct values', () => {
    expect(getProficiencyMod("", 0)).toBe(0)
    expect(getProficiencyMod("", 1)).toBe(0)
    expect(getProficiencyMod("T", 1)).toBe(3)
    expect(getProficiencyMod("T", 2)).toBe(4)
    expect(getProficiencyMod("E", 1)).toBe(5)
    expect(getProficiencyMod("M", 1)).toBe(7)
    expect(getProficiencyMod("L", 1)).toBe(9)
  })
})

describe('lookupAbilityScore', () => {
  it('produces the correct values', () => {
    expect(lookupAbilityScore([{
      name: "a",
      score: 10
    }, {
      name: "b",
      score: 12
    }], "b")).toBe(12)
  })
})

describe('calculateSkillMod', () => {
  it('produces the correct values', () => {
    expect(calculateSkillMod({
      name: "Arcana",
      ability: "Intelligence",
      proficiency: "T",
      fromItems: 1
    }, 2, [{
      name: "Intelligence",
      score: 14
    }])).toBe(7)

    expect(calculateSkillMod({
      name: "Arcana",
      ability: "Intelligence",
      proficiency: "",
      fromItems: 0
    }, 1, [{
      name: "Intelligence",
      score: 10
    }])).toBe(0)
  })
})

describe('calculateAttackMod', () => {
  it('produces the correct values', () => {
    expect(calculateAttackMod({
      name: "Sword",
      toHit: {
        proficiency: "E",
        ability: "Strength",
        fromItems: 3
      },
      damage: {
        die: "",
        ability: "",
        damageType: "",
        other: 0,
        traits: ""
      }
    }, 1, [{
      name: "Strength",
      score: 20
    }])).toBe(13)
  })
})

describe('calculateArmorClass', () => {
  it('produces the correct values', () => {
    expect(calculateArmorClass(1, [{
      name: "Dexterity",
      score: 14
    }], {
      wearing: "Something",
      proficiency: "T",
      dexterityCap: 4,
      fromItems: 1
    })).toBe(16)
  })
})

describe('calculateSavingThrow', () => {
  it('produces the correct values', () => {
    expect(calculateSavingThrow({
      name: "Fortitude",
      ability: "Constitution",
      proficiency: "T",
      fromItems: 2
    }, 3, [{
      name: "Constitution",
      score: 16
    }])).toBe(10)
  })
})
