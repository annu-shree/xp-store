import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Component/Home/Home"
import Cart from "./Component/Cart"
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Contact from "./Component/Contact"
import About from "./Component/About"
import Product from "./Component/Product/Product"
import SingleProduct from "./Component/SingleProduct"
import ErrorPage from "./Component/ErrorPage";
import Logout from "./Component/Logout.jsx"
import Wishlist from "./Component/Wishlist";
import ContextWrapper from "./Component/context/ContextWrapper";
//9685298874 Golu yadav

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="product/:id" element={<SingleProduct/>}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="logout" element={<Logout />}></Route>
            <Route path="wishlist" element={<Wishlist/>}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </ContextWrapper>
      </BrowserRouter>
    </div>
  )
}

export default App;
