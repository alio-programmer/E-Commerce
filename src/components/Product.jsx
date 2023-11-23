import React from 'react'

const Product = ({title, thumbnail, price}) => {
    return (
        <div className='w-[300px] h-[300px] bg-slate-400 flex flex-col justify-center items-center m-2 p-[3px] rounded-xl '>
            <h1 className='mb-2 font-bold text-xl'>{title}</h1>
            <h2 className='mb-2 text-lg'>${price}</h2>
            <img src={thumbnail} className='m-2 h-[200px] w-[200px] rounded-xl' alt="" />
        </div>
    )
}

export default Product