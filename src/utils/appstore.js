import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./movieslice";
import watchlistReducer from "./watchlistslice";
import searchReducer from "./searchslice";
const appstore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        watchlist:watchlistReducer,
        search:searchReducer,
    },
});

export default appstore;