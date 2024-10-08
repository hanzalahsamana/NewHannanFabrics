"use client";

import { useSelector } from "react-redux"

const Cart = () => {
    const cartData = useSelector((state)=>state?.cartData)
  return (
    <div>
      <h2>Cart</h2>
      {cartData?.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: {item?.price * item.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart