import { useDispatch } from 'react-redux';
import { addpopular } from '../movieslice';
import { useEffect } from 'react';
import { api_key } from '../constants';

const usePopular = () => {
  const dispatch=useDispatch();
  const popularmovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',api_key);
    const json=await data.json();
    dispatch(addpopular(json.results));
  };
  useEffect(()=>{
    popularmovies();
  },[]);
  
}

export default usePopular;
