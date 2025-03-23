import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlice";
const store =configureStore({
    reducer:{
        userData:userReducer,
    }
})

export default store;