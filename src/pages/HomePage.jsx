import React from "react";
import TopNav from "../components/TopNav";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <TopNav />

      <Banner />
    </div>
  );
}

export default HomePage;
