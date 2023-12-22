import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";
import Signup from "./components/Signup.jsx";
import Productdetail from "./components/Productdetail.jsx";
import MainHome from "./components/MainHome.jsx";
import Notfound from "./components/Notfound.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const saveddatastring = localStorage.getItem("my-cart") || "{}";
  const saveddata = JSON.parse(saveddatastring);

  const [cart, setcart] = useState(saveddata);

  const updatecart = (newcart) => {
    setcart(newcart);
    const newcartstring = JSON.stringify(newcart);
    localStorage.setItem("my-cart", newcartstring);
  };

  const handletocart = (Productid, count) => {
    const oldcount = cart[Productid] || 0;
    const newcart = { ...cart, [Productid]: oldcount + count };
    updatecart(newcart);
  };

  const totalcount = Object.keys(cart).reduce((previous, current) => {
    return previous + cart[current];
  }, 0);

  return (
    <>
      <Router>
        <Header productcount={totalcount} />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/products/:pid"
            element={<Productdetail onAddToCart={handletocart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} updatecart={updatecart} />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
