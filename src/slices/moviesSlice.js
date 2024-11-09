import { createSlice } from '@reduxjs/toolkit';

// Create a slice with reducers for updating state

const initialState = {
  nowPlayingMovies: [],
  popularMovies: [],
  trailerVideo: [],
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
    // Add more reducers as needed
  },
});

export const { setMovies, setTrailerVideo, setPopularMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
