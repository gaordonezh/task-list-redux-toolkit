import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    images: [],
    modal: false,
    background: undefined,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setModal: (state) => {
      state.modal = !state.modal;
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
  },
});

export const { setCurrentUser, setImages, setModal, setBackground } = userSlice.actions;

export default userSlice.reducer;
