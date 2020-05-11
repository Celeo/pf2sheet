import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { StyledPaper, StyledTableCell } from './common';

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
                <StyledTableCell>PP</StyledTableCell>
                <StyledTableCell>GP</StyledTableCell>
                <StyledTableCell>SP</StyledTableCell>
                <StyledTableCell>CP</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>{characterData.gear.money.pp}</StyledTableCell>
                <StyledTableCell>{characterData.gear.money.gp}</StyledTableCell>
                <StyledTableCell>{characterData.gear.money.sp}</StyledTableCell>
                <StyledTableCell>{characterData.gear.money.cp}</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledPaper>
        <ul>
          {characterData.gear.items.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </StyledPaper>
    </Box>
  );
};
