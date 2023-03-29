import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const { setLayout } = layoutSlice.actions;

export default layoutSlice;
