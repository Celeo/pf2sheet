import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { StyledTableCell, StyledPaper } from './common';
import { SavingThrow } from '../models';
import { calculateArmorClass, calculateSavingThrow } from '../rules';

interface SectionProps {
  characterData: any;
}

export default (props: SectionProps) => {
  const characterData = props.characterData.default;
  return (
    <Box display="flex" flexWrap="wrap">
      <StyledPaper>
        <h4>Max Health: {characterData.defense.health.max}</h4>
      </StyledPaper>
      <StyledPaper>
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
      <StyledPaper>
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
  );
};
