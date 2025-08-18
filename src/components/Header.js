import { useEffect, useState } from "react";
import { logo } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userdetails, setuserdetails] = useState(false);
  const user = useSelector((store) => store.user);
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

        navigate("/browse");
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
    <div className="absolute z-10 py-2 w-full bg-gradient-to-b from-black flex justify-between">
      <div>
        <img src={logo} className="w-56 px-5 bg-gradient-to-b from-black " alt="logo" />
      </div>
      {user && (
        <div className="flex">
          <div className=" ">
            <div className="flex hover:cursor-pointer " onClick={handleclick}>
              <img src={user.photoURL} alt="photo_url" className="w-14 h-18 py-2" />
              <span className="my-4 mr-5 p-2 pl-0 ">⌵</span>

            </div>
            {userdetails &&
            <div className=" mr-2 pr-2">
              <p className="">{user.displayName}</p>
              <p>{user.email}</p>
              <button className="text-xl text-red-500" onClick={handlesignout}>Sign out</button>
            </div>
            }
          </div>
          
        </div>
      )}
    </div>
  )
}

export default Header;
