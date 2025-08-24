import { useDispatch } from 'react-redux';
import { addnowplaying } from '../movieslice';
import { useEffect } from 'react';
import { api_key } from '../constants';

const useNowplaying = () => {
  const dispatch=useDispatch();
  const nowplayingmovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',api_key);
    const json=await data.json();
    dispatch(addnowplaying(json.results));
  };
  useEffect(()=>{
    nowplayingmovies();
  },[]);
  
}

export default useNowplaying;
