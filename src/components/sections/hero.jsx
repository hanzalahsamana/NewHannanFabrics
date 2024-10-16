"use client";
import React from 'react'
import heroVedio from "@/assets/images/productImages/Teal-Blue-1.jpg"

const Hero = () => {
    return (
        <div className='h-[100vh]'>
            <video className='w-full h-full bg-cover object-cover' playsInline autoPlay loop muted>
                <source src='/WebsiteBannerVideo.mp4' type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Hero