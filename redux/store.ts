import { configureStore } from "@reduxjs/toolkit";
import LangReducer from "./slice/langSlice";
import ThemeReducer from "./slice/themeSlice";

const store = configureStore({
  reducer: {
    LangReducer,
    ThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
