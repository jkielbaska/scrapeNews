import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: "block",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const { setLayout } = layoutSlice.actions;

export default layoutSlice;