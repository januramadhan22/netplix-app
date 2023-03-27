import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import { addFavorite } from "../utils/favoriteSlice/favoriteSlice";

function MyList() {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  useEffect(() => {
    const myList = localStorage.getItem("myList");

    if (myList) {
      dispatch(addFavorite(JSON.parse(myList)));
    }
  }, []);

  function handleDeleteList(movie) {
    const myList = localStorage.getItem("myList");
    const parsedMovies = JSON.parse(myList);
    let temp = parsedMovies.filter((item) => item.id !== movie.id);
    localStorage.setItem("myList", JSON.stringify(temp));
    dispatch(addFavorite(temp));
  }

  return (
    <div className="w-full min-h-screen bg-black">
      <TopNav />

      <h1 className="w-full p-12 text-center text-5xl font-semibold text-white">
        My Favorites Movies
      </h1>
      <div className="">
        {favorites?.map((movie) => (
          <>
            <div className="text-white" key={movie.id}>
              {movie.title}
            </div>
            <button
              onClick={() => handleDeleteList(movie)}
              className="text-white"
            >
              Delete
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default MyList;
