import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/card/MovieCard";
import TopNav from "../components/TopNav";
import { addFavorite } from "../utils/favoriteSlice/favoriteSlice";

function MyList() {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const imageUrl = "https://image.tmdb.org/t/p/original/";

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
    alert(`"${favorites[0].title}" has been removed from My List`);
  }

  return (
    <div className="w-full min-h-screen bg-black">
      <TopNav />

      <h1 className="w-full pt-32 pb-10 px-12 text-left text-xl font-semibold text-white">
        My List Movies
      </h1>
      <div
        className={`w-full px-12 pb-12 ${
          favorites.length !== 0
            ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center"
            : "flex justify-center"
        }`}
      >
        {favorites.length !== 0 ? (
          favorites.map((movie) => (
            <>
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={`${imageUrl}${movie.poster_path}`}
                title={movie.name || movie.title}
                myList
                handleDelete={() => handleDeleteList(movie)}
              />
            </>
          ))
        ) : (
          <div className="w-full text-white">
            <div className="p-12 mx-auto max-w-xl text-center text-2xl rounded-md bg-white bg-opacity-10">
              Your List is Empty
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyList;
