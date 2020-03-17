import React from 'react'
import {
  // makeStyles,
  // createStyles,
  Container,
  Paper,
  // Theme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import './App.css'
import * as characterData from './data.json'

// const useStyles = makeStyles((theme: Theme) => createStyles({}))

const abilityMod = (score: number): string => {
  let mod = Math.floor((score - 10) / 2)
  if (mod > 0) {
    return `+${mod}`
  }
  if (mod < 0) {
    return `-${mod}`
  }
  return mod.toString()
}

const App = () => {
  // const classes = useStyles()
  return (
    <div>
      <Container>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>General</h3>
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
          <h3 style={{ paddingLeft: "10px" }}>Abilities</h3>
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
                  characterData.abilities.map((ability: any) => (
                    <TableRow>
                      <TableCell>{ ability.name }</TableCell>
                      <TableCell>{ abilityMod(ability.score) }</TableCell>
                      <TableCell>{ ability.score }</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>Skills</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Attribute</TableCell>
                  <TableCell>Proficiency</TableCell>
                  <TableCell>Items</TableCell>
                  <TableCell><strong>Total</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
            {
              characterData.skills.map((skill: any) => (
                <TableRow>
                  <TableCell>{ skill.name }</TableCell>
                  <TableCell>{ skill.attribute }</TableCell>
                  <TableCell>{ skill.proficiency }</TableCell>
                  <TableCell>{ skill.fromItems }</TableCell>
                  <TableCell><strong>0</strong></TableCell>
                </TableRow>
              ))
            }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>Attacks</h3>
          {/* TODO */}
        </Paper>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>Defense</h3>
          {/* TODO */}
        </Paper>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>Feats</h3>
          {/* TODO */}
        </Paper>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>Class Features</h3>
          {/* TODO */}
        </Paper>
        <Paper>
          <h3 style={{ paddingLeft: "10px" }}>Gear</h3>
          {/* TODO */}
        </Paper>
      </Container>
    </div>
  )
}

export default App
