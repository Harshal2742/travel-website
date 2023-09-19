import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentUser } from "../api/api.interface";

interface AuthState {
  showModal: boolean,
  showLoginModal: boolean,
  isLoggedIn: boolean,
  currentUser?: CurrentUser
}

const authSliceInitialState: AuthState = {
  showModal: false,
  showLoginModal: false,
  isLoggedIn: localStorage.getItem("isLoggedIn") == "1" || false,
  currentUser: undefined
}

type showMoalPayload = {
  showLoginModal: boolean
}

type loginPayload = {
  isLoggedIn: boolean
  currentUser?: CurrentUser
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authSliceInitialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<showMoalPayload | undefined>) => {
      state.showModal = !state.showModal
      state.showLoginModal = action?.payload?.showLoginModal || false
    },
    setCurrentUserLoginData: (state, action: PayloadAction<loginPayload | undefined>) => {
      if (action.payload) {
        state.isLoggedIn = action.payload.isLoggedIn
        state.currentUser = action.payload.currentUser
        localStorage.setItem("isLoggedIn", action.payload.isLoggedIn ? "1" : "0")
      }
    }
  }
})

export const { toggleModal, setCurrentUserLoginData } = authSlice.actions

export default authSlice.reducer