
import { useSelector } from "react-redux"
import useTrailer from "../utils/Hooks/useTrailer";

const Video = () => {
  const movie=useSelector((store)=>store.movie.popular);
  useTrailer(movie[8]);
  const trailer = useSelector((store) => store.movie.trailer);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"  src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default Video;
