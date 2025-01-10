"use client";

import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useDispatch, useSelector } from 'react-redux'
import { setCartData } from '@/Redux/CartData/cartDataSlice'
import { fetchProducts } from '@/Apis/FetchProducts'
import { fetchPagesContent } from '@/Apis/FetchPagesData'
import Loader from '../UI/loader'

const LayoutWithReduxState = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.productData);
  const { pagesLoading } = useSelector((state) => state.pagesContent);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts(dispatch);
      await fetchPagesContent(dispatch);
    };
    fetchData();
    if (typeof window !== "undefined") {
      dispatch(setCartData(localStorage.getItem('cartId')))
    }
  }, [dispatch])

  return (
    <div className='flex flex-col items-center'>
      {loading || pagesLoading ? <Loader /> : ''}
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutWithReduxState


