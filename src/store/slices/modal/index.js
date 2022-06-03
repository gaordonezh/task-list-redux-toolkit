import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    data: {},
  },
  reducers: {
    setModalList: (state, action) => {
      state.modalList = action.payload;
    },
    setOpen: (state, action) => {
      state.open = true;
      state.data = action.payload;
    },
  },
});

export default modalSlice.reducer;
