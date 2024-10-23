import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="container max-w-[1500px] py-4 px-[3vw] max-[600px]:text-center">
      <h1 className="text-4xl font-bold text-center mb-6">RETURN POLICY</h1>
      <div className="mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          At Hannan Fabrics, customer satisfaction is our top priority. If you are not completely satisfied with your purchase, we are here to help. Please review our return policy below:
        </p>

        <h2 className="text-2xl font-semibold mb-4">Return Eligibility</h2>
        <p className="text-lg leading-relaxed mb-6">
          You have 30 days from the date of delivery to return your item for a refund or exchange. To be eligible for a return:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>The fabric must be unused, unwashed, and in its original condition.</li>
          <li>The fabric must be returned in the original packaging.</li>
          <li>Proof of purchase (receipt or order confirmation) must be provided.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
        <p className="text-lg leading-relaxed mb-6">
          The following items cannot be returned or exchanged:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>Fabrics that have been cut, altered, or tailored.</li>
          <li>Items purchased on clearance or as part of a special promotion.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return</h2>
        <p className="text-lg leading-relaxed mb-6">
          To start the return process, please contact us via email at <a href="mailto:info.hannanfabrics@gmail.com" className="text-blue-500 underline">info.hannanfabrics@gmail.com</a> with your order number and reason for return. Once your return is approved, we will provide instructions on how to ship the item back to us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Return Shipping</h2>
        <p className="text-lg leading-relaxed mb-6">
          Customers are responsible for covering the cost of return shipping unless the return is due to a defective or incorrect item. We recommend using a trackable shipping service to ensure your return reaches us safely. We are not responsible for lost or damaged returns.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
        <p className="text-lg leading-relaxed mb-6">
          Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within 7-10 business days to your original payment method.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
        <p className="text-lg leading-relaxed mb-6">
          If you would like to exchange your item for a different fabric or color, please contact us. Exchanges are subject to stock availability. If the desired fabric is unavailable, we will issue a refund.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Damaged or Incorrect Items</h2>
        <p className="text-lg leading-relaxed mb-6">
          If you receive a defective or incorrect item, please contact us immediately with photos and details of the issue. We will arrange for a replacement or full refund at no additional cost to you.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          If you have any questions about our return policy, feel free to contact us:
        </p>
        <ul className="list-none pl-0 text-lg">
          <li>Email: <a href="mailto:info.hannanfabrics@gmail.com" className="text-blue-500 underline">info.hannanfabrics@gmail.com</a></li>
          <li>Phone: +92 313 2148056</li>
        </ul>
      </div>
    </div>
  );
};

export default ReturnPolicy;
