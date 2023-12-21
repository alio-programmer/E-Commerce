import React from 'react'

const CartProduct = ({ product, quantity }) => {
  return (
    <div>
      {product.title}
      <img src={product.thumbnail} className='w-[25vh] h-[25vh] m-1 object-contain' alt="" />
      <p className='flex justify-center'>total:-{product.price*quantity}$</p>
    </div>
  )
}

export default CartProduct

// return <div className='w-[25vw] h-[40vh] flex flex-col justify-center items-center p-4 m-5' key={i}>
// {p.data.title}
// <img src={p.data.thumbnail} className='w-[25vh] h-[25vh] m-3 object-contain' alt="" />
// <input
//   productid={p.data.id}
//   value={localcart[p.data.id]}
//   type='number'
//   onChange={handlechange}
//   className='w-1/6 p-2 mb-2'>
// </input>
// <button productid={p.data.id} onClick={handleremove} className='p-2 bg-slate-400'>remove</button>