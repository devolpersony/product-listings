import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    removeFromCart(state, action) {
      return state.filter(product => product.id !== action.payload);
    },
    updateCart(state, action) {
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;