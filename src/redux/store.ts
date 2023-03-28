import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";

export const store = configureStore({
  reducer: { layout: layoutSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
