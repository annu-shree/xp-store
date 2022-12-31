import "./App.css";
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Component/Home/Home"
import Cart from "./Component/Cart"
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Contact from "./Component/Contact"
import About from "./Component/About"
import Product from "./Component/Product"
import SingleProduct from "./Component/SingleProduct"
import ErrorPage from "./Component/ErrorPage";
import Logout from "./Component/Logout.jsx"
import Whishlist from "./Component/Whishlist";
import DataContextProvider, {useData} from "./Component/DataContext";


const App = () => {
  return (

    <div className="App">
      <BrowserRouter>
      <Navbar/> 
      <DataContextProvider>
      <Routes>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Product/:id" element={<SingleProduct/>}></Route>
        <Route path="Product" element={<Product/>}></Route>
        <Route path="Cart" element={<Cart/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="Logout" element={<Logout/>}></Route>
        <Route path="Whishlist" element={<Whishlist/>}></Route>
      </Routes>
      </DataContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App ;
