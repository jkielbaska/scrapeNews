import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALES } from "@/i18n/locales";

interface LangState {
  lang: string;
}

const initialState: LangState = {
  lang: LOCALES.ENGLISH,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice;
