import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Globalapi from "../services/Globalapi";
import Loading from "./Loading";
import Notbough from "./Notbough";

const Cart = ({ cart, updatecart }) => {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  const [localcart, setlocalcart] = useState(cart);
  const productid = Object.keys(cart);

  //to make a localcart for update and delete in this component
  useEffect(() => {
    setlocalcart(cart);
  }, [cart]);

  //to get all products by their id from the api
  useEffect(() => {
    const mypromises = productid.map((id) => {
      return Globalapi.getproductbyid(id);
    });
    Promise.all(mypromises).then((product) => {
      setproducts(product);
      setloading(false);
    });
  }, [cart]);

  // to remove cart products
  const handleremove = (event) => {
    const product_id = event.target.getAttribute("productid");
    const newcart = { ...cart };
    delete newcart[product_id];
    updatecart(newcart);
    setloading(true);
  };

  //to send updated cart data to localstorage in app
  const updatenewcart = () => {
    updatecart(localcart);
  };

  // to increase decrease amount from cart
  const handlechange = (event) => {
    const newval = +event.target.value;
    const productid = event.target.getAttribute("productid");
    const newlocalcart = { ...localcart, [productid]: newval };
    if (newlocalcart[productid] == 0) {
      delete newlocalcart[productid];
    }
    setlocalcart(newlocalcart);
  };

  if (localcart.length == 0) {
    return <Notbough />;
  }

  // if loading is true set we are still waiting for cart to be updated
  if (loading) {
    return <Loading />;
  }

  //html running on the page
  return (
    <div>
      <div className="w-100% grid lg:grid-cols-4 place-items-center m-10 p-5">
        {products.map((item, i) => {
          return (
            <div
              className="w-[25vw] h-[40vh] flex flex-col justify-center items-center p-4 m-10"
              key={i}
            >
              <CartProduct
                product={item.data}
                quantity={localcart[item.data.id]}
              />
              <input
                productid={item.data.id}
                value={localcart[item.data.id]}
                type="number"
                onChange={handlechange}
                className="w-1/6 p-2 mb-2"
              ></input>
              <button
                productid={item.data.id}
                onClick={handleremove}
                className="p-2 bg-slate-400"
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
      <button
        className=" bg-slate-700 rounded-xl text-white p-3 m-2"
        onClick={updatenewcart}
      >
        Update Cart
      </button>
    </div>
  );
};
export default Cart;
