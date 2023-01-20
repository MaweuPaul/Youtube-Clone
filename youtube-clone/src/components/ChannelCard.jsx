import React from "react";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={channelDetail.snippet.thumbnails.high.url}
            alt={channelDetail?.snippet.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          ></CardMedia>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
