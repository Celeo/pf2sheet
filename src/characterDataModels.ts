export class Ability {
  public name: string
  public score: number

  public constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }
}

export class Skill {
  public name: string
  public ability: string
  public proficiency: string
  public fromItems: number

  public constructor(
    name: string,
    ability: string,
    proficiency: string,
    fromItems: number
  ) {
    this.name = name
    this.ability = ability
    this.proficiency = proficiency
    this.fromItems = fromItems
  }
}

export class AttackToHit {
  public proficiency: string
  public ability: string
  public fromItems: number

  public constructor(proficiency: string, ability: string, fromItems: number) {
    this.proficiency = proficiency
    this.ability = ability
    this.fromItems = fromItems
  }
}

export class AttackDamage {
  public die: string
  public ability: string
  public damageType: string
  public other: number
  public traits: string

  public constructor(
    die: string,
    ability: string,
    damageType: string,
    other: number,
    traits: string
  ) {
    this.die = die
    this.ability = ability
    this.damageType = damageType
    this.other = other
    this.traits = traits
  }
}

export class Attack {
  public name: string
  public toHit: AttackToHit
  public damage: AttackDamage

  public constructor(name: string, toHit: AttackToHit, damage: AttackDamage) {
    this.name = name
    this.toHit = toHit
    this.damage = damage
  }
}

export class Health {
  public max: number
  public current: number
  public temporary: number

  public constructor(
    max: number,
    current: number,
    temporary: number
  ) {
    this.max = max
    this.current = current
    this.temporary = temporary
  }
}

export class ArmorClass {
  public wearing: string
  public dexterityCap: number
  public proficiency: string
  public fromItems: number

  public constructor(
    wearing: string,
    dexterityCap: number,
    proficiency: string,
    fromItems: number
  ) {
    this.wearing = wearing
    this.dexterityCap = dexterityCap
    this.proficiency = proficiency
    this.fromItems = fromItems
  }
}

export class Defense {
  public health: Health
  public armorClass: ArmorClass

  public constructor(health: Health, armorClass: ArmorClass) {
    this.health = health
    this.armorClass = armorClass
  }
}
