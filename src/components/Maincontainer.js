import Videotitle from "./Videotitle";
import Video from "./Video";
import { useSelector } from "react-redux";
const Maincontainer = () => {
  const movie=useSelector((store)=>store.movie.popular);
  if(!movie) return null;
  const mainmovie=movie[8];
  const {original_title,overview,vote_average}=mainmovie;
  return (
    <div>
        <Videotitle title={original_title} overview={overview} rating={vote_average} />
        <Video/>
    </div>
  )
}

export default Maincontainer;
