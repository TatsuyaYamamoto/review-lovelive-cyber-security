import { configureStore } from "@reduxjs/toolkit";

import display from "./slices/display";
import footnote from "./slices/footnote";

export const store = configureStore({
  reducer: {
    display: display.reducer,
    footnote: footnote.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
