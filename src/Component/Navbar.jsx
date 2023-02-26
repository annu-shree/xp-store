

import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    < div className='Navbar'>

      <div
        className='store-icon'
        style={{
          borderBottom: "3px solid black",
          height: "60px",
          width: "180px"
        }}>
        <b> Xp</b>store
      </div>

      <div
        className='Navbar-link-div'
        style={{
          paddingTop: "25px",
          display: "flex",
          flexDirection: "row",
        }}>

        <div>
          <NavLink className="Navbar-link" to="/">
            Home
          </NavLink>
        </div>

        <div>
          <NavLink className="Navbar-link" to="/About">
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="Navbar-link" to="/Contact">
            Contact
          </NavLink>
        </div>

        <div>
          <NavLink className="Navbar-link" to="/Product">
            Product
          </NavLink>
        </div>

        <div>
          <NavLink className="Navbar-link" to="/Logout">
            Logout
          </NavLink>
        </div>




        <div>
          <NavLink className="wish-link" to="/whishlist" >
            <i><span class="material-symbols-outlined">
              favorite
            </span></i>
          </NavLink>
        </div>



        <div
          style={{
            marginLeft: "18px",
            marginRight: "20px"
          }}>
          <NavLink
            className="cart-link" to="/Cart">
            <i><span class="material-symbols-outlined">
              shopping_cart
            </span></i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
