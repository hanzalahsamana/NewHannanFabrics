"use client";
import EmptyCart from "@/components/sections/emptyCart";
import CartProductCard from "@/components/UI/cartProductCard";
import product1 from "../../assets/images/productImages/Teal-Blue-1.jpg";

import { useSelector } from "react-redux";
import CartTotalCard from "@/components/UI/cartTotalCard";

const Cart = () => {
  // const cartData = useSelector((state) => state?.cartData || []);
  const cartData = [
    {
      id: 4,
      name: "Black - Wash n Wear Unstitched Fabric",
      alt: "Black - Wash n Wear Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: 4500,
      discountedPrice: 2660,
      discount: "-30% OFF",
      imagesUrl: [product1.src, product1.src, product1.src],
      status: true,
      type: "Unstiched",
      size: "4.5 meters",
      reviews: 4,
    },
    {
      id: 4,
      name: "Black - Wash n Wear Unstitched Fabric",
      alt: "Black - Wash n Wear Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: 4500,
      discountedPrice: 2660,
      discount: "-30% OFF",
      imagesUrl: [product1.src, product1.src, product1.src],
      status: true,
      type: "Unstiched",
      size: "4.5 meters",
      reviews: 4,
    },
  ];

  return (
    <div className="flex items-center flex-col">
      <div className="max-w-[1100px] w-full">
        {cartData?.length > 0 ? (
          <div>
            <div className='flex justify-between' >
              <h1 className="my-[8px] pl-[15px] text-[20px] w-1/2">Product</h1>
              <h1 className="my-[8px] pl-[15px] text-[20px] w-1/4">Quantity</h1>
              <h1 className="my-[8px] pl-[15px] text-[20px] w-1/4">Amount</h1>
            </div>
            <div>
              {cartData?.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </div>
            <div>
            <CartTotalCard/>
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
