import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Videos } from "./index";
import { useParams } from "react-router-dom";
import { Api } from "../utilities/Api";
const Search = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    Api(`search? part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: "auto", marginLeft: 3, height: "100vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        marginLeft={2}
        marginBottom={2}
        sx={{ color: "white" }}
      >
        search results <span style={{ color: "#ff6b08" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Search;
