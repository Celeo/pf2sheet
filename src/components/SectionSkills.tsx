import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { StyledTableCell, StyledPaper } from './common';
import { Skill } from '../models';
import { calculateSkillMod } from '../rules';

interface SectionProps {
  characterData: any;
}

export default (props: SectionProps) => {
  const characterData = props.characterData.default;
  return (
    <StyledPaper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Attribute</StyledTableCell>
              <StyledTableCell>Proficiency</StyledTableCell>
              <StyledTableCell>From items</StyledTableCell>
              <StyledTableCell>
                <strong>Total</strong>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characterData.skills.map((skill: Skill) => (
              <TableRow key={skill.name}>
                <StyledTableCell>{skill.name}</StyledTableCell>
                <StyledTableCell>{skill.ability}</StyledTableCell>
                <StyledTableCell>{skill.proficiency}</StyledTableCell>
                <StyledTableCell>{skill.fromItems}</StyledTableCell>
                <StyledTableCell>
                  <strong>
                    {calculateSkillMod(
                      skill,
                      characterData.general.level,
                      characterData.abilities
                    )}
                  </strong>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};
