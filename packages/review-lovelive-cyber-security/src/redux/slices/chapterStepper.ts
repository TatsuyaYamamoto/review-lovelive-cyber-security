import { createSlice, ThunkAction } from "@reduxjs/toolkit";
import { wait } from "@/helpers/utiles";

export const moveStep = (
  from: number,
  to: number,
  canClose = false
): ThunkAction<any, any, any, any> => async (dispatch) => {
  dispatch(displaySlice.actions.openChapterStepper({ index: from, canClose }));
  await wait(0.5);
  dispatch(displaySlice.actions.openChapterStepper({ index: to, canClose }));
};

const initialState = {
  open: false,
  canClose: false,
  index: 0,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    openChapterStepper: (
      state,
      action: { payload: { index: number; canClose: boolean } }
    ) => {
      state.open = true;
      state.index = action.payload.index;
      state.canClose = action.payload.canClose;
    },

    changeStepperIndex: (state, action: { payload: { index: number } }) => {
      state.index = action.payload.index;
    },

    closeChapterStepper: (state) => {
      state.open = false;
      state.index = 0;
      state.canClose = true;
    },
  },
});

export default displaySlice;
