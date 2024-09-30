import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://expense-tracker.b.goit.study/api/";

export const addCategories = createAsyncThunk(
  "categories",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.post("/categories", data, {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "categories",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.get("/categories", {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCategories = createAsyncThunk(
  "categories",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.patch("/categories/{id}", id, {
        headers: {
          Authorization: `Bearer ${state.auth.user.accessToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "categories",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await axios.delete("/categories/{id}", data, {
        headers: {
          "Custom-Header": "value",
          Authorization: `Bearer ${state.auth.user.accessToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
