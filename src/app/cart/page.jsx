"use client";
import EmptyCart from "@/components/sections/emptyCart";
import CartProductCard from "@/components/UI/cartProductCard";
import { useSelector } from "react-redux";
import CartTotalCard from "@/components/UI/cartTotalCard";
import Loader from "@/components/UI/loader";
import { useEffect, useState } from "react";
import Link from "next/link";

const Cart = () => {
  const  { cartData, initialLoading }  = useSelector((state) => state?.cartData || []);
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    setLoading(false)
  })
  if(initialLoading || loading){
    return(
      <Loader/>
    )
  }

  const totalPrice = cartData?.reduce((accumulator, cartItem) => {
    return accumulator + (cartItem.discountedPrice * cartItem.quantity)
  }, 0);
  
  return (
    <div className="flex items-center flex-col">
      <div className="max-w-[1100px] w-full pt-[50px]">
        {cartData?.length > 0 ? (
          <div>
            <div className="flex w-full justify-between items-center mb-3">
              <h1 className="text-[30px]">Your Cart</h1>
              <Link className="text-[15px] underline" href={'/products'}>Continue Shopping</Link>
            </div>
            <div className='flex justify-between' >
              <h1 className="my-[20px] pl-[15px] text-[20px] w-1/2">Product</h1>
              <h1 className="my-[20px] pl-[15px] text-[20px] w-1/4">Quantity</h1>
              <h1 className="my-[20px] pl-[15px] text-[20px] flex justify-center w-1/4">Amount</h1>
            </div>
            <div>
              {cartData?.map((product) => (
                <CartProductCard key={product._id} product={product} />
              ))}
            </div>
            <div>
            <CartTotalCard totalPrice={totalPrice}/>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
