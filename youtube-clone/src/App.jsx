import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  Search,
  VideoDetails,
  ChannelDetail,
} from "./components/index";
const App = () => (
  <Box sx={{ backgroundColor: "black" }}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetails />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<Search />} />
    </Routes>
  </Box>
);

export default App;
