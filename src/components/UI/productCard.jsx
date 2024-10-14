"use client";
import { useState } from "react";
import styles from "./style.module.css";
const ProductCard = ({ product }) => {
  const [imageUrl, setImageUrl] = useState(product?.imageUrl);

  const handleMouseEnter = () => {
    setImageUrl(product?.imageUrl2);
  };

  const handleMouseLeave = () => {
    setImageUrl(product?.imageUrl);
  };
  return (
    <div
      className={`bg-white overflow-hidden ${styles.ProductCardContainer}`}
      key={product?.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        <img src={imageUrl} alt={product?.alt} className="w-full ratio" />
        <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-br-lg">
          {product?.discount}
        </span>
      </div>
      <div className="py-4">
        <h2 className="text-[16px] font-semibold mb-1">{product?.name}</h2>
        <h3 className="text-[10px] text-gray-600 my-2">{product?.brand}</h3>
        <div className="flex gap-2 items-end">
          <p className="text-gray-500 text-xs line-through">
            {product?.originalPrice}
          </p>
          <p className="text-l font-bold text-gray-800">
            {product?.discountedPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
