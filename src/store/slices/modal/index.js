import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    data: {},
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = true;
      state.data = action.payload;
    },
    setClose: (state) => {
      state.open = false;
      state.data = {};
    },
  },
});

export const { setOpen, setClose } = modalSlice.actions;

export default modalSlice.reducer;
