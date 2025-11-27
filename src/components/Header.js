import { useEffect, useState } from "react";
import { logo } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userdetails, setuserdetails] = useState(false);
  const user = useSelector((store) => store.user);
  const watchlist=useSelector((store)=>store.watchlist.movies);
  const handleclick = () => {
    setuserdetails(!userdetails);
  }
  const handlesignout = () => {
    signOut(auth).then(() => {
      //navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }

    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 py-2 w-full bg-gradient-to-b from-black flex items-center justify-between">
      {/*Logo */}
      <div className="">
        <img src={logo} className="w-56 px-5 bg-gradient-to-b from-black " alt="logo" />
      </div>
      {/*Nav_Items */}
      {user&&
        <div className="space-x-28">
        <button className="rounded-md  text-white text-xl underline "><Link to={"/browse"}>Home</Link></button>
        <button className="rounded-md text-white text-xl underline "><Link to={"/search"}>Search</Link></button>
        <button className="rounded-md text-white text-xl underline "><Link to={"/helpus"}>Help us</Link></button>
        <button className="rounded-md text-white text-xl underline "><Link to={"/watchlist"}>WatchList({watchlist.length})</Link></button>
     </div>
      }
     
      {/*User */}
      <div>
        {user && (
          <div className="">
              <div className="flex hover:cursor-pointer " onClick={handleclick}>
                <img src={user.photoURL} alt="photo_url" className="w-14 h-18 py-2" />
                <span className="my-4  p-2 pl-0 ">⌵</span>
              </div>
           <div className="pr-36 mr-7 ">
                {userdetails &&
                  <div className="absolute text-white ">
                    <p className="">{user.displayName}</p>
                    <p>{user.email}</p>
                    <button className="text-xl text-red-500" onClick={handlesignout}>Sign out</button>
                  </div>
                }
              </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Header;
