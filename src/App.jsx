import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Signup from './components/Signup.jsx'
import Productdetail from './components/Productdetail.jsx'
import MainHome from './components/MainHome.jsx'
import Notfound from './components/Notfound.jsx'

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<MainHome/>}/>
            <Route path="/products" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/products/:pid" element={<Productdetail/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
