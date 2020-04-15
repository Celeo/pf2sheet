import { Ability, Attack, Skill, ArmorClass, SavingThrow } from './characterDataModels'

// TODO use this
export enum ProficiencyType {
  Untrained = "",
  Trained = "T",
  Expert = "E",
  Master = "M",
  Legendary = "L"
}

export const getAbilityMod = (score: number): number => {
  return Math.floor((score - 10) / 2)
}

export const formatMod = (mod: number): string => {
  if (mod > 0) {
    return `+${mod}`
  }
  return mod.toString()
}

export const getProficiencyMod = (proficiency: string, level: number): number => {
  let val = 0
  switch (proficiency) {
    case "": {
      return 0
    }
    case "T": {
      val = 2
      break
    }
    case "E": {
      val = 4
      break
    }
    case "M": {
      val = 6
      break
    }
    case "L": {
      val = 8
      break
    }
  }
  return val + level
}

export const lookupAbilityScore = (abilities: Array<Ability>, name: string): number => {
  return abilities.filter((a: Ability) => a.name === name)[0].score
}

export const calculateSkillMod = (skill: Skill, level: number, abilities: Array<Ability>): number => {
  let total = 0
  total += getAbilityMod(lookupAbilityScore(abilities, skill.ability))
  total += getProficiencyMod(skill.proficiency, level)
  total += skill.fromItems
  return total
}

export const calculateAttackMod = (attack: Attack, level: number, abilities: Array<Ability>): number => {
  let total = 0
  total += getAbilityMod(lookupAbilityScore(abilities, attack.toHit.ability))
  total += getProficiencyMod(attack.toHit.proficiency, level)
  total += attack.toHit.fromItems
  return total
}

export const calculateArmorClass = (level: number, abilities: Array<Ability>, armorClass: ArmorClass): number => {
  let total = 10
  const fromDex = getAbilityMod(lookupAbilityScore(abilities, "Dexterity"))
  total += Math.min(fromDex, armorClass.dexterityCap)
  total += getProficiencyMod(armorClass.proficiency, level)
  total += armorClass.fromItems
  return total
}

export const calculateSavingThrow = (save: SavingThrow, level: number, abilities: Array<Ability>): number => {
  let total = 0
  total += getAbilityMod(lookupAbilityScore(abilities, save.ability))
  total += getProficiencyMod(save.proficiency, level)
  total += save.fromItems
  return total
}

export class SearchableValue {
  public name: string
  public getValue: (characterData: any) => string

  public constructor(name: string, getValue: (characterData: any) => string) {
    this.name = name
    this.getValue = getValue
  }
}

const createSF_Abilities = (): Array<SearchableValue> => {
  const abilities = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
  ]
  return abilities.map((abilityName) => new SearchableValue(abilityName, (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, abilityName)
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }))
}

const createSF_Skills = (): Array<SearchableValue> => {
  const skills = [
    'Acrobatics',
    'Arcana',
    'Athletics',
    'Crafting',
    'Deception',
    'Diplomacy',
    'Intimidation',
    'Lore',
    'Medicine',
    'Nature',
    'Occultism',
    'Perception',
    'Performance',
    'Religion',
    'Society',
    'Stealth',
    'Survival',
    'Thievery',
    'Health'
  ]
  return skills.map((skillName) => new SearchableValue(skillName, (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === skillName)[0]
    return `Mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }))
}

export const allSearchableFields = [
  ...createSF_Abilities(),

  ...createSF_Skills(),

  new SearchableValue('Armor', (characterData: any) => {
    const data = characterData.default
    return `${calculateArmorClass(data.general.level, data.abilities, data.defense.armorClass)}`
  }),

  new SearchableValue('Fortitude', (characterData: any) => {
    const data = characterData.default
    const save = data.defense.savingThrows.filter((save: SavingThrow) => save.name === 'Fortitude')[0]
    return `${calculateSavingThrow(save, data.general.level, data.abilities)}`
  }),
  new SearchableValue('Reflex', (characterData: any) => {
    const data = characterData.default
    const save = data.defense.savingThrows.filter((save: SavingThrow) => save.name === 'Reflex')[0]
    return `${calculateSavingThrow(save, data.general.level, data.abilities)}`
  }),
  new SearchableValue('Will', (characterData: any) => {
    const data = characterData.default
    const save = data.defense.savingThrows.filter((save: SavingThrow) => save.name === 'Will')[0]
    return `${calculateSavingThrow(save, data.general.level, data.abilities)}`
  }),
]
