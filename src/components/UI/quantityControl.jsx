const QuantityControl = ({ quantity, increaseQuantity, decreaseQuantity }) => {
    return (
      <div className="flex items-center justify-between rounded-md w-32 bg-[#ebebeb]">
        <button
          className="w-1/4 text-black border-none rounded-md cursor-pointer transition duration-300 text-2xl hover:opacity-80"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="h-8 flex justify-center my-[6px] items-center text-xl w-1/2 border-l border-r border-gray-500">
          {quantity}
        </span>
        <button
          className="w-1/4 text-black border-none rounded-md cursor-pointer transition duration-300 text-2xl hover:opacity-80"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    );
  };
  
  export default QuantityControl;
  