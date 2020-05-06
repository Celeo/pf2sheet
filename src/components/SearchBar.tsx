import React, { Component } from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { StyledPaper } from './common';
import { allSearchableFields, SearchableValue } from '../rules';

interface SearchBarProps {
  characterData: any;
}

interface SearchBarState {
  searches: Array<SearchableValue>;
}

export class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searches: [],
    };
    this.appendSearch = this.appendSearch.bind(this);
  }

  appendSearch(value: SearchableValue | null) {
    if (value === null) {
      return;
    }
    const newSearches = this.state.searches;
    newSearches.unshift(value);
    this.setState({
      searches: newSearches.slice(0, 5),
    });
  }

  render() {
    return (
      <Box>
        <StyledPaper>
          <Grid container>
            <Grid item xs={12}>
              <Autocomplete
                options={allSearchableFields}
                clearOnEscape={true}
                getOptionLabel={(option: SearchableValue) => option.name}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label="Search for value"
                    variant="outlined"
                  />
                )}
                onChange={(_: any, value: SearchableValue | null) =>
                  this.appendSearch(value)
                }
                value={null}
              />
            </Grid>
            <Grid item xs={12}>
              <List>
                {this.state.searches.map((search, index: number) => (
                  <ListItem key={index.toString()}>
                    <ListItemText>
                      {search.name}:{' '}
                      <strong>
                        {search.getValue(this.props.characterData)}
                      </strong>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
    );
  }
}
