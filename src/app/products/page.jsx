"use client";

import ProductCard from "@/components/UI/productCard";
import product1 from "../../assets/images/productImages/Teal-Blue-1.jpg";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Khaki - Wash n Wear Unstitched Fabric",
      alt: "Khaki - Wash n Wear Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 4,500.00 PKR",
      discountedPrice: "Rs. 2,660.00 PKR",
      discount: "-30% OFF",
      imageUrl: product1.src,
    },
    {
      id: 2,
      name: "Dark Green - 100% Pure Cotton Unstitched Fabric",
      alt: "Dark Green - 100% Pure Cotton Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 5,000.00 PKR",
      discountedPrice: "Rs. 2,800.00 PKR",
      discount: "-30% OFF",
      imageUrl: product1.src,
    },
    {
      id: 3,
      name: "Off White - Wash n Wear Unstitched Fabric",
      alt: "Off White - Wash n Wear Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 4,500.00 PKR",
      discountedPrice: "Rs. 2,660.00 PKR",
      discount: "-30% OFF",
      imageUrl: product1.src,
    },
    {
      id: 4,
      name: "Carol Light Blue - 100% Pure Cotton Unstitched Fabric",
      alt: "Carol Light Blue - 100% Pure Cotton Unstitched Fabric",
      brand: "HANNAN FABRICS",
      originalPrice: "Rs. 5,000.00 PKR",
      discountedPrice: "Rs. 2,800.00 PKR",
      discount: "-30% OFF",
      imageUrl: product1.src,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 m-6">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
