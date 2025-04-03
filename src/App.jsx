import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OpeningGame from "./pages/OpeningGame";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/openings" element={<OpeningGame />} />
      </Routes>
    </Router>
  );
}

export default App;
