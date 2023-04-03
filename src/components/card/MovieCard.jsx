import React from "react";
import { useNavigate } from "react-router-dom";
import { HiTrash } from "react-icons/hi";

function MovieCard({ image, title, large, id, myList, handleDelete }) {
  const navigate = useNavigate();
  return (
    <div className="relative w-full group">
      <img
        onClick={() => navigate(`/detail/${id}`)}
        src={image}
        alt={title}
        className={`relative w-full group-hover:scale-105 cursor-pointer z-10 rounded-sm md:rounded shadow-sm shadow-gray-700 ${
          large && "w-40 shadow-sm"
        } `}
      />
      {myList && (
        <button
          onClick={handleDelete}
          className="absolute z-20 bottom-3 right-3 text-red group-hover:scale-125 p-1 bg-black rounded-full bg-opacity-30 text-white"
        >
          <HiTrash />
        </button>
      )}
    </div>
  );
}

export default MovieCard;
