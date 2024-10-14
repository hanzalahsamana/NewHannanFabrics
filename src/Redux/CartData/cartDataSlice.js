"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cartDataa')) || [] ;

export const cartDataSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {

    // Set Cart Data
    setCartData: (state, action) => {
      localStorage.setItem('cartDataa', JSON.stringify(action.payload));
      return action.payload;
    },

    // Add Cart Data
    addCartData: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }
      localStorage.setItem('cartDataa', JSON.stringify(state));
    },

    // Delete Cart Data
    deleteCartData: (state, action) => {
      const updatedState = state.filter(data => data.id !== action.payload);
      localStorage.setItem('cartDataa', JSON.stringify(updatedState));
      return updatedState;
    }
  },
});

export const { setCartData, addCartData, deleteCartData } = cartDataSlice.actions;

export default cartDataSlice.reducer;
