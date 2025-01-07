import { configureStore } from "@reduxjs/toolkit";
import newsTypeReducer from "../features/news/newsSlice"; // Make sure this path is correct

export default configureStore({
  reducer: {
    newsType: newsTypeReducer, // Attach the reducer to the `newsType` key
  },
});
