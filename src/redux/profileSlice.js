import { createSlice } from "@reduxjs/toolkit";
import avatar from "../components/images/avatar.svg";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

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

export const { changePhoto, changeName, changeCurrency, removePhoto } = profileSlice.actions;

// const persistConfig = {
//   key: 'profile',
//   storage,
// };

// export const profileReducer = persistReducer(
//   persistConfig,
//   profileSlice.reducer
// );
export const profileReducer = profileSlice.reducer;
