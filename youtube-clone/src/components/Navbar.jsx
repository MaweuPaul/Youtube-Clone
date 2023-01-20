import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link
      className="youtube"
      to="/"
      style={{ display: "flex", alignItems: "center" }}
    >
      Youtube
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
