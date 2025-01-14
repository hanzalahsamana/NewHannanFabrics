"use client";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectPageByType } from '@/Redux/PagesContent/PagesContentSlice';
import { SITE_NAME } from '../../../config';
import { FaArrowRightLong } from 'react-icons/fa6';

const Footer = () => {

  const SiteLogo = useSelector((state) =>
    selectPageByType(state, "Site Logo")
  );
  const ContactDetails = useSelector((state) =>
    selectPageByType(state, "Contact")
  );
  const { categories } = useSelector((state) => state?.categories);

  return (
    <div className="bg-[#21222A] py-10 px-10 text-white w-full max-w-[1500px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm px-4 md:px-0">

        <div>
          <Link href={'/'}>
            <img src={SiteLogo?.image} alt="Hannan Fabrics Logo" className="mb-4" />
          </Link>
          <p>Call Us at:</p>
          <p className="font-bold">{ContactDetails?.phone}</p>
          <p className="mt-4">For Business Queries:</p>
          <p className="font-bold">{ContactDetails?.email}</p>
          {/* <div className="flex mt-4 space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div> */}
        </div>

        <div>
          <h4 className="font-bold mb-4">ORDER INFO</h4>
          <ul>
            <li className="mb-2 hover:opacity-[0.7]"><a href="/pages/return-policy">RETURN POLICY</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a href="/pages/privacy-policy">PRIVACY POLICY</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a href="/pages/terms-of-service">TERMS OF SERVICE</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a href="/pages/shipping-policy">SHIPPING POLICY</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a href="/pages/about-us">ABOUT US</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a href="/pages/faqs">FAQs</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">SHOP</h4>
          <ul>
            {categories?.map((category , i) => (
              <li key={i} className="mb-2 hover:opacity-[0.7]"><a href={`/collection/${category?.link}`}>{category?.name}</a></li>
            ))}
            <li className="mb-2 hover:opacity-[0.7]"><a href="/products">ALL PRODUCTS</a></li>
          </ul>
        </div>

        <div className="flex items-start">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 px-4 py-[10px] text-lg text-white bg-[#2563eb] rounded-sm transition duration-200 hover:bg-blue-700">
            <FaArrowRightLong />
          </button>
        </div>

      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-600 pt-4">
        <p>© 2024, {SITE_NAME} · <a href="/pages/privacy-policy" className="text-white">Privacy policy</a></p>
      </div>

    </div>

  );
};

export default Footer;
