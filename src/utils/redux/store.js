import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import  movieReducer  from "./slices/movieSlice";
const store = configureStore({
    reducer:{
        userData:userReducer,
        movieData:movieReducer
    }
})

export default store;