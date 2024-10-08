"use client";

import React from "react";
import styles from "./style.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartData } from "@/Redux/CartData/cartDataSlice";

const ProductDetailCard = ({product}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

 const handleAddToCart = ()=>{
  dispatch(addCartData({quantity:quantity , ...product}))
 }

  return (
    <div className={styles.container}>
      <div className={styles.productSection}>
        <div className={styles.productImages}>
          <img src={product.imagesUrl[0]} alt="Fabric" className={styles.mainImage} />
          <div className={styles.thumbnailContainer}>
            <img
              src={product.imagesUrl[0]}
              alt="thumbnail 1"
              className={styles.thumbnail}
            />
            <img
              src={product.imagesUrl[1]}
              alt="thumbnail 2"
              className={styles.thumbnail}
            />
            <img
              src={product.imagesUrl[2]}
              alt="thumbnail 3"
              className={styles.thumbnail}
            />
          </div>
        </div>

        <div className={styles.productDetails}>
          <p className={styles.brandName}>{product.brand}</p>
          <h1>{product.name}</h1>
          <div className={styles.reviews}>
            <p>
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>{" "}
              {product.reviews} Review
            </p>
          </div>
          <div className={styles.priceSection}>
            <span className={styles.strikeThrough}>
              Rs {product.originalPrice.toFixed(2)} PKR
            </span>
            <span className={styles.discountedPrice}>
              Rs {product.discountedPrice.toFixed(2)} PKR
            </span>
            <span className={styles.discountTag}>{product.discount}</span>
          </div>
          <p
            className={
              product.status ? `${styles.InStock}` : `${styles.OutStock}`
            }
          >
            {product.status ? "In Stock" : "Out Of Stock"}
          </p>

          <div className={styles.quantityContainer}>
            <button
              className={styles.quantityButton}
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className={styles.quantityDisplay}>{quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <div className={styles.productDetail}>
            <p>
              Type: <strong>{product.type}</strong>
            </p>
            <p>
              Size: <strong>{product.size}</strong>
            </p>
          </div>

          <div className={styles.buttons}>
          <button onClick={handleAddToCart} className="py-[15px] w-full mt-3 bg-white border-black border-[2px] text-[#000000] text-[16px]  transition-all duration-300 hover:scale-105">
            Add To Cart
          </button>
          <button className="py-[15px] w-full mt-3 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
            Buy It Now
          </button>
          </div>
          <p className={styles.note}>
            Please note that the actual color of the fabric may vary slightly
            due to photography lighting and screen settings.
          </p>

          <div className={styles.deliveryInfo}>
            <p>Delivery in 2-3 working days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
