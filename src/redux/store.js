import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categorySlice";
import { transactionsReducer } from "./transactionsSlice";
import { filterReducer } from "./filterSlice";
import { profileReducer } from "./profileSlice";
// prettier-ignore
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
// import { findReducer } from "./findSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    transactions: transactionsReducer,
    filter: filterReducer,
    profile: profileReducer,
    // find: findReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); 