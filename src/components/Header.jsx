import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import About from "./About";
import Signup from "./Signup";
import Cart from "./Cart";
import { RiShoppingCartFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Header = ({ productcount }) => {
  return (
    <div className=" bg-slate-500 flex flex-row items-center overflow-x-hidden">
      <Link
        to="/"
        element={<Home />}
        className="w-100% font-bold lg:text-6xl text-4xl flex justify-left text-white p-4 m-4"
      >
        ~GOKART~
      </Link>
      <nav className="child-hover:transition child-hover:duration-500 child-hover:ease-in-out child-hover:transform w-full h-[80px] p-3 child:m-5 flex items-center justify-end child:rounded-2xl child:text-black child:p-3 child-hover:text-white">
        <Link className="text-5xl" to="/signup" element={<Signup />}>
          <CgProfile />
        </Link>
        <div className="flex justify-center items-center">
          <Link className="text-5xl" to="/cart" element={<Cart />}>
            <RiShoppingCartFill />
          </Link>
          <h6 className="text-3xl">{productcount}</h6>
        </div>
      </nav>
    </div>
  );
};

export default Header;
