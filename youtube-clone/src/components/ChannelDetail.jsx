import React from "react";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./index";
import { Api } from "../utilities/Api";
const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    Api(`channels? part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    Api(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            zIndex: 10,
            height: "300px",
            background:
              "rgb(67,120,139) linear-gradient(273deg, rgba(67,120,139,1) 8%, rgba(45,60,115,1) 42%, rgba(255,61,8,1) 97%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="90px" />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
