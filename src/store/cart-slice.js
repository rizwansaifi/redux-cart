import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //{ title: "", quantity: 0, price: 0 ,totalPrice: 0},
    total: 0,
    quantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.total = action.payload.total;
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
      state.changed = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.total += newItem.price;
      state.quantity++;
      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          name: newItem.title,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.total -= existingItem.price;
      state.quantity--;
      state.changed = true;

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
