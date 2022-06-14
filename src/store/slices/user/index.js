import { createSlice } from "@reduxjs/toolkit";
import { putUser } from "requests/user";

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

export const updateUser = (body, code, dispatch) => {
  putUser(body, code).then((res) => dispatch(setCurrentUser(res)));
};
