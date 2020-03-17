import React from 'react'
import {
  // makeStyles,
  // createStyles,
  Container,
  Grid,
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

function App() {
  // const classes = useStyles()
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={6} md={4} component={Paper}>
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
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Abilities</h3>
            {/* TODO */}
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Skills</h3>
            {/* TODO */}
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Attacks</h3>
            {/* TODO */}
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Defense</h3>
            {/* TODO */}
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Feats</h3>
            {/* TODO */}
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Class Features</h3>
            {/* TODO */}
          </Grid>
          <Grid item xs={6} md={4}>
            <h3 style={{ paddingLeft: "10px" }}>Gear</h3>
            {/* TODO */}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
