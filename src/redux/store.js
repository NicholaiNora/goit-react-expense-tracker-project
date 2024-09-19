import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categorySlice";
import { transactionsReducer } from "./transactionsSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    transactions: transactionsReducer, 
  },
});
