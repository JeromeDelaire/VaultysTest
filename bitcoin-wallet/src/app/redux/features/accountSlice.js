import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "account",
  initialState: {
    firstName: "jerome delaire",
    lastName: "",
    mail: "",
    number: "",
  },
  reducers: {},
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
