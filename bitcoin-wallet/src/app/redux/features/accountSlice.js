import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    firstName: "jerome delaire",
    lastName: "",
    mail: "",
    number: "",
  },
  reducers: {},
});

export const {} = accountSlice.actions;

export default accountSlice.reducer;
