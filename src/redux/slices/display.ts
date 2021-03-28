import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    openChapterStepper: false,
  },
  reducers: {
    handleChapterStepper: (state, action: { payload: boolean }) => {
      state.openChapterStepper = action.payload;
    },
  },
});

export default displaySlice;
