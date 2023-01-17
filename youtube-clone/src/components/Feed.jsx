import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import Sidebar from "./Sidebar";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid gold",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 2, color: "white" }}
        >
          copyright 2023 Paul Maweu
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
