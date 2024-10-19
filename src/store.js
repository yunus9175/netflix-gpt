import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Example slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add more slices as needed
  },
});

export default store;
