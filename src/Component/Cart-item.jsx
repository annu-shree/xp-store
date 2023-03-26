import React from 'react'
import { useCartData } from './context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartItem = ({ item }) => {
  const { updateToQuantity, deleteToCart } = useCartData()
  const navigate = useNavigate();
  function handelClick(product) {
    navigate(`/product/` + product.id, {
      state: product
    })
  }

  return (
    <div>
      <div
        className='cart-item'
         style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "50rem",
          height: "6rem",
          alignContent: "center",
          alignItems: "center",
          backgroundColor:"rgba(0,0,0,0.1)"
        }}>
        <div>
          <img onClick={() => handelClick(item)} src={item.thumbnail} alt="" width="100px" height="60px" />
        </div>

        <div><h4>{item.title} </h4></div>

        <div style={{
          display: "flex",
          marginTop: "20px",
          cursor: "pointer",
        }}>

          <i onClick={() => updateToQuantity(item.id, 1)}>
            <span className="material-symbols-outlined">
              add
            </span>
          </i>

          <div>
            <span style={{border:"0.1rem solid black",width:"1rem"}}>{item.quantity}</span>
          </div>

          <i onClick={() => updateToQuantity(item.id, -1)}>
            <span className="material-symbols-outlined">
              remove
            </span>
          </i>
        </div>

        <div>
          <h4>Rs.{item.price}</h4>
        </div>
        <i
        onClick={() => { deleteToCart(item.id) }}
        style={{ height: "30px", marginTop: "20px" }}
        >
          <span class="material-symbols-outlined">
            close
          </span>
        </i>
      </div>
    </div>
  )
}
export default CartItem
