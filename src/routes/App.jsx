import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";

function App() {
  const user = null;

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route path="/" element={<LandingPage user={user} />} />
        ) : (
          <Route exact path="/" element={<HomePage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
