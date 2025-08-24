import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:'movie',
    initialState:{
        popular:null,
        trailer:null,
        nowplaying:null,
        toprated:null,
        upcoming:null,
        moviedetails:null,
    },
    reducers:{
        addpopular:(state,action)=>{
            state.popular=action.payload;
        },
        addtrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        addnowplaying:(state,action)=>{
            state.nowplaying=action.payload;
        },
        addtoprated:(state,action)=>{
            state.toprated=action.payload;
        },
        addupcoming:(state,action)=>{
            state.upcoming=action.payload;
        },
        addmoviedetails:(state,action)=>{
            state.moviedetails=action.payload;
        },
    },
});
export const {addpopular,addtrailer,addnowplaying,addtoprated,addupcoming,addmoviedetails}=movieslice.actions;
export default movieslice.reducer;