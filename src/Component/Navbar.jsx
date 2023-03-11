import React from 'react'
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated,logout } = useAuth0();
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
          <NavLink className="Navbar-link" to="/about">
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="Navbar-link" to="/contact">
            Contact
          </NavLink>
        </div>

        <div>
          <NavLink className="Navbar-link" to="/product">
            Product
          </NavLink>
        </div>

        {isAuthenticated? <div>
          <NavLink className="Navbar-link" >
            <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Logout
            </span>
          </NavLink>
        </div>:<div>
          <NavLink className="Navbar-link" >
            <span onClick={() => loginWithRedirect()}>
              Login
            </span>
          </NavLink>
        </div>}

        <div>
          <NavLink className="Navbar-link" to="/wishlist" >
            <i><span className="material-symbols-outlined">
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
            className="Navbar-link" to="/Cart">
            <i><span className="material-symbols-outlined">
              shopping_cart
            </span></i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
