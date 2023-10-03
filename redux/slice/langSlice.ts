import { ELang, Langs } from "@/common/interface/lang";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import eng from "@/common/lang/eng";
import vn from "@/common/lang/vn";

interface LangState {
  type: number;
  langs: Langs;
}

const initialState: LangState = {
  type: ELang.ENG,
  langs: eng,
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    switchLang: (state, action: PayloadAction<number>) => {
      if (action.payload === ELang.ENG) {
        state.type = ELang.ENG;
        state.langs = eng;
      } else {
        state.type = ELang.VN;
        state.langs = vn;
      }
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;
