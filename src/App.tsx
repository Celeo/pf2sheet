import React from 'react';
import {
  Switch,
  Route,
  Link as RouterLink,
  withRouter,
} from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import './App.css';

import { SearchBar } from './components/SearchBar';
import SectionOverview from './components/SectionOverview';
import SectionSkills from './components/SectionSkills';
import SectionCombat from './components/SectionCombat';
import SectionGear from './components/SectionGear';

import * as characterData from './data.json';

interface AppProps {
  location: {
    pathname: string;
  };
}

const App = (props: AppProps) => {
  return (
    <div>
      <Box display="flex" style={{ justifyContent: 'space-evenly' }}>
        {['overview', 'skills', 'combat', 'gear'].map((e) => (
          <Button
            key={e}
            component={RouterLink}
            to={'/' + e.toLowerCase()}
            variant="contained"
            color={
              props.location.pathname === '/' + e.toLowerCase()
                ? 'primary'
                : 'default'
            }
            style={{ width: '18%' }}
          >
            {e}
          </Button>
        ))}
      </Box>
      <hr />
      <Switch>
        <Route path="/search">
          <SearchBar characterData={characterData} />
        </Route>
        <Route path="/overview">
          <SectionOverview characterData={characterData} />
        </Route>
        <Route path="/skills">
          <SectionSkills characterData={characterData} />
        </Route>
        <Route path="/combat">
          <SectionCombat characterData={characterData} />
        </Route>
        <Route path="/gear">
          <SectionGear characterData={characterData} />
        </Route>
        <Route path="/">
          <p>Select a section</p>
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
