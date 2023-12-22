import React from "react";

const CartProduct = ({ product, quantity }) => {
  return (
    <div className="flex items-center flex-col">
      <h4>{product.title}</h4>
      <p>Price:-${product.price}</p>
      <img
        src={product.thumbnail}
        className="w-[25vh] h-[25vh] m-1 object-contain"
        alt=""
      />
      <p>total:-${product.price * quantity}</p>
    </div>
  );
};

export default CartProduct;
