"use client";

import React from "react";
import ProductDetailCard from "@/components/UI/productDetailCard";
import { useSelector } from "react-redux";

const ProductDetail = ({ params }) => {
  const { products, loading, error } = useSelector((state) => state.productData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const product = products?.find(item => item?._id === params?.id);

  return (
    <>
      <ProductDetailCard product={product} />
    </>
  );
};

export default ProductDetail;
