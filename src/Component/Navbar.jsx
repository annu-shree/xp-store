import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const clickHandeler = () => {
      navigate("/")
  }
  return (

    < div className='Navbar'>
      <div
        className='store-icon'
        onClick={()=>clickHandeler()}
        >
       <b>Xp</b>Store
      </div>

      <div
        className='Navbar-link-div'
        style={{
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

        {/* {isAuthenticated? <div>
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
        </div>} */}

        <div>
          <NavLink className="Navbar-link" to="/wishlist" >
            <i><span className="material-symbols-outlined">
              favorite
            </span></i>
          </NavLink>
        </div>

        <div>
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
