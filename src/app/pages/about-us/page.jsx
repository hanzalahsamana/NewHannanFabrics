'use client'
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container max-w-[1500px] py-4 px-[3vw] max-[600px]:text-center">
      <h1 className="text-4xl font-bold text-center mb-8">ABOUT US</h1>
      <div className="mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          At <span className="font-bold">Hannan Fabrics</span>, we specialize in offering premium unstitched shalwar kameez fabrics, crafted for those who value tradition and quality. Our journey started with a vision to bring authentic and high-grade fabric to customers who appreciate the fine details of Pakistani heritage clothing.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our collection reflects a deep understanding of the unique cultural styles, combining the elegance of traditional attire with contemporary fashion trends. Whether you need fabric for everyday wear or a special occasion, we ensure that our fabrics provide the comfort, durability, and aesthetic appeal you seek.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Unmatched Quality:</strong> We source the finest materials, ensuring long-lasting fabric that maintains its grace and comfort through every wear.</li>
          <li><strong>Variety & Choice:</strong> Our wide range of colors, patterns, and textures caters to every taste, allowing you to personalize your look.</li>
          <li><strong>Authenticity:</strong> We stay true to our roots, offering fabrics that reflect the richness of Pakistani tradition and style.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          We are committed to delivering a seamless shopping experience, with customer satisfaction being our top priority. Every purchase from Hannan Fabrics is more than just a transaction; it’s part of a cultural tradition that we proudly share with you.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg leading-relaxed mb-4">
          We are here to assist you with any inquiries or support you may need.
        </p>
        <ul className="list-none mb-6">
          <li><strong>Email:</strong> info.hannanfabrics@gmail.com</li>
          <li><strong>Phone:</strong> +92 313 2148056</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Thank you for being a part of the Hannan Fabrics family, where tradition meets modern elegance.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
