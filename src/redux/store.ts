import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";
import langSlice from "./langSlice";

export const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
    layout: layoutSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () => store.dispatch;
