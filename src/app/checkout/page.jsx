import PaymentForm from '@/components/UI/PaymentForm'
import ProductsRecipt from '@/components/UI/productsRecipt'
import React from 'react'

const Checkout = () => {
  return (
    <div className='flex w-full' >
    <PaymentForm/>
    <ProductsRecipt/>
    </div>
  )
}

export default Checkout