import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from '../searchbar/SearchBar';
import { Container, Grid } from '@mui/material';
import MercadolibreLogo from '../../assets/images/ml-logo.png';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={2} spacing={2}>
              <img src={MercadolibreLogo} alt="mercado-libre-logo" />
            </Grid>
            <Grid item xs={10}>
              <SearchBar />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;