import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBox from "./SearchBox";
import { Container, Grid } from "@mui/material";
import MercadolibreLogo from "../../assets/images/ml-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4} md={2}>
              <Link to="/">
                <img src={MercadolibreLogo} alt="mercado-libre-logo" />
              </Link>
            </Grid>
            <Grid item xs={8} md={10}>
              <SearchBox />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
