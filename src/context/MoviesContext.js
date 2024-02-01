import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {

  const getLocalMovieDetail=()=>{
    let localMovieDetail=localStorage.getItem("movie")
    if(localMovieDetail===""){return null}
    else{return JSON.parse(localMovieDetail)}
  }  
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(getLocalMovieDetail());
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://api.tvmaze.com/shows";
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        setLoading(false);
        const data = await response.json();
        setMovies(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const dateFunction = () => {
    const dateArray = [];
    for (let i = 1; i < 6; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const formattedDate = moment(date).format("ddd MMM DD YYYY");
      dateArray.push(formattedDate);
    }
    setDates(dateArray);
  };
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      if (response.status === 200) {
        const data = await response.json();
        setMovieDetails(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  //set data in local storage
  useEffect(()=>{localStorage.setItem("movie",JSON.stringify(movieDetails))},[movieDetails])

  useEffect(() => {
    dateFunction();
  }, []);
  useEffect(() => {
    fetchMovies(url);
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies,
        movieDetails,
        setMovieDetails,
        dates,
        loading,
        fetchMovieDetails
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => useContext(MoviesContext);
export { useMovies, MoviesProvider };
