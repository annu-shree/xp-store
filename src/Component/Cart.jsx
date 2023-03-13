
import React, { useEffect } from 'react';
import CartItem from './Cart-item';
import { useCartData } from './context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, cartTotal, totalItem } = useCartData();
  const navigate = useNavigate()

  useEffect(() => {
    console.log(cart, "carting");
  }, [cart])
  const clickHandeler = () => navigate("/Product");
  return (
   
      <div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          marginBottom: "20px"
        }}>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={clickHandeler}
          >
            <i> <h3>---</h3> </i>
            <h3 style={{ marginRight: "1200px" }}>Continue shopping</h3>
          </div>
          <hr />
        </div>
        <div className='cart' style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding:"20px",
          justifyContent: "space-around",
          border: "2px solid black",
          width: "1100px",
          marginLeft: "200px",
          gap:"30px"

        }}>
          {
            cart.map((item, i) => <CartItem item={item} key={i}></CartItem>)
          }
        </div>

        <div style={{ border: "2px solid black", width: "200px", marginTop: "30px", height: "100px",marginLeft:"1100px" }}>
          <div style={{ fontWeight: "100%" }}>
            Total-Items : {totalItem}
          </div>
          <div>Sub-Total : {cartTotal}</div>
          <div >   <hr />  </div>
          <div>
            Total-Amount : {cartTotal}
          </div>
        </div>
      </div>

  )
}

export default Cart
