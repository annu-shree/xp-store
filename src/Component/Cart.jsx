import React from 'react'
import CartItem from './Cart-item'

const Cart = () => {
  return (
    <>

      <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center" }}>

        <div style={{ marginBottom: "40px"}} >
          <div style={{display:"flex"}}>
          <i> <h3>---</h3> </i>
          <h3 style={{ marginRight: "1200px" }} >Continue shopping</h3>
         </div>
         <hr />
        </div> 
        <div className='container' style={{ backgroundColor: "skyblue", width: "1000px", height: "400px"}}>
         <CartItem></CartItem>
        </div>
      </div>

    </>
  )
}

export default Cart
