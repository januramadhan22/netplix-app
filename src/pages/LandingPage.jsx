import React, { useState } from "react";
import SignIn from "../components/modal/SignIn";
import TopNav from "../components/TopNav";

function LandingPage({ user }) {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/d46ac4b6-e5e4-406b-9bd6-24527044a0d9/ID-id-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-no-repeat bg-center bg-cover h-screen w-full relative transition ease-in">
      <TopNav user={user} login={() => setSignIn(true)} />

      {signIn ? (
        <SignIn />
      ) : (
        <div className="absolute w-full h-fit top-1/4 md:top-1/3 flex flex-col items-center gap-8">
          <div className="mx-auto w-10/12 md:w-8/12 lg:w-5/12 text-white space-y-6 text-center">
            <h1 className="text-5xl font-bold">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-2xl font-medium">
              Watch anywhere. Cancel anytime.
            </h2>
          </div>
          <div className="mx-auto w-10/12 md:w-8/12 lg:w-6/12 h-fit space-y-3">
            <p className="w-full mx-auto text-xl text-white text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="w-full h-full flex items-center justify-center">
              <input
                className="py-4 px-3 h-16 w-full focus:outline-none"
                type="text"
                placeholder="Email address"
              />
              <button
                onClick={() => setSignIn(true)}
                className="w-72 h-16 px-4 bg-red-600 text-white font-medium border-none text-center"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      )}

      <div
        onClick={() => setSignIn(false)}
        className="w-full h-full z-10 bg-black bg-opacity-60 bg-gradient-to-b customGradient"
      />
    </div>
  );
}

export default LandingPage;
