"use client";
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[100vh] max-h-[900px]'>
            <video className='w-full h-full bg-cover object-cover' playsInline autoPlay loop muted>
                <source src='/WebsiteBannerVideo.mp4' type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Hero