import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Channel from "./components/Channel";
import Search from "./components/Search";
const App = () => (
  <Box sx={{ backgroundColor: "black" }}>
    <Navbar />
    in
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<Video />} />
      <Route path="/channel/:id" element={<Channel />} />
      <Route path="/search/:searchTerm" element={<Search />} />
    </Routes>
  </Box>
);

export default App;
