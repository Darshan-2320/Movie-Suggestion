import { useEffect } from "react";
import { api_key } from "../constants"
import { useDispatch } from "react-redux";
import { addmoviedetails } from "../movieslice";

const useMovieDetails=({id})=>{
    const dispatch=useDispatch();
    const moviedetails=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"",api_key);
        const json=await data.json();
        dispatch(addmoviedetails(json));
    }
    useEffect(()=>{
        moviedetails();
    },[])
};
export default useMovieDetails;