"use client";
import axios from "axios";
import BASE_URL from "../../config";
import { toast } from "react-toastify";

export const setCartDataApi = async (cartId) => {
  try {
    console.log(cartId,"{}{}{}{}{}{}{}{");
    
    const response = await axios.get(`${BASE_URL}/getCartData?id=${cartId}`);
    // localStorage.setItem("cartId", response.data.cartId);
    console.log(response.data);
    
    return response.data[0];
  } catch (error) {
    toast.error(error.message, "yeah Api file ka he");
  }
};

export const addCartDataApi = async (productId, quantity , cartId) => {
  try {
    let url = `${BASE_URL}/addCart?productId=${productId}`;
    if (cartId && cartId !== 'undefined') {
        url += `&id=${cartId}`;
    }
    const response = await axios.post(url, { quantity });
    console.log(response.data , '😎😎😎😎');
    localStorage.setItem("cartId", response.data.cartId);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const deleteCartDataApi = async (cartId, productId) => {
  try {
    let url = `${BASE_URL}/addCarts?Id=${cartId}`;

    if (productId) {
      console.log(":::::::::::", productId);
      
      url += `&productId=${productId}`;
    }
    const response = await axios.delete(url);
    console.log(response.data,"(●'◡'●)");
    

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
