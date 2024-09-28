import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://expense-tracker.b.goit.study/api/";

export const currentUser = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.get("users/current", {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
