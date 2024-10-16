"use client";

import ProductCard from "@/components/UI/productCard";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Products = ({maxLength = Infinity}) => {
  const router = useRouter()
  const products = useSelector((state)=> state.productData);

  return (
    <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[750px]:grid-cols-2 max-[470px]:grid-cols-1 gap-2 m-6">
      {products?.map((product , index) => (
        index < maxLength &&        
        <div key={product?.id} onClick={()=> router.push(`products/${product?.id}`)}>
          <ProductCard key={product.id} product={product}  />
        </div>
      ))}
    </div>
  );
};

export default Products;
