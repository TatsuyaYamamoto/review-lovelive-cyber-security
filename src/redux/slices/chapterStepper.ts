import { createSlice, ThunkAction } from "@reduxjs/toolkit";
import { wait } from "@/helpers/utiles";

export const moveStep = (
  from: number,
  to: number
): ThunkAction<any, any, any, any> => async (dispatch) => {
  dispatch(displaySlice.actions.openChapterStepper({ index: from }));
  await wait(0.5);
  dispatch(displaySlice.actions.openChapterStepper({ index: to }));
};

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
