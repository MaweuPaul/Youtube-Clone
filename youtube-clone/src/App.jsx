import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
const App = () => (
  <Box sx={{ backgroundColor: "black" }}>
    Navbar
    <Routes>
      <Route path="/" exact element={<feed />} />
    </Routes>
  </Box>
);

export default App;
