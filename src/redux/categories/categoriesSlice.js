import { createSlice } from "@reduxjs/toolkit";
import { addCategories,getCategories,updateCategories,deleteCategories } from "./categoriesOperations";

const initialState = {
    categories: null
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        }).addCase(addCategories.fulfilled, (state, action) => {
            state.users = action.payload
        }).addCase(updateCategories.fulfilled, (state, action) => {
            state.users = action.payload
        }).addCase(deleteCategories.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export const usersReducer = usersSlice.reducer;

