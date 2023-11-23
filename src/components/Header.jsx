import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import About from './About'
import Signup from './Signup'
const Header = () => {
  return (
    <>
      <nav className='w-full h-[60px] bg-slate-500 border-black border-solid border-2 flex items-center justify-evenly child:bg-slate-700 child:rounded-2xl child:text-white child:p-3 child-hover:text-blue-600'>
        <Link to="/" element={<Home/>}>Home</Link>
        <Link to="/contacts" element={<Contacts/>}>Contacts</Link>
        <Link to="/about" element={<About/>}>About</Link>
        <Link to="/signup" element={<Signup/>}>SignUp</Link>
      </nav>
    </>
  )
}

export default Header