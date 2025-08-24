import { useEffect } from "react";
import { api_key } from "../constants";
import { useDispatch} from "react-redux";
import { addtrailer } from "../movieslice";

const useTrailer = ({id}) => {
    const dispatch=useDispatch();
    console.log(id);
    useEffect(()=>{
    if(!id) return;
    fetchvideo();
    
  },[id]);
    const fetchvideo=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",api_key);
    const json=await data.json();
    const videos = json?.results || [];
    const trailer=videos.find((e)=>e.type==="Trailer"||e.type==="Teaser");
    dispatch(addtrailer(trailer));
  };
  
};

export default useTrailer;
