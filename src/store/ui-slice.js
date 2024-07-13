import { createSlice, isActionCreator } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: true, notification: null },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
