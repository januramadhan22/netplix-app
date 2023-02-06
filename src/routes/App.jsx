import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
