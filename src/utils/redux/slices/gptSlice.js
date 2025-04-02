import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovieNames:null,
        gptMoviesDetails:null,
       
        
    },
    reducers:{
toggleGptSearchView:(state)=>{
state.showGptSearch= !state.showGptSearch ;
},
addGptMovies:(state,action)=>{
    const {movieNames,movieDetails} = action.payload;
    state.gptMovieNames = movieNames ;
    state.gptMoviesDetails = movieDetails ;
    
    
},

    }
})

export const {toggleGptSearchView,addGptMovies}= gptSlice.actions;
export default gptSlice.reducer;
