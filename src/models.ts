export interface Ability {
  name: string;
  score: number;
}

export interface Skill {
  name: string;
  ability: string;
  proficiency: string;
  fromItems: number;
}

export interface AttackToHit {
  proficiency: string;
  ability: string;
  fromItems: number;
}

export interface AttackDamage {
  die: string;
  ability: string;
  damageType: string;
  other: number;
  traits: string;
}

export interface Attack {
  name: string;
  toHit: AttackToHit;
  damage: AttackDamage;
}

export interface Health {
  max: number;
  current: number;
  temporary: number;
}

export interface ArmorClass {
  wearing: string;
  dexterityCap: number;
  proficiency: string;
  fromItems: number;
}

export interface SavingThrow {
  name: string;
  ability: string;
  proficiency: string;
  fromItems: number;
}

export interface Defense {
  health: Health;
  armorClass: ArmorClass;
  savingThrows: Array<SavingThrow>;
}
