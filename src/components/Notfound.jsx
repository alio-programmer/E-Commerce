import React from "react";
import notfound from "../assets/Notfound.jpg";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="w-screen h-[85vh] flex flex-col justify-center items-center">
      <img className="w-[600px] h-[400px] rounded-xl" src={notfound} alt="" />
      <Link to="/" className="p-5 m-5 bg-slate-800 text-white rounded-full">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Notfound;
