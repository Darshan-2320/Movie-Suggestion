import { createSlice } from "@reduxjs/toolkit";

const watchlistslice=createSlice({
    name:"watchlist",
    initialState:{
        movies:[],
    },
    reducers:{
        addmovies:(state,action)=>{
            state.movies.push(action.payload);
        },
        removemovies:(state,action)=>{
            state.movies.pop();
        },
        cleanmovies:(state,action)=>{
            state.movies.length=0;
        },
    },
});
export const{addmovies,removemovies,cleanmovies}=watchlistslice.actions;
export default watchlistslice.reducer;