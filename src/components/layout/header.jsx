"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../../assets/images/logos/logo.webp";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()
  const cartData = useSelector((state) => state?.cartData || [])
  const totalQuantity = cartData.reduce((accumulator, cartItem) => {
    return accumulator + (cartItem?.quantity || 0);
  }, 0);
  useEffect(()=>{

    
    window.addEventListener('scroll' ,()=>{
      if(document.body.getBoundingClientRect().top < -430){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    })
  
    },[])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full transition-all duration-300 ease-in-out top-0 z-10 ${pathname === "/"?'fixed':'sticky'} ${pathname === "/" && !isScrolled ?'bg-gradient-to-b from-black to-transparent text-white':'bg-white text-black shadow-md ' } ${pathname === "/"&&'fixed'}`}>
      <div className="container mx-auto flex justify-between gap-10 items-center max-w-[1200px] py-4 px-[20px] md:px-[40px]">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="flex items-center">
          <img src={logo.src} alt="Hannan Fabrics Logo" className="w-20" />
        </div>

        <nav className="hidden md:flex gap-3 space-x-4">
          <Link className={`text-[18px] hover:opacity-[0.6] ${pathname === '/' ? 'underline font-semibold' : ''}`} href="/">
            Home
          </Link>
          <Link className={`text-[18px] hover:opacity-[0.6] ${pathname === '/heritage' ? 'underline font-semibold' : ''}`} href="/heritage">
            Heritage
          </Link>
          <Link className={`text-[18px] hover:opacity-[0.6] ${pathname === '/shane-azwan' ? 'underline font-semibold' : ''}`} href="/shane-azwan">
            Shane Azwan
          </Link>
          <Link className={`text-[18px] hover:opacity-[0.6] ${pathname === '/products' ? 'underline font-semibold' : ''}`} href="/products">
            Products
          </Link>
          <Link className={`text-[18px] hover:opacity-[0.6] ${pathname === '/contact' ? 'underline font-semibold' : ''}`} href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4 text-[24px]">
          <button className=" hover:text-yellow-500 relative">
            <Link href="/cart">
              <HiOutlineShoppingBag />
              <span className="absolute text-black text-[12px] w-[18px] h-[18px] rounded-full bg-white right-[-4px] bottom-[-6px] ">{totalQuantity}</span>
            </Link>
          </button>
        </div>

      </div>

      <div className={`max-w-[1500px] md:hidden transition-all duration-3000 ease-in-out ${isOpen ? 'max-h-[260px]' : 'max-h-[0px] overflow-hidden'}`}>
        <nav className="flex flex-col gap-6 p-[30px] bg-white py-4">
          <Link onClick={toggleMenu} className={`text-[18px] hover:opacity-[0.6] ${pathname === '/' ? 'underline font-semibold' : ''}`} href="/">
            Home
          </Link>
          <Link onClick={toggleMenu} className={`text-[18px] hover:opacity-[0.6] ${pathname === '/heritage' ? 'underline font-semibold' : ''}`} href="/heritage">
            Heritage
          </Link>
          <Link onClick={toggleMenu} className={`text-[18px] hover:opacity-[0.6] ${pathname === '/shane-azwan' ? 'underline font-semibold' : ''}`} href="/shane-azwan">
            Shane Azwan
          </Link>
          <Link onClick={toggleMenu} className={`text-[18px] hover:opacity-[0.6] ${pathname === '/products' ? 'underline font-semibold' : ''}`} href="/products">
            Products
          </Link>
          <Link onClick={toggleMenu} className={`text-[18px] hover:opacity-[0.6] ${pathname === '/contact' ? 'underline font-semibold' : ''}`} href="/contact">
            Contact
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Header;
