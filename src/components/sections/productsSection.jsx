"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/Apis/FetchProducts';
import { setProductData, setLoading, setError } from '@/Redux/Products/productDataSlice';
import { useRouter } from 'next/navigation';
import ProductCard from '../UI/productCard';

const ProductsSection = ({ maxLength, collection }) => {
    const dispatch = useDispatch();
    const router = useRouter()
    const { products, loading, error } = useSelector((state) => state.productData);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[750px]:grid-cols-2 max-[470px]:grid-cols-1 gap-2 m-6">
            {products?.slice(0, maxLength).map((product) => (
                (product.collectionName === collection || collection === "all") && (
                    <div
                        className="cursor-pointer"
                        key={product._id}
                        onClick={() => router.push(`products/${product._id}`)}
                    >
                        <ProductCard product={product} />
                    </div>
                )
            ))}
        </div>
    );
};

export default ProductsSection;
