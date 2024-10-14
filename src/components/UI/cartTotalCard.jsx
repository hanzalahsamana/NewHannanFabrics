import React from "react";

const CartTotalCard = ({ totalPrice }) => {
  return (
    <div className='flex flex-col items-end gap-5 px-[30px] py-12 border-t border-[#dbdbdb] justify-center'>
      <div className='flex gap-[50px]'>
        <p>Estimated total</p>
        <p className='font-bold'>Rs. {totalPrice?.toFixed(2)} PKR</p>
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
