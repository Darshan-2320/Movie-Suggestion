import { useParams } from "react-router";
import Header from "./Header";
import useMovieDetails from "../utils/Hooks/useMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { bg_card_img } from "../utils/constants";
import useTrailer from "../utils/Hooks/useTrailer";
import { useState } from "react";
import { addmovies } from "../utils/watchlistslice";

const MovieDetails = () => {
    const movie_id=useParams();
    const [click,setclick]=useState(false);
    const dispatch=useDispatch();
    const details=useSelector((store)=>store.movie.moviedetails);
    const trailer=useSelector((store)=>store.movie.trailer);
    useMovieDetails(movie_id);
    useTrailer(movie_id);
    console.log(trailer);
    if(!details) return;
    const {genres}=details;
    const handleclick=()=>{
        setclick(!click);
    };
    const handlewatchlist=()=>{
        dispatch(addmovies(details));
    };
    return (
    <div>
        <Header/>
          {
                    click&&(
                       <div className="absolute w-screen h-screen">
                            <div className="text-right pr-24 ">
                                <button className="rounded-lg absolute p-5 m-4  bg-[#3e0000] text-white text-lg z-20" onClick={handleclick}>✕</button>
                            </div>
                             <iframe className="w-screen aspect-video"  src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                       </div>
                    )
                }
        <div className="bg-[#3e0000] w-screen py-28 text-white">
            <div className="px-10">
                <h1 className="text-3xl font-semibold">{details.title}{"  "}({details?.tagline})</h1>
                <h1 className="text-xl pt-3">{details.release_date}{" "}{details.runtime+" "+"mins"}</h1>
                <p>★{details.vote_average}</p>
                <div className="flex">
                    <img className="w-[400px] py-5 " src={bg_card_img+details?.poster_path} />
                    <div className="px-44 pt-5">
                        <div>
                            {
                            genres.map((data)=>(
                                <button className="p-4 m-4 bg-gray-100 text-lg text-black rounded-md" key={data.id}>{data.name}</button>

                            ))
                        }
                        </div>
                        <p className="px-4 text-lg text-wrap pt-10">{details.overview}</p>
                        <div className="pt-10 flex">
                            <button className="rounded-md text-lg p-4 m-4 text-black bg-lime-50" onClick={handleclick}>Watch Trailer</button>
                            <button className="rounded-md text-lg p-4 m-4 text-black bg-lime-50" onClick={handlewatchlist}>❤Wachlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MovieDetails;
