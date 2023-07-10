import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice";
// import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    accountReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
