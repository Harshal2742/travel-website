import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector} from "react-redux";

import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = useDispatch<typeof store.dispatch>
export const useAppSelector = useSelector<RootState>

export default store;