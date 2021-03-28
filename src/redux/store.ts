import { configureStore } from "@reduxjs/toolkit";

import display from "./slices/display";

export const store = configureStore({
  reducer: {
    display: display.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
