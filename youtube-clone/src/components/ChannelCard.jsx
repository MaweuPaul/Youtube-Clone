import React from "react";
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";
const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          {/* <Typography variant="h6">
            {channelDetail?.snippet?.title}{" "}
            <BiCheckCircle
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
            />
          </Typography> */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {" "}
              Subscribers {""}
              {parseInt(
                channelDetail.statistics.subscriberCount
              ).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
