import React from "react";
import { useMovies } from "../context/MoviesContext";
import MovieCard from "../components/MovieCard";
import ShimmerCard from "../components/ShimmerCard";

const Home = () => {
  const { movies,loading } = useMovies();
  return (
    <div className="flex flex-wrap gap-6 justify-center py-10">
      {loading&&[...Array(8)].map((arr) => (
        <ShimmerCard />
      ))}
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Home;
