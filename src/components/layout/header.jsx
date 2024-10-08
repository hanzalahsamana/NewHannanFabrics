"use client";

import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../../assets/images/logos/logo.webp";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-10">
        <div className="flex items-center">
          <img src={logo.src} alt="Hannan Fabrics Logo" className="w-20" />
        </div>
        <nav className="flex space-x-8">
          <Link href="/" className="text-yellow-500 font-bold">
            Home
          </Link>
          <Link
            href="/heritage"
            className="text-gray-600 hover:text-yellow-500"
          >
            Heritage
          </Link>
          <Link
            href="/shan-e-azwaan"
            className="text-gray-600 hover:text-yellow-500"
          >
            Shan-e-Azwaan
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-yellow-500"
          >
            Products
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-yellow-500">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4 text-[24px]">
          <button className="text-gray-600 hover:text-yellow-500">
            <CiUser />
          </button>
          <button className="text-gray-600 hover:text-yellow-500">
            <Link href="/cart">
              <HiOutlineShoppingBag />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
