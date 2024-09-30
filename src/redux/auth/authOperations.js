import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://expense-tracker.b.goit.study/api/";
// Utility to add JWT
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      // After successful registration, add the token to the HTTP header
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      // After successful login, add the token to the HTTP header
      // setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    console.log(state);
    console.log(state.auth.user.accessToken);
    const res = await axios.get("/auth/logout", {
      headers: {
        'Authorization': `Bearer ${state.auth.user.accessToken}`,
        'Accept': '*/*'
      }
    });
    // After a successful logout, remove the token from the HTTP header
    // clearAuthHeader();
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    console.log(state.token.refreshToken);

    // if (persistedToken === null) {
    //   // If there is no token, exit without performing any request
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      const res = await axios.post("/auth/refresh", {
        sid: state.auth.user.sid  // The session ID passed in the request body
      }, {
        headers: {
          'Authorization': `Bearer ${state.auth.user.accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return res.data;
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.message);
    
    }
  }
);
