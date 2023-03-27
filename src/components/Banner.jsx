import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../utils/axios";
import useFetch from "../utils/useFetch";

function Banner() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(useFetch.netplixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
      className={`bg-no-repeat bg-center bg-cover h-[448px] object-contain relative`}
    >
      <div className="px-8 pt-36 h-[190px] text-white flex flex-col gap-4">
        <h1 className="w-full sm:max-w-2xl text-5xl font-extrabold pb-1">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="flex items-center gap-4">
          <button className="font-bold px-8 py-1 rounded bg-gray-700 transition ease-in duration-150 bg-opacity-70 hover:bg-white hover:text-black">
            Play
          </button>
          <button
            onClick={() => navigate("/mylist")}
            className="font-bold px-8 py-1 rounded bg-gray-700 transition ease-in duration-150 bg-opacity-70 hover:bg-white hover:text-black"
          >
            My List
          </button>
        </div>
        <h2 className="w-full sm:max-w-sm h-20 text-sm leading-5">
          {`${movie?.overview}`.length > 200
            ? `${movie?.overview}`.substr(0, 200) + "..."
            : `${movie?.overview}`}
        </h2>
      </div>

      <div
        id="fadeBottom"
        className="h-[58%] bg-gradient-to-b from-transparent to-black "
      />
    </div>
  );
}

export default Banner;
