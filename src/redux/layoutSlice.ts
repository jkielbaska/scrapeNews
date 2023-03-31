import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface LayoutState {
  layout: string;
}

const initialState: LayoutState = {
  layout: "block",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<string>) => {
      state.layout = action.payload;
    },
  },
});

export const selectorLayout = (state: RootState) => state.layout.layout;

export const { setLayout } = layoutSlice.actions;

export default layoutSlice;
