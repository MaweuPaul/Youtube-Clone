import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    // relatedToVideoId: "7ghhRHRP6t4",
    // part: "id,snippet",
    // type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const Api = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);
  return data;
};
