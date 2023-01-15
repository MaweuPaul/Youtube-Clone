import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, Video, Channel, Search } from "./components";
const App = () => (
  <Box sx={{ backgroundColor: "black" }}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<Video />} />
      <Route path="/channel/:id" element={<Channel />} />
      <Route path="/search/:searchTerm" element={<Search />} />
    </Routes>
  </Box>
);

export default App;
