import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openChapterStepper: false,
  chapterStepperIndex: 0,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    openChapterStepper: (state, action: { payload: { index: number } }) => {
      state.openChapterStepper = true;
      state.chapterStepperIndex = action.payload.index;
    },

    closeChapterStepper: (state) => {
      state.openChapterStepper = false;
      state.chapterStepperIndex = 0;
    },
  },
});

export default displaySlice;
