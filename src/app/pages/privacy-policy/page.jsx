import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-[1500px] py-4 px-[3vw] max-[600px]:text-center">
      <h1 className="text-4xl font-bold text-center mb-6">PRIVACY POLICY</h1>
      <div className="mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          At Hannan Fabrics, we are committed to protecting your privacy and ensuring the security of any personal information you provide. This Privacy Policy outlines how we collect, use, and protect your information when you visit or make a purchase from our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-lg leading-relaxed mb-6">
          When you visit our website, we may collect the following information:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li><strong>Personal Information</strong>: When you place an order, sign up for our newsletter, or contact us, we collect personal details such as your name, email address, phone number, and shipping address.</li>
          <li><strong>Payment Information</strong>: We do not store any payment information. All transactions are securely processed through trusted third-party payment providers.</li>
          <li><strong>Usage Data</strong>: We collect information about how you use our website, including your browsing actions, pages viewed, and IP address to help improve our website and services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-lg leading-relaxed mb-6">
          We use the information collected for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you regarding your orders, updates, or special offers.</li>
          <li>To improve our website and enhance the shopping experience.</li>
          <li>To comply with legal obligations and ensure the security of our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
        <p className="text-lg leading-relaxed mb-6">
          We respect your privacy and do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers, such as:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>Payment processors for handling transactions.</li>
          <li>Shipping companies to deliver your orders.</li>
          <li>Analytics providers to improve our website performance.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          These third parties are obligated to protect your information and use it only for the purpose of providing their services to us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
        <p className="text-lg leading-relaxed mb-6">
          We take the security of your personal information seriously. We implement industry-standard security measures, including encryption and secure servers, to protect your data from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="text-lg leading-relaxed mb-6">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>Access your personal information that we hold.</li>
          <li>Correct any inaccuracies in your personal details.</li>
          <li>Delete your information from our systems upon request, unless it is required for legal or transactional purposes.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          To exercise these rights, please contact us at <a href="mailto:info.hannanfabrics@gmail.com" className="text-blue-500 underline">info.hannanfabrics@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="text-lg leading-relaxed mb-6">
          Our website uses cookies to enhance your experience. Cookies are small data files stored on your browser that help us recognize you when you visit our site, remember your preferences, and analyze how you use our website. You can choose to disable cookies in your browser settings, but this may affect your browsing experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Updates to This Privacy Policy</h2>
        <p className="text-lg leading-relaxed mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date at the top will be revised to reflect the most recent update.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          If you have any questions or concerns about this Privacy Policy or how your personal information is handled, feel free to contact us:
        </p>
        <ul className="list-none pl-0 text-lg">
          <li>Email: <a href="mailto:info.hannanfabrics@gmail.com" className="text-blue-500 underline">info.hannanfabrics@gmail.com</a></li>
          <li>Phone: +92 313 2148056</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
