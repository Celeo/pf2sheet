import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import { StyledPaper, StyledTableCell } from './common';
import { Attack } from '../models';
import {
  getAbilityMod,
  lookupAbilityScore,
  calculateAttackMod,
} from '../rules';

interface SectionProps {
  characterData: any;
}

export default (props: SectionProps) => {
  const characterData = props.characterData.default;
  return (
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
              <StyledTableCell>Damage type</StyledTableCell>
              <StyledTableCell>Damage bonus</StyledTableCell>
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
                    {calculateAttackMod(
                      attack,
                      characterData.general.level,
                      characterData.abilities
                    )}
                  </strong>
                </StyledTableCell>
                <StyledTableCell>{attack.damage.die}</StyledTableCell>
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
                <StyledTableCell>{attack.damage.damageType}</StyledTableCell>
                <StyledTableCell>{attack.damage.other}</StyledTableCell>
                <StyledTableCell>
                  <Tooltip title={attack.damage.traits}>
                    <span>?</span>
                  </Tooltip>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h4>Class DC: {characterData.offense.classDC}</h4>
    </StyledPaper>
  );
};
