import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:"movieData",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addMovieData:(state,action)=>{
                state.nowPlayingMovies = action.payload;
        }
    }
})


export const {addMovieData} = movieSlice.actions;
export default movieSlice.reducer;