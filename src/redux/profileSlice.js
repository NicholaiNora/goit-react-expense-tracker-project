import { createSlice } from "@reduxjs/toolkit";
import avatar from "../components/images/avatar.svg";

const initialState = {
  photo: [avatar],
  name: "Profile Name",
  currency: {
    value: "₱ PHP",
    label: "₱ PHP",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changePhoto(state, action) {
      state.photo.push(action.payload);
    },
    removePhoto(state) {
      state.photo = initialState.photo;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const { changePhoto, changeName, changeCurrency, removePhoto} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
