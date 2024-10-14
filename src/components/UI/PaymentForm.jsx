"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import FormInput from "./formInput";
import { Input } from "postcss";

const PaymentForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    appartment: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { email, country, firstName, lastName, address, city, phone } =
      formData;

    if (!email) newErrors.email = "email is required";
    if (!country) newErrors.country = "Country is required";
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      country,
      firstName,
      lastName,
      address,
      appartment,
      city,
      postalCode,
      phone,
    } = formData;

    const data = {
      from: "Hannan Fabrics",
      to: "Hanzalah Samana",
      customerInfo: {
        email,
        firstName,
        lastName,
        phone,

        city,
        country,
        address,
        postalCode,
        appartment,
      },
      orderData: {
        items: [
          {
            id: 1,
            name: "Shan-e-Azwaan",
            price: 100,
            totalPrice: 200,
            image: "../../../ABC.png",
            quantity: 2,
          },
          {
            id: 2,
            name: "heritage",
            price: 150,
            totalPrice: 150,
            image: "../../../ABCD.png",
            quantity: 1,
          },
        ],
        tax: 10,
        shipping: 50,
        discount: 20,
        total: 390,
      },
    };

    if (!validateForm()) {
      return;
    }

    emailjs
      .send(
        "service_efmya6i",
        "template_tfzxitb",
        formData,
        "jpZOa3MoTD5kfqqO9"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({
            email:'',
          country: "",
          firstName: "",
          lastName: "",
          address: "",
          appartment: "",
          city: "",
          postalCode: "",
          phone: "",
        });
        setErrors({});
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });
  };

  return (
    <div className="w-full flex flex-col items-end py-[60px] px-[40px]">
      <div className="max-w-[500px] w-full">
        <form onSubmit={handleSubmit} className="flex flex-wrap">
          <div className="w-full">
            <h2 className="text-[24px] font-medium mb-4">Contact</h2>

            <FormInput
              type="email"
              placeholder="Email"
              handleChange={handleChange}
              field={"email"}
              errors={errors}
              formData={formData}
            />
          </div>
          <div className="w-full">
            <h2 className="text-[24px] font-medium mb-4">Payment</h2>
            <p className="text-gray-500 mb-4">
              All transactions are secure and encrypted.
            </p>
            <div className="cursor-pointer h-[50px] pl-[20px] border-[1px] flex items-center rounded-md border-[blue] bg-[#e9f0fc] ">
              Cash on Delivery (COD)
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-[24px] font-medium my-6">Billing address</h3>
            <FormInput
              type="text"
              placeholder="Country"
              handleChange={handleChange}
              field={"country"}
              errors={errors}
              formData={formData}
            />
            <div className="flex gap-[10px] w-full">
              <FormInput
                type="text"
                placeholder="First Name"
                handleChange={handleChange}
                field={"firstName"}
                errors={errors}
                formData={formData}
              />
              <FormInput
                type="text"
                placeholder="Last Name"
                handleChange={handleChange}
                field={"lastName"}
                errors={errors}
                formData={formData}
              />
            </div>
            <FormInput
              type="text"
              placeholder="Address"
              handleChange={handleChange}
              field={"address"}
              errors={errors}
              formData={formData}
            />
            <FormInput
              type="text"
              placeholder="Appartment (Optional)"
              handleChange={handleChange}
              field={"appartment"}
              errors={errors}
              formData={formData}
            />
            <div className="flex gap-[10px] w-full">
              <FormInput
                type="text"
                placeholder="City"
                handleChange={handleChange}
                field={"city"}
                errors={errors}
                formData={formData}
              />
              <FormInput
                type="number"
                placeholder="Postal Code (Optional)"
                handleChange={handleChange}
                field={"postalCode"}
                errors={errors}
                formData={formData}
              />
            </div>
            <FormInput
              type="tel"
              placeholder="Phone"
              handleChange={handleChange}
              field={"phone"}
              errors={errors}
              formData={formData}
            />
          </div>
          <button className="py-[20px] w-full mt-3 bg-[#3973B0] text-[#e6e6e6] text-[18px] font-semibold rounded-md transition-all duration-300 hover:scale-105">
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
