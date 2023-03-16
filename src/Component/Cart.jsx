
import React, { useEffect } from 'react';
import CartItem from './Cart-item';
import { useCartData } from './context/CartContext';
import { useNavigate } from 'react-router-dom';
import { padding } from '@mui/system';

const Cart = () => {
  const { cart, cartTotal, totalItem } = useCartData();
  const navigate = useNavigate()

  useEffect(() => {
    console.log(cart, "carting");
  }, [cart])

  const clickHandeler = () => navigate("/Product");
  return (

    <div className='cart'>
      <div className='cart-dashboard' >
      </div>
      <div style={{ marginBottom: "40px" }}>
        <div
          style={{ display: "flex", cursor: "pointer" }}
          onClick={clickHandeler}>
          <h3 style={{ marginRight: "1200px" }}>Continue shopping</h3>
        </div>
        <hr />
      </div>
      <div className='cartbox '>
        {
          cart.map((item, i) => <CartItem item={item} key={i}></CartItem>)
        }
      </div>

      <div className='totalbox'
        style={{
          backgroundColor: "grey",
          width: "200px",
          marginTop: "30px",
          height: "100px",
          marginLeft: "1100px",
          color: "white",
          marginBottom: "2rem",
        }}>
        <div style={{ fontWeight: "100%", color: "white" }}>
          Total-Items : {totalItem}
        </div>
        <div style={{ fontWeight: "100%", color: "white" }}>Sub-Total : {cartTotal}</div>
        <div >   <hr />  </div>
        <div style={{ fontWeight: "100%", color: "white" }}>
          Total-Amount : {cartTotal}
        </div>
      </div>
    </div>

  )
}

export default Cart
