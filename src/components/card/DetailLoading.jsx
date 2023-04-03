import React from "react";

function DetailLoading() {
  return (
    <div className="relative z-30 w-10/12 p-12 mt-10 mx-auto bg-white bg-opacity-20 rounded-md flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-10">
      <div className="h-96 max-h-96 w-[440px] max-w-full rounded bg-gray-900 bg-opacity-60 animate-pulse" />
      <div className="w-full flex flex-col items-center md:items-start gap-2 text-center md:text-left text-white">
        <div className="w-72 max-w-full h-8 rounded-md bg-gray-900 bg-opacity-60 animate-pulse" />
        <div className="w-full h-5 rounded-md bg-gray-900 bg-opacity-60 animate-pulse" />
        <div className="w-full h-5 rounded-md bg-gray-900 bg-opacity-60 animate-pulse" />
        <div className="w-full h-5 rounded-md bg-gray-900 bg-opacity-60 animate-pulse" />
        <div className="w-full h-40 rounded-md bg-gray-900 bg-opacity-60 animate-pulse" />
        <div className="w-40 h-8 rounded-md bg-gray-900 bg-opacity-60 animate-pulse" />
      </div>
    </div>
  );
}

export default DetailLoading;
