import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { api_key } from "../utils/constants";
import { addsearch } from "../utils/searchslice";
import { useDispatch, useSelector } from "react-redux";
import Moviecard from "./Moviecard";
import { Link } from "react-router";
const Search=()=>{
    const list = useSelector((store) => store.search.searchmovies);
    const data=useRef(null);
    const [value,setValue]=useState("");
    const dispatch=useDispatch();
   
    console.log("Helloo");
    const handleclick=()=>{
        const val=data.current.value;
        setValue(val);
    };

    
    useEffect(()=>{
        if(!value) return;
        fetchdata();
      
    },[value])
    const fetchdata=async()=>{
        const url=await fetch('https://api.themoviedb.org/3/search/movie?query='+value.toLowerCase()+'&language=en-US&page=1', api_key);
        const json=await url.json();
        dispatch(addsearch(json.results));
    };

    return(
        <div className="bg-[#3e0000] w-screen h-screen">
            <Header/>
            <div className="pt-36 ">
                <form className="flex pl-[28rem]"  onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" placeholder="Which Movie do you Want to see?" ref={data} className="bg-teal-50 w-[28rem] p-4 m-4 rounded-md text-black text-xl placeholder-slate-950"/>
                    <button type="submit" onClick={handleclick} className="m-4 p-4 px-5 rounded-md bg-teal-50 text-black text-xl">Search</button>
                </form>
                
                <div className="flex flex-wrap pt-10 px-8 p-2 m-2 bg-[#3e0000]">
                    {
                    list.map((item)=>(
                        <div key={item.id} className="p-2 m-2">
                           <Link to={`/movie/${item.id}`} className="w-72"><Moviecard  pic={item.poster_path||item.backdrop_path}  /></Link>
                           <h1 className="text-xl text-teal-50 pt-5 pl-4 w-72 text-wrap">{item.title}</h1>
                        </div>
                    ))
                }
            
                </div>
            </div>
        </div>
    );
};
export default Search;