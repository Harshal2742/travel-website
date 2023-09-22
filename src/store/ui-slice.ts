import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
  showNotification: false,
  notificationMessage: '',
  isSuccess: true,
}

type NotificationPlayload = {
  showNotification: boolean,
  isSuccess?: boolean,
  message?: string
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleNotification: (state, action: PayloadAction<NotificationPlayload>) => {
      state.showNotification = action.payload.showNotification
      state.isSuccess = action.payload.isSuccess !== undefined ? action.payload.isSuccess : true
      state.notificationMessage = action.payload.message ? action.payload.message : ''
    }
  }
})

export const { toggleNotification } = uiSlice.actions

export default uiSlice.reducer