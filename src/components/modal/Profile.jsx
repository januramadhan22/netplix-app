import React from "react";
import { useSelector } from "react-redux";
import { userAuth } from "../../utils/firebase";
import { selectUser } from "../../utils/userSlice/userSlice";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="absolute w-full h-fit top-28 flex justify-center">
      <div className="w-1/2 flex flex-col gap-4 text-white">
        <h1 className="text-4xl font-semibold">Edit Profile</h1>
        <div className="w-full flex gap-4">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.4l745LKOzMIKiNgqGO6cLQHaHa&pid=Api&P=0"
            alt=""
            className="h-24 rounded-sm"
          />
          <div className="w-full flex flex-col gap-2">
            <span className="py-2 px-4 text-sm font-medium bg-gray-500">
              {user.email}
            </span>
            <h3 className="w-full font-semibold py-1 border-b border-gray-700">
              Plans (Current Plans: Premium)
            </h3>
            <p className="text-gray-300 font-medium">
              Renewal date: 04/04/2023
            </p>
            <div className="w-full text-gray-300 flex flex-col gap-7">
              <div className="px-4 w-full flex justify-between items-center">
                <span className="text-sm font-medium">
                  <p>Netplix Standard</p>
                  <p className="text-xs">1080p</p>
                </span>
                <button className="px-6 py-1.5 text-white text-sm font-medium bg-red-700 rounded-sm">
                  Subscribe
                </button>
              </div>
              <div className="px-4 w-full flex justify-between items-center">
                <span className="text-sm font-medium">
                  <p>Netplix Basic</p>
                  <p className="text-xs">480p</p>
                </span>
                <button className="px-6 py-1.5 text-white text-sm font-medium bg-red-700 rounded-sm">
                  Subscribe
                </button>
              </div>
              <div className="px-4 w-full flex justify-between items-center">
                <span className="text-sm font-medium">
                  <p>Netplix Premium</p>
                  <p className="text-xs">4K+HDR</p>
                </span>
                <button className="px-6 py-1.5 text-white text-sm font-medium bg-gray-500 rounded-sm">
                  Current Package
                </button>
              </div>
            </div>
            <button
              onClick={() => userAuth.signOut()}
              className="mt-10 px-6 py-2 text-white font-medium bg-red-700 rounded-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
