"use client";

import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CollectionCard = ({collection}) => {
  return (
    <Link href={collection?.link}>
    <div className='rounded-[20px] cursor-pointer'>
        <div className='rounded-md overflow-hidden'>
            <img className='hover:scale-[1.03] transition-all duration-[0.5s]' src={collection?.image} alt={collection?.alt} />
        </div>
        <div className='flex justify-center items-center gap-4 pt-2'>
            <h1>{collection?.title}</h1>
            <FaArrowRightLong/>
        </div>
    </div>
    </Link>
  )
}

export default CollectionCard;