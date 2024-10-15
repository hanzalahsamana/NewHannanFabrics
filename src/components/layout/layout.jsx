import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useDispatch } from 'react-redux'
import { setCartData } from '@/Redux/CartData/cartDataSlice'

const Layout = ({ chidren }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCartData(JSON.parse(localStorage.getItem('cartDataa'))))
    }, [])
    return (
        <>
            <Header />
            {chidren}
            <Footer />
        </>
    )
}

export default Layout