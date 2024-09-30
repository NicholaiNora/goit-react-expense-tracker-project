import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categorySlice";
import { transactionsReducer } from "./transactionsSlice";
import { filterReducer } from "./filterSlice";
import { profileReducer } from "./profileSlice";
import { authReducer } from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
//prettier-ignore
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist';
import { usersReducer } from "./users/usersSlice";
// import { findReducer } from "./findSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isLoggedIn"]
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    users: usersReducer,
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
