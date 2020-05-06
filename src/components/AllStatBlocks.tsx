import React from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@material-ui/core'
import { StyledPaper, StyledTableCell } from './common'
import {
  Ability,
  Attack,
  Skill,
  SavingThrow
} from '../models'
import {
  getAbilityMod,
  formatMod,
  lookupAbilityScore,
  calculateSkillMod,
  calculateSavingThrow,
  calculateAttackMod,
  calculateArmorClass
} from '../rules'

interface AllStatBlocksProps {
  characterData: any
}

export const AllStatBlocks = ({ characterData }: AllStatBlocksProps) => {
  characterData = characterData.default
  return (
    <Box display="flex" flexWrap="wrap">
      <StyledPaper>
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
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>{ characterData.general.name }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Player name</StyledTableCell>
                <StyledTableCell>{ characterData.general.playerName }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Level (xp)</StyledTableCell>
                <StyledTableCell>{ characterData.general.level } ({ characterData.general.experience })</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Ancestry</StyledTableCell>
                <StyledTableCell>{ characterData.general.ancestry }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Background</StyledTableCell>
                <StyledTableCell>{ characterData.general.background }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Class</StyledTableCell>
                <StyledTableCell>{ characterData.general.class }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Alignment</StyledTableCell>
                <StyledTableCell>{ characterData.general.alignment }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Deity</StyledTableCell>
                <StyledTableCell>{ characterData.general.deity }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>{ characterData.general.age }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>{ characterData.general.gender }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Languages</StyledTableCell>
                <StyledTableCell>{ characterData.general.languages.join(', ') }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Speed</StyledTableCell>
                <StyledTableCell>{ characterData.general.speed }</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
        <h3>Abilities</h3>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Mod</StyledTableCell>
                <StyledTableCell>Score</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                characterData.abilities.map((ability: Ability) => (
                  <TableRow key={ability.name}>
                    <StyledTableCell>{ ability.name }</StyledTableCell>
                    <StyledTableCell>{ formatMod(getAbilityMod(ability.score)) }</StyledTableCell>
                    <StyledTableCell>{ ability.score }</StyledTableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
        <h3>Skills</h3>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Attribute</StyledTableCell>
                <StyledTableCell>Proficiency</StyledTableCell>
                <StyledTableCell>From items</StyledTableCell>
                <StyledTableCell><strong>Total</strong></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          {
            characterData.skills.map((skill: Skill) => (
              <TableRow key={skill.name}>
                <StyledTableCell>{ skill.name }</StyledTableCell>
                <StyledTableCell>{ skill.ability }</StyledTableCell>
                <StyledTableCell>{ skill.proficiency }</StyledTableCell>
                <StyledTableCell>{ skill.fromItems }</StyledTableCell>
                <StyledTableCell><strong>{ calculateSkillMod(skill, characterData.general.level, characterData.abilities) }</strong></StyledTableCell>
              </TableRow>
            ))
          }
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
        <h3>Defense</h3>
        <h4>Health</h4>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Max</StyledTableCell>
                <StyledTableCell>Current</StyledTableCell>
                <StyledTableCell>Temp</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>{ characterData.defense.health.max }</StyledTableCell>
                <StyledTableCell>{ characterData.defense.health.current }</StyledTableCell>
                <StyledTableCell>{ characterData.defense.health.temporary }</StyledTableCell>
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
                <StyledTableCell>Wearing</StyledTableCell>
                <StyledTableCell>{ characterData.defense.armorClass.wearing }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Dex. cap</StyledTableCell>
                <StyledTableCell>{ characterData.defense.armorClass.dexterityCap }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Proficiency</StyledTableCell>
                <StyledTableCell>{ characterData.defense.armorClass.proficiency }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Item bonus</StyledTableCell>
                <StyledTableCell>{ characterData.defense.armorClass.fromItems }</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Total</StyledTableCell>
                <StyledTableCell><strong>{ calculateArmorClass(characterData.general.level, characterData.abilities, characterData.defense.armorClass) }</strong></StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <h4>Saving Throws</h4>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Ability</StyledTableCell>
                <StyledTableCell>Proficiency</StyledTableCell>
                <StyledTableCell>Item bonus</StyledTableCell>
                <StyledTableCell><strong>Total</strong></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                characterData.defense.savingThrows.map((save: SavingThrow) => (
                  <TableRow key={save.name}>
                    <StyledTableCell>{ save.name }</StyledTableCell>
                    <StyledTableCell>{ save.ability }</StyledTableCell>
                    <StyledTableCell>{ save.proficiency }</StyledTableCell>
                    <StyledTableCell>{ save.fromItems }</StyledTableCell>
                    <StyledTableCell>{ calculateSavingThrow(save, characterData.general.level, characterData.abilities) }</StyledTableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
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
      </StyledPaper>
      <StyledPaper>
        <h3>Class Features</h3>
        <ul>
          { characterData.classFeatures.map((feat: string) => <li key={feat}>{ feat }</li>) }
        </ul>
      </StyledPaper>
      <StyledPaper>
        <h3>Gear</h3>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>PP</StyledTableCell>
                <StyledTableCell>GP</StyledTableCell>
                <StyledTableCell>SP</StyledTableCell>
                <StyledTableCell>CP</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>{ characterData.gear.money.pp }</StyledTableCell>
                <StyledTableCell>{ characterData.gear.money.gp }</StyledTableCell>
                <StyledTableCell>{ characterData.gear.money.sp }</StyledTableCell>
                <StyledTableCell>{ characterData.gear.money.cp }</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <ul>
          { characterData.gear.items.map((item: string) => <li key={item}>{ item }</li>) }
        </ul>
      </StyledPaper>
      <StyledPaper>
        <h3>Attacks</h3>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Proficiency</StyledTableCell>
                <StyledTableCell>Attack ability</StyledTableCell>
                <StyledTableCell>To hit item bonus</StyledTableCell>
                <StyledTableCell><strong>Attack Total</strong></StyledTableCell>
                <StyledTableCell>Damage die</StyledTableCell>
                <StyledTableCell>Damage ability</StyledTableCell>
                <StyledTableCell>Damage type</StyledTableCell>
                <StyledTableCell>Damage bonus</StyledTableCell>
                <StyledTableCell>Traits</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                characterData.offense.attacks.map((attack: Attack) => (
                  <TableRow key={attack.name}>
                    <StyledTableCell>{ attack.name }</StyledTableCell>
                    <StyledTableCell>{ attack.toHit.proficiency }</StyledTableCell>
                    <StyledTableCell>{ attack.toHit.ability } ({ attack.toHit.ability !== '' ? getAbilityMod(lookupAbilityScore(characterData.abilities, attack.toHit.ability)) : '' })</StyledTableCell>
                    <StyledTableCell>{ attack.toHit.fromItems }</StyledTableCell>
                    <StyledTableCell><strong>{ calculateAttackMod(attack, characterData.general.level, characterData.abilities) }</strong></StyledTableCell>
                    <StyledTableCell>{ attack.damage.die }</StyledTableCell>
                    <StyledTableCell>{ attack.damage.ability } ({ attack.damage.ability !== '' ? getAbilityMod(lookupAbilityScore(characterData.abilities, attack.damage.ability)) : '' })</StyledTableCell>
                    <StyledTableCell>{ attack.damage.damageType }</StyledTableCell>
                    <StyledTableCell>{ attack.damage.other }</StyledTableCell>
                    <StyledTableCell><Tooltip title={ attack.damage.traits }><span>?</span></Tooltip></StyledTableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <h4>Class DC: { characterData.offense.classDC }</h4>
      </StyledPaper>
    </Box>
  )
}
