import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Signup from './components/Signup.jsx'
import Globalapi from './services/Globalapi.jsx'

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="*" element={<h1>404 page doesn't exists</h1>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
