import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { Typography, Box, Stack } from "@mui/material";
import Videos from "./Videos";
import { Api } from "../utilities/Api";
const videoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    Api(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);
  return (
    <Box minHeight="100vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default videoDetails;
