import React from "react";

function SignIn() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-sm p-12 absolute h-fit top-1/4 bg-black bg-opacity-70 rounded">
        <form className="w-full flex flex-col gap-7">
          <h1 className="text-white font-semibold text-3xl">Sign In</h1>
          <div className="w-full space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2.5 rounded border focus:outline-none transition ease-in duration-150 focus:border-red-600 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2 py-2.5 rounded border focus:outline-none transition ease-in duration-150 focus:border-red-600 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold p-2.5 rounded"
          >
            Sign In
          </button>
          <p className="text-sm text-gray-400">
            New to Netplix ?
            <span className="ml-2 text-white font-medium cursor-pointer hover:underline transition-all ease-in duration-200">
              Sign up now.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
