import React from "react";
import Profile from "../components/modal/Profile";
import TopNav from "../components/TopNav";

function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <TopNav />
      <Profile />
    </div>
  );
}

export default ProfilePage;
