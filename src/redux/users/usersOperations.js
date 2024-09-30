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
      console.log(res.data);
      return(res.data);
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const userInfo = createAsyncThunk(
  "users/info",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.patch("users/info", data, {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    }catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const userAvatar = createAsyncThunk(
  "users/avatar",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.patch("users/avatar", data, {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`
        },
      });
      console.log(res.data);
      return res.data;
    }catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const deleteAvatar = createAsyncThunk(
  "users/avatar",
  async (value, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.delete("users/avatar", {avatar: value}, {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`
        },
      });
      console.log(res.data);
      return res.data;
    }catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)