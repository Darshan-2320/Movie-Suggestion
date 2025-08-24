import { useDispatch } from 'react-redux';
import {addtoprated } from '../movieslice';
import { useEffect } from 'react';
import { api_key } from '../constants';

const useToprated = () => {
  const dispatch=useDispatch();
  const top_rated=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',api_key);
    const json=await data.json();
    dispatch(addtoprated(json.results));
  };
  useEffect(()=>{
    top_rated();
  },[]);
  
}

export default useToprated;
