import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/Action";

export const store = configureStore({
  reducer: {
    user: userSlice, 
  },
});