import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";
import  movieReducer  from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice"
import languageReducer from "./slices/languageSlice"
const store = configureStore({
    reducer:{
        userData:userReducer,
        movieData:movieReducer,
        gpt:gptReducer,
        language:languageReducer,
    },
});

export default store;