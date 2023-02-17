
import React, { useEffect } from 'react'
import CartItem from './Cart-item'
import { cart } from './CartClass'
import { useData } from './DataContext'
const Cart = () => {
  const { ccart, deleteToCart } = useData();

  useEffect(() => {
    console.log(ccart, "carting");
  }, [ccart])

  console.log(ccart, "cartveiw");

  return (
    <>
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center" }}></div>
        <div style={{ marginBottom: "40px" }} >
          <div style={{ display: "flex" }}>
            <i> <h3>---</h3> </i>
            <h3 style={{ marginRight: "1200px" }}>Continue shopping</h3>
          </div>
          <hr />
        </div>

        <div>
          Total:{cart.total}
        </div>

        <div className='cart' style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}>
          {
            ccart.map((item, i) => <CartItem item={item} key={i} deleteToCart={deleteToCart}></CartItem>)
          }
        </div>
      </div>
    </>
  )
}


export default Cart
