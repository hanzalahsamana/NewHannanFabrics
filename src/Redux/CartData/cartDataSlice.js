"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartDataSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {

    setCartData: (state, action) => {
      return action.payload;
    },

    addCartData: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }
    },

    deleteCartData: (state, action) => {
      return state.filter(data => data.id !== action.payload);
    }
  },
});


export const { setCartData, addCartData, deleteCartData } = cartDataSlice.actions;

export default cartDataSlice.reducer;
