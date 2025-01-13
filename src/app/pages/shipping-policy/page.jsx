import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container max-w-[1500px] py-4 px-[3vw] max-[600px]:text-center">
      <h1 className="text-4xl font-bold text-center mb-6">SHIPPING POLICY</h1>
      <div className=" mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          At Hannan Fabrics, we strive to ensure that your orders are processed and delivered in a timely manner. Please read our shipping policy carefully to understand how we handle your shipments.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
        <p className="text-lg leading-relaxed mb-6">
          All orders are processed within 1 to 2 business days after receiving your order confirmation. You will receive a notification once your order has been shipped.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Shipping Time</h2>
        <p className="text-lg leading-relaxed mb-6">
          We offer standard shipping with an estimated delivery time of 4 to 5 business days for most destinations within Pakistan. For international orders, delivery times may vary depending on the destination, and you will be informed of the estimated delivery time during the checkout process.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Shipping Charges</h2>
        <p className="text-lg leading-relaxed mb-6">
          Shipping charges are calculated at checkout based on your location and the weight of your order. Any additional fees, such as customs duties for international orders, will be the responsibility of the customer.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
        <p className="text-lg leading-relaxed mb-6">
          Once your order is dispatched, we will provide you with a tracking number so that you can monitor the status of your shipment. You can track your order through the shipping provider's website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Delivery Issues</h2>
        <p className="text-lg leading-relaxed mb-6">
          If you experience any issues with your shipment, such as delays or lost packages, please contact our customer support at <a href="mailto:info.hannanfabrics@gmail.com" className="text-blue-500 underline">info.hannanfabrics@gmail.com</a> or +92 313 2148056. We will work with the shipping provider to resolve any problems as quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Incorrect Shipping Information</h2>
        <p className="text-lg leading-relaxed mb-6">
          Please ensure that the shipping address provided during checkout is accurate and complete. Hannan Fabrics is not responsible for delays or failed deliveries due to incorrect shipping information. In such cases, the customer may be responsible for any additional shipping costs.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
