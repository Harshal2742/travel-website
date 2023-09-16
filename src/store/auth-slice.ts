import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  showModal: boolean,
  showLoginModal: boolean
}

const authSliceInitialState: AuthState = {
  showModal: false,
  showLoginModal: false
}

type authpayload = {
  showLoginModal: boolean
}

const authSlice = createSlice({
  name: 'auth',
  initialState: authSliceInitialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<authpayload | undefined>) => {
      state.showModal = !state.showModal
      state.showLoginModal = action?.payload?.showLoginModal || false
    }
  }
}
)

export const { toggleModal } = authSlice.actions

export default authSlice.reducer