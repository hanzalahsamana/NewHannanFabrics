import { useSelector } from "react-redux";
import Loader from "./loader";
import ButtonLoader from "./buttonLoader";

const QuantityControl = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  const { loading } = useSelector((state) => state?.cartData)

  return (
    <div className="flex items-center justify-between rounded-md w-32 bg-[#ebebeb]">
      <button
        disabled={loading}
        className={`w-1/4 text-black border-none rounded-md ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} transition duration-300 text-2xl hover:opacity-80`}
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="h-8 flex justify-center my-[6px] items-center text-xl w-1/2 border-l border-r border-gray-500">
        { quantity}

      </span>
      <button
        disabled={loading}
        className={`w-1/4 text-black border-none rounded-md ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} transition duration-300 text-2xl hover:opacity-80`}
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
