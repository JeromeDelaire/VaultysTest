import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    firstName: "",
    lastName: "",
    mail: "",
    number: "",
  },
  reducers: {},
});

export const {} = accountSlice.actions;

export default accountSlice.reducer;
