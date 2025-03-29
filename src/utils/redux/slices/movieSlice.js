import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:"movieData",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null
    },
    reducers:{
        addMovieData:(state,action)=>{
                state.nowPlayingMovies = action.payload;
        },
        addPopularMovieData:(state,action)=>{
            state.popularMovies = action.payload;
    }
    }
})


export const {addMovieData,addPopularMovieData} = movieSlice.actions
export default movieSlice.reducer;