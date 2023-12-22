import React from "react";
import Productdetail from "./Productdetail";
import { Link } from "react-router-dom";

const Product = ({ id, title, thumbnail, price }) => {
  return (
    <div className="w-[300px] h-[350px] bg-slate-200 flex flex-col justify-center items-center m-2 p-[3px] rounded-xl ">
      <h1 className="mb-2 font-bold text-xl flex text-center">{title}</h1>
      <h2 className="mb-2 text-lg">${price}</h2>
      <img
        src={thumbnail}
        className="m-2 h-[200px] w-[200px] rounded-xl"
        alt=""
      />
      <Link
        to={"/products/" + id}
        className=" hover:text-blue-500 p-2 bg-slate-800 rounded-full text-white"
      >
        Details
      </Link>
    </div>
  );
};

export default Product;
