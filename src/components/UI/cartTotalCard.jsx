import React from "react";

const CartTotalCard = ({ totalAmount }) => {
  return (
    <div className='flex flex-col items-end justify-center'>
      <div className='flex gap-[50px]'>
        <p>Estimated total</p>
        <p>Rs. {totalAmount?.toFixed(2)} PKR</p>
      </div>
      <div>
        <p>Taxes, discounts and shipping calculated at checkout.</p>
      </div>
      <div>
        <button
          className="py-[15px] w-[450px] mt-3 bg-black text-[#ffffff] text-[16px]  transition-all duration-300 hover:scale-105"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotalCard;
