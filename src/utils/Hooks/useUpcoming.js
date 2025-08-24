import { useDispatch } from 'react-redux';
import {  addupcoming } from '../movieslice';
import { useEffect } from 'react';
import { api_key } from '../constants';

const useUpcoming= () => {
  const dispatch=useDispatch();
  const upcomingmovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',api_key);
    const json=await data.json();
    dispatch(addupcoming(json.results));
  };
  useEffect(()=>{
    upcomingmovies();
  },[]);
  
}

export default useUpcoming;
