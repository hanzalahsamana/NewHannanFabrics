"use client";

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CollectionCard = ({collection}) => {
  return (
    <div className='rounded-[20px] cursor-pointer'>
        <div className='rounded-[10px] overflow-hidden'>
            <img className='hover:scale-[1.03] transition-all duration-[0.5s]' src={collection?.image} alt={collection?.alt} />
        </div>
        <div className='flex'>
            <h1>{collection?.name}</h1>
            <FaArrowRightLong/>
        </div>
    </div>
  )
}

export default CollectionCard;