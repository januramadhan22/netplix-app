import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";

import { onAuthStateChanged } from "firebase/auth";
import { userAuth } from "../utils/firebase";
import { login, logout, selectUser } from "../utils/userSlice/userSlice";
import ProfilePage from "../pages/ProfilePage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(userAuth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route path="/" element={<LandingPage />} />
        ) : (
          <Route exact path="/" element={<HomePage />} />
        )}
        <Route path="/profile/:uid" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
