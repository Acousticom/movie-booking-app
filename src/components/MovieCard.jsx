import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie}) => {
  const { image, name, language, rating, id } = movie;
  return (
    <Link to={`/movieDetails/${id}`}>
      <div className=" cursor-pointer border-2 w-[250px] rounded-lg hover:shadow-2xl hover:shadow-gray-500 mobile:w-screen">
        <img src={image?.medium} alt="" className="w-full h-[300px]" />
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-lg">
          <strong>Language:</strong> {language}
        </p>
        <p className="text-lg">
          <strong>Imdb-</strong> {rating.average} ⭐
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
