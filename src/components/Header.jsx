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
    <>
      <nav className=' w-full h-[80px] overflow-x-hidden p-3 bg-slate-500 border-black border-solid border-2 flex items-center justify-evenly child:bg-slate-700 child:rounded-2xl child:text-white child:p-3 child-hover:text-blue-600'>
        <Link to="/" element={<Home/>}>Home</Link>
        <Link to="/products" element={<Contacts/>}>Products</Link>
        <Link to="/about" element={<About/>}>About</Link>
        <Link to="/signup" element={<Signup/>}>SignUp</Link>
        <div className='flex justify-center items-center'>
            <Link to="/cart" element={<Cart/>}>Cart:</Link>
            <h6>{productcount}</h6>
        </div>
      </nav>
    </>
  )
}

export default Header