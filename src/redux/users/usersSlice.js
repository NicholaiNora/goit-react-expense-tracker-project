import { createSlice } from "@reduxjs/toolkit";
import { currentUser, userAvatar, userInfo } from "./usersOperations";

const initialState = {
    users: ""
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder.addCase(currentUser.fulfilled, (state, action) => {
            state.users = action.payload
            console.log(state.users.categories);
        }).addCase(userInfo.fulfilled, (state, action) => {
            state.users = action.payload
        }).addCase(userAvatar.fulfilled, (state, action) => {
            state.users = action.payload
            console.log(state.users);
        })
    }
})

export const usersReducer = usersSlice.reducer;

