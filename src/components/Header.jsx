import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import About from './About'
import Signup from './Signup'
import Cart from './Cart'
const Header = ({productcount}) => {
  return (
    <div className=' bg-slate-500 flex flex-row items-center overflow-x-hidden'>
      <Link to="/" element={<Home/>} className='w-100% font-bold lg:text-6xl text-4xl flex justify-left text-white p-4 m-4'>~GOKART~</Link>
      <nav className=' w-full h-[80px]  p-3 child:m-5 flex items-center justify-end child:bg-slate-700 child:rounded-2xl child:text-white child:p-3 child-hover:text-blue-600'>
        <Link to="/products" element={<Contacts/>}>Products</Link>
        <Link to="/about" element={<About/>}>About</Link>
        <Link to="/signup" element={<Signup/>}>SignUp</Link>
        <div className='flex justify-center items-center'>
            <Link to="/cart" element={<Cart/>}>Cart:</Link>
            <h6>{productcount}</h6>
        </div>
      </nav>
    </div>
  )
}

export default Header