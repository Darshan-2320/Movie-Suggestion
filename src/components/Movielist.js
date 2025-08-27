import { Link } from "react-router";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movie }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white px-2 pt-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex px-2 pt-4">
          {
            movie?.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}><Moviecard pic={movie.poster_path||movie.backdrop_path}  /></Link>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Movielist;
