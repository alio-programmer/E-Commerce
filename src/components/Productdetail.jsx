import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Globalapi from "../services/Globalapi";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Productdetail = ({ onAddToCart }) => {
  const { pid } = useParams();
  const id = +pid;
  const [product, setproduct] = useState();
  const [count, setcount] = useState(1);

  useEffect(
    (id) => {
      const p = Globalapi.getproductbyid(pid);
      p.then((resp) => {
        setproduct(resp.data);
      });
      p.catch((error) => {
        console.log(error);
      });
    },
    [pid]
  );

  const handlecountchange = (e) => {
    setcount(+e.target.value);
  };
  const handlebuttonclick = () => {
    onAddToCart(pid, count);
    setcount(1);
  };

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-min-[100vh] overflow-hidden">
      <div className=" text-6xl font-bold m-5 p-4">{product.title}</div>

      <img
        src={product.thumbnail}
        className="m-5 rounded-xl w-[500px] h-[500px]"
        alt=""
      />

      <div className="text-4xl font-bold">${product.price}</div>

      <input
        type="number"
        min={1}
        max={10}
        className="w-[60px] h-[30px] text-center rounded-lg border-black border-solid border-2"
        name="Add to cart"
        value={count}
        onChange={handlecountchange}
        placeholder={1}
      />
      <button
        className="bg-slate-600 p-2 m-3 rounded-xl text-white hover:text-blue-500"
        onClick={handlebuttonclick}
      >
        Add To Cart
      </button>

      <div className="w-[400px] m-5 h-min text-xl text-center">
        {product.description}
      </div>

      <div className=" m-5 child:m-3 child:bg-slate-600 child:p-2 child:rounded-xl child:text-white child-hover:text-blue-500">
        {id > 1 && <Link to={"/products/" + (id - 1)}>Previous</Link>}
        <Link to={"/products/" + (id + 1)}>Next</Link>
      </div>

      <Link
        className="p-2 bg-slate-600 text-white hover:text-blue-500 rounded-xl"
        to={"/products"}
      >
        Back To Products Page
      </Link>
    </div>
  );
};

export default Productdetail;
