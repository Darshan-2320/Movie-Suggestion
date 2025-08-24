import { useSelector } from "react-redux";
import Movielist from "./Movielist";


const Secondary = () => {
  const movie=useSelector((store)=>store.movie);
  if(!movie) return;
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <Movielist title={"Popular"} movie={movie.popular}/>
        <Movielist title={"Now Playing"} movie={movie.nowplaying}/>
        <Movielist title={"Top Rated"} movie={movie.toprated}/>
        <Movielist title={"Upcoming"} movie={movie.upcoming}/>
      </div>
    </div>
  )
}

export default Secondary;
