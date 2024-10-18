"use client";
import axios from 'axios';
import BASE_URL from '../../config';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getProducts`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
