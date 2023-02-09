import React, { useEffect, useState } from "react";
import Netplix from "../assets/netplix_logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../utils/userSlice/userSlice";

function TopNav({ login }) {
  const user = useSelector(selectUser);
  const [transition, setTransition] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      setTransition(true);
    } else {
      setTransition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  return (
    <div
      className={`w-full px-8 py-4 flex justify-between items-center fixed top-0 transition-all ease-in duration-200 z-50 ${
        transition && "bg-black"
      }`}
    >
      {/* Logo Brand */}
      <div>
        <Link to="/">
          <img src={Netplix} alt="Netplix" className="h-8 cursor-pointer" />
        </Link>
      </div>

      {user ? (
        /* User Icon */
        <div>
          <Link to={`/profile/${user.uid}`}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.4l745LKOzMIKiNgqGO6cLQHaHa&pid=Api&P=0"
              alt="User Avatar"
              className="h-8 rounded-sm  cursor-pointer"
            />
          </Link>
        </div>
      ) : (
        /* Login Button */
        <button
          onClick={login}
          className="px-6 py-1.5 bg-red-600 text-white rounded-sm font-medium "
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default TopNav;
