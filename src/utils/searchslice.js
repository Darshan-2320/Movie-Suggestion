import { createSlice } from "@reduxjs/toolkit";

const searchslice=createSlice({
    name:'search',
    initialState:{
        searchmovies:[],
    },
    reducers:{
        addsearch:(state,action)=>{
            state.searchmovies=action.payload;
        },
    },
});
export const {addsearch}=searchslice.actions;
export default searchslice.reducer;