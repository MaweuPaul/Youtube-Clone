import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { Sidebar, Videos } from "./index";
import { Api } from "../utilities/Api";
const Feed = () => {
  const [selectedSection, setSelectedSection] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    Api(`search? part=snippet&q=${selectedSection}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedSection]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #ff6b08",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 2, color: "white" }}
        >
          copyright 2023 Paul Maweu
        </Typography>
      </Box>

      {/* starting on videos */}
      <Box sx={{ marginLeft: 3, overflowY: "auto", height: "100vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          marginLeft={2}
          marginBottom={2}
          sx={{ color: "white" }}
        >
          {selectedSection} <span style={{ color: "#ff6b08" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
