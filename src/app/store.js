import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../slices/employeeSlice";

/* Creating a store with the reducer. */
export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
