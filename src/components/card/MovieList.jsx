import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../utils/axios";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieList({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  const imageUrl = "https://image.tmdb.org/t/p/original";

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isLarge ? 7 : 7,
    swipeToSlide: true,
    arrows: false,
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="px-5 text-white font-semibold text-2xl">
      <h2>{title}</h2>

      <Slider {...settings}>
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <MovieCard
                key={movie.id}
                image={`${imageUrl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                large={isLarge}
                title={movie.name || movie.title}
              />
            )
        )}
      </Slider>
    </div>
  );
}

export default MovieList;
