import { createSlice } from "@reduxjs/toolkit";
import { FootnoteId } from "@/resources/footnote";

export interface FootnoteSliceState {
  renderingFootnoteId: FootnoteId | null;
}
const initialState: FootnoteSliceState = {
  renderingFootnoteId: null,
};

export const footnoteSlice = createSlice({
  name: "footnote",
  initialState,
  reducers: {
    openFootnoteWindow: (state, action: { payload: FootnoteId }) => {
      state.renderingFootnoteId = action.payload;
    },
    closeFootnoteWindow: (state) => {
      state.renderingFootnoteId = null;
    },
  },
});

export default footnoteSlice;
