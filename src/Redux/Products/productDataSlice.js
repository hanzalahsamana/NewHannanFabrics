"use client";

import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../assets/images/productImages/Teal-Blue-1.jpg";
import product2 from "../../assets/images/productImages/Teal-Blue-2.jpg";

const initialState = [
    {
      id: 1,
      name: "Khaki - Wash n Wear Unstitched Fabric",
      alt: "Khaki - Wash n Wear Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 4,500.00 PKR",
      discountedPrice: "Rs. 2,660.00 PKR",
      discount: "-30% OFF",
      imageUrl2: product1.src,
      imageUrl: product2.src,
      collection:'heritage'
    },
    {
      id: 2,
      name: "Dark Green - 100% Pure Cotton Unstitched Fabric",
      alt: "Dark Green - 100% Pure Cotton Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 5,000.00 PKR",
      discountedPrice: "Rs. 2,800.00 PKR",
      discount: "-30% OFF",
      imageUrl2: product1.src,
      imageUrl: product2.src,
      collection:'heritage'

    },
    {
      id: 3,
      name: "Off White - Wash n Wear Unstitched Fabric",
      alt: "Off White - Wash n Wear Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 4,500.00 PKR",
      discountedPrice: "Rs. 2,660.00 PKR",
      discount: "-30% OFF",
      imageUrl2: product1.src,
      imageUrl: product2.src,
      collection:'shane-azwan'

    },
    {
      id: 4,
      name: "Carol Light Blue - 100% Pure Cotton Unstitched Fabric",
      alt: "Carol Light Blue - 100% Pure Cotton Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 5,000.00 PKR",
      discountedPrice: "Rs. 2,800.00 PKR",
      discount: "-30% OFF",
      imageUrl2: product1.src,
      imageUrl: product2.src,
      collection:'heritage'
    },
    {
      id: 5,
      name: "Carol Light Blue - 100% Pure Cotton Unstitched Fabric",
      alt: "Carol Light Blue - 100% Pure Cotton Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 5,000.00 PKR",
      discountedPrice: "Rs. 2,800.00 PKR",
      discount: "-30% OFF",
      imageUrl2: product1.src,
      imageUrl: product2.src,
      collection:'shane-azwan'
    },
  ];

export const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProductData } = productDataSlice.actions;

export default productDataSlice.reducer;
