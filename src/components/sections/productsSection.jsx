"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/Apis/FetchProducts';
import { setProductData, setLoading, setError } from '@/Redux/Products/productDataSlice';
import { useRouter } from 'next/navigation';
import ProductCard from '../UI/productCard';
import Link from 'next/link';

const ProductsSection = ({ maxLength, collection , name }) => {
    console.log(collection);

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
        <div className='max-w-[1500px]'>
            <h1 className='m-6 text-[30px] font-semibold text-left'>{name}</h1>
            <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[750px]:grid-cols-2 max-[470px]:grid-cols-1 gap-2 m-6">
                {products?.slice(0, maxLength).map((product) => (
                    (product?.collectionName?.toLowerCase() === collection || collection === "all") && (
                        <Link
                            className="cursor-pointer"
                            key={product._id}
                            href={`/products/${product._id}`}
                        >
                            <ProductCard product={product} />
                        </Link>
                    )
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;
