import React from 'react'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@material-ui/core'
import './App.css'
import {
  Ability,
  Attack,
  Skill,
  SavingThrow
} from './characterDataModels'
import {
  getAbilityMod,
  formatMod,
  lookupAbilityScore,
  calculateSkillMod,
  calculateSavingThrow,
  calculateAttackMod,
  calculateArmorClass
} from './rules'
import * as characterData from './data.json'

const App = () => {
  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        <Paper>
          <h3>General</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{ characterData.general.name }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Player name</TableCell>
                  <TableCell>{ characterData.general.playerName }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Level (xp)</TableCell>
                  <TableCell>{ characterData.general.level } ({ characterData.general.experience })</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ancestry</TableCell>
                  <TableCell>{ characterData.general.ancestry }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Background</TableCell>
                  <TableCell>{ characterData.general.background }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>{ characterData.general.class }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Alignment</TableCell>
                  <TableCell>{ characterData.general.alignment }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Deity</TableCell>
                  <TableCell>{ characterData.general.deity }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Age</TableCell>
                  <TableCell>{ characterData.general.age }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>{ characterData.general.gender }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Languages</TableCell>
                  <TableCell>{ characterData.general.languages.join(', ') }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Speed</TableCell>
                  <TableCell>{ characterData.general.speed }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hero points</TableCell>
                  <TableCell>{ characterData.general.heroPoints }</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper>
          <h3>Abilities</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mod</TableCell>
                  <TableCell>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  characterData.abilities.map((ability: Ability) => (
                    <TableRow key={ability.name}>
                      <TableCell>{ ability.name }</TableCell>
                      <TableCell>{ formatMod(getAbilityMod(ability.score)) }</TableCell>
                      <TableCell>{ ability.score }</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper>
          <h3>Skills</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Attribute</TableCell>
                  <TableCell>Proficiency</TableCell>
                  <TableCell>From items</TableCell>
                  <TableCell><strong>Total</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
            {
              characterData.skills.map((skill: Skill) => (
                <TableRow key={skill.name}>
                  <TableCell>{ skill.name }</TableCell>
                  <TableCell>{ skill.ability }</TableCell>
                  <TableCell>{ skill.proficiency }</TableCell>
                  <TableCell>{ skill.fromItems }</TableCell>
                  <TableCell><strong>{ calculateSkillMod(skill, characterData.general.level, characterData.abilities) }</strong></TableCell>
                </TableRow>
              ))
            }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper>
          <h3>Defense</h3>
          <h4>Health</h4>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Max</TableCell>
                  <TableCell>Current</TableCell>
                  <TableCell>Temp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{ characterData.defense.health.max }</TableCell>
                  <TableCell>{ characterData.defense.health.current }</TableCell>
                  <TableCell>{ characterData.defense.health.temporary }</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h4>Armor Class</h4>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Wearing</TableCell>
                  <TableCell>{ characterData.defense.armorClass.wearing }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dex. cap</TableCell>
                  <TableCell>{ characterData.defense.armorClass.dexterityCap }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Proficiency</TableCell>
                  <TableCell>{ characterData.defense.armorClass.proficiency }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Item bonus</TableCell>
                  <TableCell>{ characterData.defense.armorClass.fromItems }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell><strong>{ calculateArmorClass(characterData.general.level, characterData.abilities, characterData.defense.armorClass) }</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h4>Saving Throws</h4>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Ability</TableCell>
                  <TableCell>Proficiency</TableCell>
                  <TableCell>Item bonus</TableCell>
                  <TableCell><strong>Total</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  characterData.defense.savingThrows.map((save: SavingThrow) => (
                    <TableRow key={save.name}>
                      <TableCell>{ save.name }</TableCell>
                      <TableCell>{ save.ability }</TableCell>
                      <TableCell>{ save.proficiency }</TableCell>
                      <TableCell>{ save.fromItems }</TableCell>
                      <TableCell>{ calculateSavingThrow(save, characterData.general.level, characterData.abilities) }</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper>
          <h3>Feats</h3>
          <h4>Ancestry</h4>
          <ul>
            { characterData.feats.ancestry.map((feat: string) => <li key={feat}>{ feat }</li>) }
          </ul>
          <h4>Class</h4>
          <ul>
            { characterData.feats.class.map((feat: string) => <li key={feat}>{ feat }</li>) }
          </ul>
          <h4>Skill</h4>
          <ul>
            { characterData.feats.skill.map((feat: string) => <li key={feat}>{ feat }</li>) }
          </ul>
          <h4>General</h4>
          <ul>
            { characterData.feats.general.map((feat: string) => <li key={feat}>{ feat }</li>) }
          </ul>
        </Paper>
        <Paper>
          <h3>Class Features</h3>
          <ul>
            { characterData.classFeatures.map((feat: string) => <li key={feat}>{ feat }</li>) }
          </ul>
        </Paper>
        <Paper>
          <h3>Gear</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>PP</TableCell>
                  <TableCell>GP</TableCell>
                  <TableCell>SP</TableCell>
                  <TableCell>CP</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{ characterData.gear.money.pp }</TableCell>
                  <TableCell>{ characterData.gear.money.gp }</TableCell>
                  <TableCell>{ characterData.gear.money.sp }</TableCell>
                  <TableCell>{ characterData.gear.money.cp }</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <ul>
            { characterData.gear.items.map((item: string) => <li key={item}>{ item }</li>) }
          </ul>
        </Paper>
        <Paper>
          <h3>Attacks</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Proficiency</TableCell>
                  <TableCell>Attack ability</TableCell>
                  <TableCell>To hit item bonus</TableCell>
                  <TableCell><strong>Attack Total</strong></TableCell>
                  <TableCell>Damage die</TableCell>
                  <TableCell>Damage ability</TableCell>
                  <TableCell>Damage type</TableCell>
                  <TableCell>Damage bonus</TableCell>
                  <TableCell>Traits</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  characterData.offense.attacks.map((attack: Attack) => (
                    <TableRow key={attack.name}>
                      <TableCell>{ attack.name }</TableCell>
                      <TableCell>{ attack.toHit.proficiency }</TableCell>
                      <TableCell>{ attack.toHit.ability } ({ attack.toHit.ability !== '' ? getAbilityMod(lookupAbilityScore(characterData.abilities, attack.toHit.ability)) : '' })</TableCell>
                      <TableCell>{ attack.toHit.fromItems }</TableCell>
                      <TableCell><strong>{ calculateAttackMod(attack, characterData.general.level, characterData.abilities) }</strong></TableCell>
                      <TableCell>{ attack.damage.die }</TableCell>
                      <TableCell>{ attack.damage.ability } ({ attack.damage.ability !== '' ? getAbilityMod(lookupAbilityScore(characterData.abilities, attack.damage.ability)) : '' })</TableCell>
                      <TableCell>{ attack.damage.damageType }</TableCell>
                      <TableCell>{ attack.damage.other }</TableCell>
                      <TableCell><Tooltip title={ attack.damage.traits }><span>?</span></Tooltip></TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  )
}

export default App
