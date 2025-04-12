import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OpeningGame from "./pages/OpeningGame";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: "#1a1a1a", minHeight: "100vh", py: 6 }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/openings" element={<OpeningGame />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
