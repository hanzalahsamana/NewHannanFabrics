"use client";
import React, { useState } from "react";
import QuantityControl from "./QuantityControl";
import { useDispatch } from "react-redux";
import { addCartData, deleteCartData } from "@/Redux/CartData/cartDataSlice";

const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = product?.quantity || 1;

  const incrementQuantity = () => {
    if (product?.id) {
      dispatch(addCartData({ id: product?.id, quantity: 1 }));
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1 && product?.id) {
      dispatch(addCartData({ id: product?.id, quantity: -1 }));
    }
  };

  return (
    <div className="flex items-center border-t border-[#dbdbdb]  py-8 px-4">
      <div className="flex w-1/2">
        <img
          src={product?.imagesUrl[0]}
          alt="Product"
          className="w-30 h-32 object-cover "
        />
        <div className="ml-4 flex flex-col gap-[4px]">
          <h3 className="text-xs text-gray-700 uppercase">HANNAN FABRICS</h3>
          <p className="text-[15px] mt-2 font-semibold text-gray-800">
            Mehroon - 100% Pure Cotton Unstitched Fabric
          </p>
          <p className="text-gray-500 text-sm">
            Rs. {product?.discountedPrice.toFixed(2)}
          </p>
          <p className="text-gray-500 text-sm">type: {product?.type}</p>
          <p className="text-gray-500 text-sm">Size: {product?.size}</p>
        </div>
      </div>
      <div className='w-1/4'>
        <QuantityControl
          quantity={quantity}
          increaseQuantity={incrementQuantity}
          decreaseQuantity={decrementQuantity}
        />
      </div>
      <div className="flex items-center w-1/4">
        <p className="ml-3 text-[12px]  text-gray-800">
          <sapn className="text-lg">
            Rs. {(product.discountedPrice * quantity).toFixed(2)}
          </sapn>
          PKR
        </p>

        <button
          className="ml-4 text-gray-600 hover:text-red-500"
          onClick={() => deleteCartData(product?.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
