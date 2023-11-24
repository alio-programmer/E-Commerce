import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Globalapi from '../services/Globalapi';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Productdetail = () => {
    const {pid} = useParams();
    const id = +pid;
    const [product, setproduct] = useState();

    useEffect((id)=>{
        const p = Globalapi.getproductbyid(pid)
        p.then((resp)=>{
            setproduct(resp.data);
        });
    },[pid])
    if(!product){
        return <Loading/>
    }
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-min-[100vh]'>
        <div className=' text-6xl font-bold m-5 p-4'>{product.title}</div>
        <img src={product.thumbnail} className='m-5 rounded-xl w-[500px] h-[500px]' alt="" />
        <div className='text-4xl font-bold'>${product.price}</div>
        <label className='flex flex-col m-2 justify-center items-center'>
            <input type="number" min={0} max={10} className='w-[60px] h-[30px] text-center rounded-lg border-black border-solid border-2' name="Add to cart"  id=""/>
            Add to cart
        </label>
        <div className='w-[400px] m-5 h-min text-xl text-center'>{product.description}</div>
        <div className=' m-5 child:m-3 child:bg-slate-600 child:p-2 child:rounded-xl child:text-white child-hover:text-blue-500'>
            {id > 1 && <Link to={"/products/"+ (id-1)}>Previous</Link>}
            <Link to={"/products/"+ (id+1)}>Next</Link>
        </div>
        <Link className='p-2 bg-slate-600 text-white hover:text-blue-500 rounded-xl' to={"/products"}>Back To Products Page</Link>
    </div>
  )
}

export default Productdetail