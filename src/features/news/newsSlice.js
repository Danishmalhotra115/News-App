import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: 'newsType',
  initialState: {
    value: "International", // Default value is "global"
  },
  reducers: {
    updateNewsType: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the action to use it in your components
export const { updateNewsType } = newsSlice.actions;

// Export the reducer to be included in the store
export default newsSlice.reducer;
