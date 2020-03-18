import { Ability, Attack, Skill } from './characterDataModels'

export const getAbilityMod = (score: number): number => Math.floor((score - 10) / 2)

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

export const lookupAbilityScore = (abilities: Array<Ability>, name: string): number =>
  abilities.filter((a: Ability) => a.name === name)[0].score

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