import React from "react";
import logo from "../assets/loading.gif";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className=" text-blue-500 flex justify-center text-6xl font-bold items-center w-[100vw] h-[85vh]">
        <FadeLoader></FadeLoader>
      </div>
    </>
  );
};

export default Loading;
