// src/components/navbar/SearchBar.tsx
import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, IconButton, Paper } from "@mui/material";
import './searchbar.scss';

function SearchBar() {
  return (
    <Paper
      component="form"
      elevation={1}
      className="searchbar-container"
    >
      <InputBase
        className="searchbar-input"
        placeholder="Nunca dejes de buscar"
      />
      <Divider className="searchbar-divider" orientation="vertical" />
      <IconButton 
        color="default" 
        className="searchbar-icon"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
