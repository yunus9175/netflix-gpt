import { createSlice } from "@reduxjs/toolkit";

// Create a slice with reducers for updating state

const initialState = {
  nowPlayingMovies: [],
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setMovies, setTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
