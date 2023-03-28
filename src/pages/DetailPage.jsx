import axios from "../utils/axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/apiKey";
import TopNav from "../components/TopNav";
import { addFavorite } from "../utils/favoriteSlice/favoriteSlice";
import { useDispatch } from "react-redux";

function DetailPage(props) {
  const { uid } = useParams();
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetail = async () => {
      const request = await axios.get(`/movie/${uid}?api_key=${API_KEY}`);
      setDetail(request.data);
      return request;
    };

    fetchDetail();
  }, []);

  const handleAddFavorite = (movie) => {
    const myList = localStorage.getItem("myList");
    const parsedMovies = JSON.parse(myList);
    const existMovie = parsedMovies.find((item) => item.id === movie.id);
    if (existMovie) {
      let temp = parsedMovies.filter((item) => item.id !== movie.id);
      parsedMovies.pop(temp);
      alert(`"${detail.title}" already in My List`);
    } else if (myList) {
      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      dispatch(addFavorite(parsedMovies));
      localStorage.setItem("myList", temp);
      alert(`"${detail.title}" has been added to My List`);
    } else {
      const temp = JSON.stringify([movie]);
      dispatch(addFavorite([movie]));
      localStorage.setItem("myList", temp);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${detail.backdrop_path}')`,
      }}
      className="min-h-screen w-full bg-no-repeat bg-center bg-cover object-contain relative flex flex-col py-10 justify-center items-center"
    >
      <TopNav />

      {/* Detail Content */}
      <div className="relative z-30 w-10/12 p-12 mt-10 mx-auto bg-white bg-opacity-20 rounded-md flex flex-col md:flex-row gap-3 md:gap-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
          alt={detail.title}
          className="max-h-96 rounded"
        />
        <div className="w-full flex flex-col items-start gap-2 text-center md:text-left text-white">
          <h1 className="text-4xl font-medium">{detail.title}</h1>
          <p className="w-full font-medium">
            Duration: <span className="font-normal">{detail.runtime}min</span>
          </p>
          <p className="w-full font-medium">
            Release: <span className="font-normal">{detail.release_date}</span>
          </p>
          <p className="w-full font-medium">
            Genre:{" "}
            <span className="font-normal">
              {detail.genres?.map((list) => list.name + ", ")}
            </span>
          </p>
          <p className="w-full font-medium">
            Overview: <br />
            <span className="font-normal">{detail.overview}</span>
          </p>
          <button
            onClick={() => handleAddFavorite(detail)}
            className="mt-4 mx-auto md:mx-0 px-8 py-2 text-sm font-medium bg-red-700 rounded"
          >
            Add To Playlist
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 w-full h-full z-10 bg-black bg-opacity-60 customGradient" />
    </div>
  );
}

export default DetailPage;
