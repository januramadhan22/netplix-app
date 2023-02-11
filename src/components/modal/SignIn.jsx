import React, { useRef } from "react";
import { userAuth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      userAuth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      userAuth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        alert(`Signed as ${res.user.email}`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-sm p-12 absolute h-fit top-1/4 bg-black bg-opacity-70 rounded">
        <form className="w-full flex flex-col gap-7">
          <h1 className="text-white font-semibold text-3xl">Sign In</h1>
          <div className="w-full space-y-3">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2.5 rounded border focus:outline-none transition ease-in duration-150 focus:border-red-600 text-sm"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="w-full px-2 py-2.5 rounded border focus:outline-none transition ease-in duration-150 focus:border-red-600 text-sm"
            />
          </div>
          <button
            onClick={signIn}
            type="submit"
            className="w-full bg-red-600 text-white font-semibold p-2.5 rounded"
          >
            Sign In
          </button>
          <p className="text-sm text-gray-400">
            New to Netplix ?
            <span
              onClick={register}
              className="ml-2 text-white font-medium cursor-pointer hover:underline transition-all ease-in duration-200"
            >
              Sign up now.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
