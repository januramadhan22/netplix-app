import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ image, title, large, id }) {
  return (
    <Link to={`/detail/${id}`}>
      <img
        src={image}
        alt={title}
        className={`w-36 hover:scale-105 cursor-pointer z-10 rounded-sm md:rounded shadow-sm shadow-gray-700 ${
          large && "w-40 shadow-sm"
        }`}
      />
    </Link>
  );
}

export default MovieCard;
