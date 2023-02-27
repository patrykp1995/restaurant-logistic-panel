import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import reservationsReducer from "../feature/reservationsSlice";
import customerReducer from "../feature/customerSlice";
import { apiSlice } from "../feature/api/apiSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;