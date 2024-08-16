import { configureStore } from "@reduxjs/toolkit";
import userDetail  from "../features/userDetailSlice";
import  clientDetail from "../features/clientDetailSlice";

export const store = configureStore({
  reducer: {
    userDetail,
    clientDetail,
  },
});
