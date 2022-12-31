

import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    < div className='Navbar'>
     
        
    <div className='store-icon'>
       <b>Xp</b>store
    </div>

          <div className='Navbar-link-div'>
           <NavLink className="Navbar-link"  to="/">
            Home
           </NavLink>

       
       
       
           <NavLink className="Navbar-link"  to="/About">
            About
           </NavLink>
    

   
           <NavLink className="Navbar-link"  to="/Contact">
            Contact
           </NavLink>
    
    

     
           <NavLink  className="Navbar-link"  to="/Product">
            Product
           </NavLink>
          
           <NavLink className="Navbar-link"  to="/Logout">
            Logout
           </NavLink>
    
        
           <NavLink className="wish-link"  to="/whishlist">
             <img src=".\images\wishlist.png" alt="" width="35px" height="35px"></img>
           </NavLink>

  
           <NavLink className="cart-link"  to="/Cart">
            <img src="./images/shopping-cart.png"    className='cart-img'  alt=""  width="50px"  height="50px"   ></img>
           </NavLink>
          
          </div>    
     
    </div>
  )
}

export default Navbar;
