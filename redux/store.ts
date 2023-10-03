import { configureStore } from "@reduxjs/toolkit";
import LangReducer from "./slice/langSlice";

const store = configureStore({
  reducer: {
    LangReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
