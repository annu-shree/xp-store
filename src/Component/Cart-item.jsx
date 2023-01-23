import React from 'react'

const CartItem = () => {
  return (
    <>
     <hr />
          <div className='cart-item' style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}>
            <div><img src="" alt="" /></div>
            <div><h4>Title</h4></div>

            <div style={{
              display: "flex",
              marginTop: "20px"
            }}>
              <i>+</i>
              <div><input type="text" style={{ width: "40px" }} /></div>
              <i>-</i>
            </div>
            <div><h4>300$</h4></div>
            <button style={{height:"30px",marginTop:"20px"}}>Remove</button>
          </div>
          <hr style={{ color: "black" }} />
    </>
  )
}

export default CartItem
