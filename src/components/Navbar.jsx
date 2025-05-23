import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto px-4 sm:px-6">
      <NavLink to="/">
        <div className="ml-2 sm:ml-6">
          <img src={logo} className="h-10 sm:h-14" alt="Logo" />
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-3 sm:gap-x-6 mr-2 sm:mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="text-sm sm:text-base hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
            Home
          </p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-xl sm:text-2xl" />
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-xs sm:text-sm w-4 sm:w-5 h-4 sm:h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
