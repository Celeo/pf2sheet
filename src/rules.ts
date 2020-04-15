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

export const allSearchableFields = [
  new SearchableValue('Strength', (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, 'Strength')
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }),
  new SearchableValue('Dexterity', (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, 'Dexterity')
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }),
  new SearchableValue('Constitution', (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, 'Constitution')
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }),
  new SearchableValue('Intelligence', (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, 'Intelligence')
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }),
  new SearchableValue('Wisdom', (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, 'Wisdom')
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }),
  new SearchableValue('Charisma', (characterData: any) => {
    const score = lookupAbilityScore(characterData.default.abilities, 'Charisma')
    return `Score: ${score}, mod ${getAbilityMod(score)}`
  }),

  new SearchableValue('Acrobatics', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Acrobatics')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Arcana', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Arcana')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Athletics', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Athletics')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Crafting', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Crafting')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Deception', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Deception')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Diplomacy', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Diplomacy')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Intimidation', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Intimidation')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Lore', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Lore')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Medicine', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Medicine')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Nature', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Nature')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Occultism', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Occultism')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Perception', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Perception')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Performance', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Performance')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Religion', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Religion')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Society', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Society')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Stealth', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Stealth')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Survival', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Survival')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Thievery', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Thievery')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),
  new SearchableValue('Health', (characterData: any) => {
    const data = characterData.default
    const skill = data.skills.filter((skill: Skill) => skill.name === 'Health')[0]
    return `Skill mod ${formatMod(calculateSkillMod(skill, data.general.level, data.abilities))}`
  }),

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
