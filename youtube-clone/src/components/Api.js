import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const axios = require("axios");

const options = {
  params: {
    // relatedToVideoId: "7ghhRHRP6t4",
    // part: "id,snippet",
    // type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const APi = async (url) => {
  await axios.get(`${BASE_URL}/${url}`);
};
