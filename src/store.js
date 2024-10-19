import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Example slice
import moviesReducer from "./slices/moviesSlice"; // Example slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add more slices as needed
    movies: moviesReducer,
  },
});

export default store;
