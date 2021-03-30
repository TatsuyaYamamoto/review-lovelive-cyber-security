import { configureStore } from "@reduxjs/toolkit";

import chapterStepper from "./slices/chapterStepper";
import footnote from "./slices/footnote";

export const store = configureStore({
  reducer: {
    chapterStepper: chapterStepper.reducer,
    footnote: footnote.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
