import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Globalapi from "../services/Globalapi.jsx";
import Product from "./Product.jsx";
import Loading from "./Loading.jsx";
const Home = () => {
  const [productlist, setproductlist] = useState([]);
  const [loading, setloading] = useState(true);
  const [query, setquery] = useState("");
  const [sort, setsort] = useState("Default");

  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = () => {
    Globalapi.productlist
      .then((products) => {
        setproductlist(products);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = productlist.filter((item) => {
    const lowertitle = item.title.toLowerCase();
    const lowercasequery = query.toLowerCase();
    return lowertitle.indexOf(lowercasequery) != -1;
  });

  if (sort == "price") {
    data.sort((x, y) => {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort((x, y) => {
      return x.title > y.title ? 1 : -1;
    });
  }

  if (loading) {
    return <Loading />;
  }

  const handlechange = (e) => {
    setquery(e.target.value);
  };

  const handlesortchange = (e) => {
    setsort(e.target.value);
  };
  return (
    <div className="w-full h-100% overflow-x-hidden ">
      <div className="w-100% h-100%">
        <div className="w-100% grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <div className="flex col-span-4 float-right place-content-end place-items-center p-5 ">
            <input
              type="text"
              value={query}
              placeholder="search"
              onChange={handlechange}
              className="m-2 h-[40px] p-2 dark:border-black dark:border-solid float-right dark:border-2 dark:rounded-2xl"
            />
            <select
              className="m-2 border-black border-solid border-2 rounded-xl p-1"
              onChange={handlesortchange}
              value={sort}
            >
              <option value="default">Default sort</option>
              <option value="name">sort by name</option>
              <option value="price">sort by price </option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-100% object-contain grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
        {data.map((item, i) => (
          <div key={i} className=" hover:scale-105">
            <Product
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
