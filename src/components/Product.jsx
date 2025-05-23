import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white hover:scale-105 sm:hover:scale-110 transition-all duration-300 ease-in gap-3 p-3 sm:p-4 mt-5 sm:mt-10 ml-2 sm:ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
      <div>
        <h1 className="text-gray-700 font-semibold text-base sm:text-lg text-left truncate mt-1 w-32 sm:w-40">
          {product.title}
        </h1>
      </div>
      <div>
        <p className="w-32 sm:w-40 text-gray-400 font-normal text-[8px] sm:text-[10px] text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[140px] sm:h-[180px]">
        <img
          src={product.image}
          alt="Product Image"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex justify-between items-center w-full mt-3 sm:mt-5">
        <p className="text-green-600 font-semibold text-sm sm:text-base">${product.price}</p>
        {cart.some((p) => p.id == product.id) ? (
          <button
            className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
