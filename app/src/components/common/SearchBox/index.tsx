import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from 'react-router-dom';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, IconButton, Paper } from "@mui/material";
import './searchbox.scss';

const SearchBox = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChangeSearch = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement
    setText(value)
  }

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`/items?search=${text}`);

  }
  return (
    <Paper
      component="form"
      elevation={1}
      className="searchbox-container"
      onSubmit={handleSubmitForm}
    >
      <InputBase
        className="searchbox-input"
        placeholder="Nunca dejes de buscar"
        onChange={handleChangeSearch}
        value={text}
      />
      <Divider className="searchbox-divider" orientation="vertical" />
      <IconButton 
        color="default" 
        className="searchbox-icon"
        onClick={handleSubmitForm}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBox;
