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
  public attribute: string
  public proficiency: string
  public fromItems: number

  public constructor(
    name: string,
    attribute: string,
    proficiency: string,
    fromItems: number
  ) {
    this.name = name
    this.attribute = attribute
    this.proficiency = proficiency
    this.fromItems = fromItems
  }
}
