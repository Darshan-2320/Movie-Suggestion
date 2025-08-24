import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./movieslice";
import watchlistReducer from "./watchlistslice";
const appstore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        watchlist:watchlistReducer,
    },
});

export default appstore;