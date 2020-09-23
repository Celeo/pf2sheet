import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { StyledPaper, StyledTableCell } from './common';
import { Attack, SavingThrow } from '../models';
import {
  getAbilityMod,
  lookupAbilityScore,
  calculateArmorClass,
  calculateSavingThrow,
  calculateAttackMod,
  formatMod,
} from '../rules';

interface SectionProps {
  characterData: any;
}

export default (props: SectionProps) => {
  const characterData = props.characterData.default;
  return (
    <div>
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
                <StyledTableCell>
                  <strong>Attack Total</strong>
                </StyledTableCell>
                <StyledTableCell>Damage die</StyledTableCell>
                <StyledTableCell>Damage ability</StyledTableCell>
                <StyledTableCell>Damage bonus</StyledTableCell>
                <StyledTableCell>Damage type</StyledTableCell>
                <StyledTableCell>Traits</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characterData.offense.attacks.map((attack: Attack) => (
                <TableRow key={attack.name}>
                  <StyledTableCell>{attack.name}</StyledTableCell>
                  <StyledTableCell>{attack.toHit.proficiency}</StyledTableCell>
                  <StyledTableCell>
                    {attack.toHit.ability} (
                    {attack.toHit.ability !== ''
                      ? getAbilityMod(
                          lookupAbilityScore(
                            characterData.abilities,
                            attack.toHit.ability
                          )
                        )
                      : ''}
                    )
                  </StyledTableCell>
                  <StyledTableCell>{attack.toHit.fromItems}</StyledTableCell>
                  <StyledTableCell>
                    <strong>
                      {formatMod(
                        calculateAttackMod(
                          attack,
                          characterData.general.level,
                          characterData.abilities
                        )
                      )}
                    </strong>
                    (
                    <strong>
                      {formatMod(
                        calculateAttackMod(
                          attack,
                          characterData.general.level,
                          characterData.abilities
                        ) - 4
                      )}
                    </strong>
                    /
                    <strong>
                      {formatMod(
                        calculateAttackMod(
                          attack,
                          characterData.general.level,
                          characterData.abilities
                        ) - 8
                      )}
                    </strong>
                    )
                  </StyledTableCell>
                  <StyledTableCell>{attack.damage.die}</StyledTableCell>
                  {attack.damage.ability ? (
                    <StyledTableCell>
                      {attack.damage.ability} (
                      {attack.damage.ability !== ''
                        ? getAbilityMod(
                            lookupAbilityScore(
                              characterData.abilities,
                              attack.damage.ability
                            )
                          )
                        : ''}
                      )
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell />
                  )}
                  <StyledTableCell>{attack.damage.other}</StyledTableCell>
                  <StyledTableCell>{attack.damage.damageType}</StyledTableCell>
                  <StyledTableCell>
                    {attack.damage.traits && (
                      <Tooltip title={attack.damage.traits}>
                        <span style={{ fontSize: '80%' }}>Hover over</span>
                      </Tooltip>
                    )}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h4>Class DC: {characterData.offense.classDC}</h4>
      </StyledPaper>
      <Box display="flex" flexWrap="wrap">
        <StyledPaper style={{ flexGrow: 1 }}>
          <h4>Max Health: {characterData.defense.health.max}</h4>
        </StyledPaper>
        <StyledPaper style={{ flexGrow: 3 }}>
          <h4>Armor Class</h4>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell />
                  <StyledTableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>Wearing</StyledTableCell>
                  <StyledTableCell>
                    {characterData.defense.armorClass.wearing}
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell>Dex. cap</StyledTableCell>
                  <StyledTableCell>
                    {characterData.defense.armorClass.dexterityCap}
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell>Proficiency</StyledTableCell>
                  <StyledTableCell>
                    {characterData.defense.armorClass.proficiency}
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell>Item bonus</StyledTableCell>
                  <StyledTableCell>
                    {characterData.defense.armorClass.fromItems}
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell>Total</StyledTableCell>
                  <StyledTableCell>
                    <strong>
                      {calculateArmorClass(
                        characterData.general.level,
                        characterData.abilities,
                        characterData.defense.armorClass
                      )}
                    </strong>
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
        <StyledPaper style={{ flexGrow: 3 }}>
          <h4>Saving Throws</h4>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Ability</StyledTableCell>
                  <StyledTableCell>Proficiency</StyledTableCell>
                  <StyledTableCell>Item bonus</StyledTableCell>
                  <StyledTableCell>
                    <strong>Total</strong>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characterData.defense.savingThrows.map((save: SavingThrow) => (
                  <TableRow key={save.name}>
                    <StyledTableCell>{save.name}</StyledTableCell>
                    <StyledTableCell>{save.ability}</StyledTableCell>
                    <StyledTableCell>{save.proficiency}</StyledTableCell>
                    <StyledTableCell>{save.fromItems}</StyledTableCell>
                    <StyledTableCell>
                      {calculateSavingThrow(
                        save,
                        characterData.general.level,
                        characterData.abilities
                      )}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
      </Box>
      <StyledPaper>
        <h3>{'Manuevers & Actions'}</h3>
        <Typography variant="body1">
          <ul>
            <li>
              Crane Stance - Enter the stance to gain +1 AC but only make 1d6
              bludgeoning attacks (agile/finesse/nonlethal/unarmed)
            </li>
            <li>
              Ki Strike - Gain 1 focus point; can cast <i>Ki Strike</i> to
              either attack unarmed or Flurry, gain +1 statu sbonus to attack
              rolls and deal +1d6 damage of either
              force/lawful/negative/positive.
            </li>
            <li>
              Crushing Grab - When you successfully grapple, you can deal STR
              bludgeoning damage
            </li>
            <li>
              Stand Still - Reaction attack when a creature moves or leaves a
              square you can reach during a move action on its turn. If the
              attack crits, the creature is stopped.
            </li>
            <li>
              Crane Flutter - Reaction attack when you are in Crane Stance and a
              creature attacks you in melee. Gain +2 AC on top of Crane Stance.
              If the incoming attack misses, you can make a single Crane wing
              attack on that creature at a -2 to hit.
            </li>
          </ul>
        </Typography>
      </StyledPaper>
    </div>
  );
};
