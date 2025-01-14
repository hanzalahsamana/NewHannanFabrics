'use client';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectPageByType } from "@/Redux/PagesContent/PagesContentSlice";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const selectedPage = useSelector((state) =>
        selectPageByType(state, "FAQ")
    );
    
    // const faqs = [
    //     {
    //         question: 'What type of fabrics do you offer?',
    //         answer: 'We specialize in unstitched fabrics for shalwar kameez. Our collection includes high-quality materials perfect for both casual and formal wear. We offer a variety of textures, colors, and patterns to suit every taste.'
    //     },
    //     {
    //         question: 'Are your fabrics available in different colors and patterns?',
    //         answer: 'Yes, we provide a wide range of fabrics in various colors, patterns, and textures. Whether you prefer classic shades or vibrant, contemporary styles, we have something for everyone.'
    //     },
    //     {
    //         question: 'How can I place an order?',
    //         answer: 'Placing an order is simple! Browse our collection, select the fabric you want, add it to your cart, and proceed to checkout. For help, contact us at info.hannanfabrics@gmail.com or call +92 313 2148056.'
    //     },
    //     {
    //         question: 'How do I care for the fabric?',
    //         answer: 'To maintain the quality of your fabric, hand wash with mild detergent or dry clean. Avoid harsh chemicals and follow the care instructions provided with your purchase.'
    //     },
    // ];

    return (
        <div className="max-w-[1000px] mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
            {selectedPage?.faqs?.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4 ">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full text-left flex justify-between items-center"
                    >
                        <h2 className="text-lg max-[550px]:text-[15px] font-semibold" >{faq?.Q}</h2>
                        <span className={`transition ${openIndex !== index && 'rotate-45'}`}><IoClose /></span>
                    </button>
                    <div className={`transition-all ${openIndex === index ? 'h-[100px]' : 'h-[0px]'} overflow-hidden`}>

                        <p className={`mt-2 max-[550px]:text-[15px] text-gray-600`}>
                            {faq?.A}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
