import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categorySlice";
import { transactionsReducer } from "./transactionsSlice";
import { filterReducer } from "./filterSlice";
// import { findReducer } from "./findSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    transactions: transactionsReducer,
    filter: filterReducer,
    // find: findReducer,
  },
});
