import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: 0.3, width: { lg: 100 }, mr: 0 }}>
        <BiSearch className="search-icon" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
