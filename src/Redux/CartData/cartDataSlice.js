"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartDataSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    setCartData: (state, action) => {
      localStorage.setItem("cartDataa", JSON.stringify(action.payload));
      return action.payload;
    },

    addCartData: (state, action) => {
      console.log(state, ">>>>>><<<<<<<<<", action.payload);

      const itemIndex = state?.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }
      localStorage.setItem("cartDataa", JSON.stringify(state));
    },

    deleteCartData: (state, action) => {
      console.log(state, action.payload);

      const updatedState = state.filter((data) => data._id !== action.payload);
      localStorage.setItem("cartDataa", JSON.stringify(updatedState));
      return updatedState;
    },
    clearCartData: (state) => {
      localStorage.setItem("cartDataa", JSON.stringify(initialState));
      return initialState;
    },
  },
});

export const { setCartData, addCartData, deleteCartData, clearCartData } =
  cartDataSlice.actions;

export default cartDataSlice.reducer;
