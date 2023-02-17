import React from 'react'
import { cart } from './CartClass'

const CartItem = ({ item, deleteToCart }) => {

  return (
    <>
      <hr />
      <div className='cart-item' style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border:"2px solid black",
        width:"600px",
        height:"100px",
        alignContent:"center",
        alignItems:"center"

      }}>
        <div><img src={item.thumbnail} alt="" width="100px" /></div>
        <div><h4>{item.title} </h4></div>

        <div style={{
          display: "flex",
          marginTop: "20px",
          cursor:"pointer",
        }}>
          <i onclick={()=>{cart.updateQuantity(item.id)}}><span class="material-symbols-outlined">
            add
          </span></i>
          <div><input type="text" style={{ width: "40px" }} />{item.quantity} </div>
          <i>
            <span class="material-symbols-outlined">
              remove
            </span>
          </i>
        </div>
        <div><h4>{item.price}</h4></div>
       <button onClick={() => { deleteToCart(item.id) }} style={{ height: "30px", marginTop: "20px" }}>Remove</button>
      </div>

      <hr style={{ color: "black" }} />
    </>
  )
}

export default CartItem
