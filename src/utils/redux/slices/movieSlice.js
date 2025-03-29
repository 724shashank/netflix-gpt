import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movieData",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedData: null,
    upComingData: null,
    tvShowsData: null,
  },
  reducers: {
    addMovieData: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovieData: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedData: (state, action) => {
      state.topRatedData = action.payload;
    },
    addUpcomingData: (state, action) => {
      state.upComingData = action.payload;
    },
    addTVShowsData: (state, action) => {
      state.tvShowsData = action.payload;
    },
  },
});

export const {
  addMovieData,
  addPopularMovieData,
  addTopRatedData,
  addTVShowsData,
  addUpcomingData,
} = movieSlice.actions;
export default movieSlice.reducer;
