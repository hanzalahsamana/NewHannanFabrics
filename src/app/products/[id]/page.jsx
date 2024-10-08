"use client";

import React from "react";
import product1 from "../../../assets/images/productImages/Teal-Blue-1.jpg";
import ProductDetailCard from "@/components/UI/productDetailCard";

const ProductDetail = () => {
  const product = {
    id: 1,
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
  };
  return (
    <>
      <ProductDetailCard product={product} />
    </>
  );
};

export default ProductDetail;
