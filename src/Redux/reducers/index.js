"use client";

import { combineReducers } from 'redux';
import cartDataReducer from '../CartData/cartDataSlice';


const rootReducer = combineReducers({
    cartData: cartDataReducer,
});

export default rootReducer;
