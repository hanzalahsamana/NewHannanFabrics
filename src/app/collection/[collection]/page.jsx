"use client";
import ProductsSection from '@/components/sections/productsSection';
import Loader from '@/components/UI/loader';
import React from 'react'
import { useSelector } from 'react-redux';

const Collection = ({ params }) => {
  const { products, loading, error } = useSelector((state) => state.productData);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <ProductsSection collection={params?.collection} maxLength={Infinity} />
  )
}

export default Collection
