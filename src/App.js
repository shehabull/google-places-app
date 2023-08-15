// App.js
import React from 'react';
import { CssBaseline, Container, Grid, Paper, Typography } from '@mui/material';
import AutocompleteInput from './components/AutocompleteInput';
import Map from './components/Map';
import SearchResultList from './components/SearchResultList';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h4" component="h1" align="center">
          Google Place Autocomplete App
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AutocompleteInput />
              <SearchResultList />
            </Grid>
            <Grid item xs={12} md={6}>
              <Map />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default App;
