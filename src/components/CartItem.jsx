import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };
  return (
    <div className="flex items-center p-3 sm:p-5 justify-between mt-2 mb-2 mx-2 sm:mx-5 border-b-[3px] border-slate-500">
      <div className="flex flex-col sm:flex-row p-2 sm:p-3 gap-3 sm:gap-5 items-center">
        <div className="w-full sm:w-[30%]">
          <img src={item.image} className="object-cover w-full h-32 sm:h-auto" />
        </div>
        <div className="w-full sm:w-[70%] self-start space-y-3 sm:space-y-5 sm:ml-5">
          <h1 className="text-lg sm:text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-sm sm:text-base text-slate-700 font-medium">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-green-600 font-bold text-base sm:text-lg">${item.price}</p>
            <button className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 sm:p-3 mr-2 sm:mr-3" onClick={removeFromCart}>
              <AiFillDelete className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
