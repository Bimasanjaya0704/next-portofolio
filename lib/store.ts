// lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import menuReducer from "./slices/menuSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      menu: menuReducer,
    },
  });
};

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
