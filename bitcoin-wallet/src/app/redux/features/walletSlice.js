import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createWallet = createAsyncThunk(
  "wallet/create",
  async (_, { getState }) => {
    const res = await fetch("/api/wallet", {
      method: "GET",
      credentials: "same-origin",
    });

    if (res.ok) {
      const wallet = await res.json();
      return wallet;
    } else {
      return undefined;
    }
  }
);

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: "",
    privateKey: "",
    mnemonic: "",
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWallet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.address = action.payload.address;
        state.privateKey = action.payload.key;
        state.mnemonic = action.payload.mnemonic;
        console.log(state.address);
      })
      .addCase(createWallet.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message);
      });
  },
});

export const {} = walletSlice.actions;

export default walletSlice.reducer;
