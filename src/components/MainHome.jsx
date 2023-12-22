import React from "react";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link
        className="text-6xl font-bold bg-slate-800 p-6 m-5 text-white rounded-full"
        to="/products"
      >
        Explore Our Products
      </Link>
    </div>
  );
};

export default MainHome;
