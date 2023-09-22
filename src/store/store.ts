import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authReducer from "./auth-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = useDispatch<typeof store.dispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;