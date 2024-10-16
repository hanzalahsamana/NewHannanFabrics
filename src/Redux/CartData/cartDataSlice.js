"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState =[] ;

export const cartDataSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {

    setCartData: (state, action) => {
      localStorage.setItem('cartDataa', JSON.stringify(action.payload));
      return action.payload;
    },

    addCartData: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }
      localStorage.setItem('cartDataa', JSON.stringify(state));
    },

    deleteCartData: (state, action) => {
      console.log(state , action.payload);
      
      const updatedState = state.filter(data => data.id !== action.payload);
      localStorage.setItem('cartDataa', JSON.stringify(updatedState));
      return updatedState;
    }
  },
});

export const { setCartData, addCartData, deleteCartData } = cartDataSlice.actions;

export default cartDataSlice.reducer;
