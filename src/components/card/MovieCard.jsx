import React from "react";

function MovieCard({ image, title, large }) {
  return (
    <div
      className={`h-28 md:h-32 flex justify-center items-center mr-1 md:mr-2 ${
        large && "lg:h-64"
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`max-h-24 hover:scale-105 cursor-pointer z-50 rounded-sm md:rounded ${
          large && "max-h-60"
        }`}
      />{" "}
    </div>
  );
}

export default MovieCard;
