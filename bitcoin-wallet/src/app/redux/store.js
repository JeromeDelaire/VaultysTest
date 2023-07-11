import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice";
import walletReducer from "./features/walletSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    accountReducer,
    walletReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
