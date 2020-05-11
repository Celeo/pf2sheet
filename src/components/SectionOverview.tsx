import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { StyledTableCell, StyledPaper } from './common';
import { Ability } from '../models';
import { formatMod, getAbilityMod } from '../rules';

interface SectionProps {
  characterData: any;
}

export default (props: SectionProps) => {
  const characterData = props.characterData.default;
  return (
    <Box display="flex" flexWrap="wrap">
      <StyledPaper>
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
                <StyledTableCell>{characterData.general.name}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Player name</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.playerName}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Level (xp)</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.level} (
                  {characterData.general.experience})
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Ancestry</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.ancestry}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Background</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.background}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Class</StyledTableCell>
                <StyledTableCell>{characterData.general.class}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Alignment</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.alignment}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Deity</StyledTableCell>
                <StyledTableCell>{characterData.general.deity}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>{characterData.general.age}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.gender}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Languages</StyledTableCell>
                <StyledTableCell>
                  {characterData.general.languages.join(', ')}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Speed</StyledTableCell>
                <StyledTableCell>{characterData.general.speed}</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
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
              {characterData.abilities.map((ability: Ability) => (
                <TableRow key={ability.name}>
                  <StyledTableCell>{ability.name}</StyledTableCell>
                  <StyledTableCell>
                    {formatMod(getAbilityMod(ability.score))}
                  </StyledTableCell>
                  <StyledTableCell>{ability.score}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
        <h3>Feats</h3>
        <h4>Ancestry</h4>
        <ul>
          {characterData.feats.ancestry.map((feat: string) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <h4>Class</h4>
        <ul>
          {characterData.feats.class.map((feat: string) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <h4>Skill</h4>
        <ul>
          {characterData.feats.skill.map((feat: string) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <h4>General</h4>
        <ul>
          {characterData.feats.general.map((feat: string) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
      </StyledPaper>
      <StyledPaper>
        <h3>Class Features</h3>
        <ul>
          {characterData.classFeatures.map((feat: string) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
      </StyledPaper>
    </Box>
  );
};
