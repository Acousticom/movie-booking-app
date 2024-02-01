import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext=createContext()
const MoviesProvider=({children})=>{

    const [movies,setMovies]=useState([])
    const [movieDetails,setMovieDetails]=useState()
    const [dates,setDates]=useState([])
    const [bookingDetails,setBookingDetails]=useState(null)
    const [loading,setLoading]=useState(false)

    const url="https://api.tvmaze.com/shows"
    const fetchMovies=async(url)=>{
        setLoading(true)
        try {
            const response=await fetch(url)
            if(response.status===200){
                setLoading(false)
                const data= await response.json()
                setMovies(data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const dateFunction=()=>{
        const dateArray=[]
        for(let i=1;i<6;i++){
            const date=new Date()
            date.setDate(date.getDate() + i);
            const formattedDate = moment(date).format('ddd MMM DD YYYY');
            dateArray.push(formattedDate);
        }
        setDates(dateArray)
    }
    useEffect(()=>{dateFunction()},[])
    useEffect(()=>{fetchMovies(url)},[])
    return(
        <MoviesContext.Provider value={{movies,movieDetails,setMovieDetails,setBookingDetails,bookingDetails,dates,loading}}>{children}</MoviesContext.Provider>
    )
}

const useMovies=()=>useContext(MoviesContext)
export {useMovies,MoviesProvider}