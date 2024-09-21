import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterValue: {text: "", date: ""},
  },
  reducers: {
    setFilter: {
      reducer: (state, action) => {
        if (action.payload.name === "filter") {
        state.filterValue.text = action.payload.value;
        }
        if (action.payload.name === "date") {
          state.filterValue.date = action.payload.value;
        }
      },
      prepare: (filterValue) => {
        return {
          payload: filterValue,
        };
      },
    },
    // setDate: {
    //   reducer: (state, action) => {
    //     state.calendarValue = action.payload;
    //   },
    //   prepare: (calendarValue) => {
    //     return {
    //       payload: calendarValue,
    //     };
    //   },
    // },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
