import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import { onAuthStateChanged } from "firebase/auth";
import { userAuth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../utils/userSlice/userSlice";

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
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);

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
