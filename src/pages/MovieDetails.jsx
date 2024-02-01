import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";

const MovieDetails = () => {
  const { movieDetails,fetchMovieDetails } =useMovies();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieDetails(id);
  }, [movieDetails]);

  // const bookingHandler = (movie) => {
  //   navigate("/booking-page");
  //   if (bookingDetails) {
  //     localStorage.setItem("movie", JSON.stringify(movie));
  //   }
  //   setBookingDetails(movie)
  // };
  // // useEffect(()=>{bookingHandler()},[])
  // useEffect(() => {
  //   const storedMovie = localStorage.getItem("movie");
  //   if (storedMovie) {
  //     const movie = JSON.parse(storedMovie);
  //     setBookingDetails(movie);
  //   }
  // }, [bookingDetails]);
  return (
    <div className="flex justify-center">
      <div className=" max-w-[700px] border-2 flex gap-5 flex-wrap px-2 py-2 tablet:max-w-[370px]">
        <img src={movieDetails?.image.original} alt="" className="w-[350px]" />
        <div className="w-[300px] tablet:w-full">
          <p className="text-2xl font-semibold">{movieDetails?.name}</p>
          <p>
            <strong>Ratings:</strong> {movieDetails?.rating.average}⭐
          </p>
          <p>
            <strong>Genres: </strong>
            {movieDetails?.genres.map((genre) => (
              <>{`${genre} `}</>
            ))}
          </p>
          <p>
            <strong>premier: </strong>
            {movieDetails?.premiered}
          </p>
          <strong>Description:</strong>
          <p dangerouslySetInnerHTML={{ __html: movieDetails?.summary }}></p>
          <button
            className="w-full bg-indigo-800 py-2 text-white text-lg rounded-lg mt-4"
            onClick={() => navigate('/booking-page')}
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
