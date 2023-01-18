import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button, IconButton } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { color, width } from "@mui/system";
import { lightGreen } from "@mui/material/colors";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 10,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        style={{ border: "none", outline: "none" }}
        className="search-bar "
        placeholder="search"
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: 0.3, width: { lg: 100 }, mr: 0 }}>
        <BiSearch className="search-icon" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
