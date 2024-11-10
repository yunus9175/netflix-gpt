import { createSlice } from '@reduxjs/toolkit';

// Create a slice with reducers for updating state

const initialState = {
  nowPlayingMovies: [],
  popularMovies: [],
  trailerVideo: [],
  trendingMovies: [],
  upcomingMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    // Add more reducers as needed
  },
});

export const {
  setMovies,
  setTrailerVideo,
  setPopularMovies,
  setTrendingMovies,
  setUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
