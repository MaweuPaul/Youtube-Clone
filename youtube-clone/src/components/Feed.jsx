import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { Sidebar, Videos } from "./index";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #ff6b08",
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

      {/* starting on videos */}
      <Box sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          marginLeft={2}
          marginBottom={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#ff6b08" }}>videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
