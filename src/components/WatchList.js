import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { bg_card_img } from "../utils/constants";
import { Link } from "react-router";
import { cleanmovies, removemovies } from "../utils/watchlistslice";

const WatchList = () => {
    const list = useSelector((store) => store.watchlist.movies);
    const dispatch = useDispatch();
    console.log(list);
    if (!list) return;
    const handleremove = () => {
        dispatch(removemovies());
    };
    const handleclean = () => {
        dispatch(cleanmovies());
    };
    return (
        <div className="bg-[#3e0000] text-white h-screen w-screen">
            <Header />
            <div className="px-10 space-x-16 flex pt-32">
                {
                    list.length==0&&(
                        <p className="p-2 m-2 text-lg text-lime-50 ">Add Your Favourite Movies You Want to Watch!!</p>
                    )
                }
                <button className="text-lg m-2 p-2 rounded-md bg-lime-50 text-black"><Link to={"/browse"}>Add Movies</Link></button>
                {
                    list.length>0 && (<>
                        <button className="text-lg m-2 p-2 rounded-md bg-lime-50 text-black" onClick={handleremove}>Remove Movie</button>
                        <button className="text-lg m-2 p-2 rounded-md bg-lime-50 text-black" onClick={handleclean}>Clear Movies</button>
                        </>)
                }
            </div>
            <div className="flex pt-6 px-10 flex-wrap">
                {
                    list.map((movie) => (
                        <div key={movie.key} className="p-2 m-2">
                            <img src={bg_card_img + movie?.poster_path} className="w-60" alt="bg_image" />
                            <p className="text-lg text-wrap w-60">{movie.original_title}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};
export default WatchList;