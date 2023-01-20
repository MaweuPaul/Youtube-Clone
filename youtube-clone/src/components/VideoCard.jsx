import { Stack, Card, CardMedia, CardContent, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { color, height, width } from "@mui/system";
import { BiCheckCircle } from "react-icons/bi";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "100%" },

        borderRadius: "0",
      }}
    >
      <Link to={`/video/ ${videoId}`}>
        <CardMedia
          image={
            snippet.thumbnails.high.url
              ? snippet.thumbnails.high.url
              : "image not available at this time"
          }
          alt={snippet.title}
          sx={{ height: 180 }}
        />
        <CardContent
          sx={{ background: "#1e1e1e", height: "100px", width: "400px" }}
        >
          <Link to={`/video/${videoId}`}>
            <Typography variant="body1" color="white">
              {snippet.title.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : ""}>
            <Typography variant="body2" color="gray">
              By: {snippet.channelTitle.slice(0, 60)}
              <BiCheckCircle
                fontSize={18}
                style={{ marginLeft: "0.3rem", color: "gray" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
