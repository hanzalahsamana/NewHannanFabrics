import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh] max-h-[700px]">
      <h1 className="text-[40px]  mb-4">Your cart is empty</h1>
      <Link href='/products' className="py-[15px] w-[250px] my-6 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
            Continue Shopping
      </Link>
      <p className="text-gray-600 mb-3">Have an account?</p>
      <Link href="/login" className="text-blue-600 hover:underline">
        Log in to check out faster.
      </Link>
    </div>
  );
};

export default EmptyCart;
