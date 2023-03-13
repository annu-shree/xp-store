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
            border: "2px solid black",
            width: "800px",
            height: "70px",
            alignContent: "center",
            alignItems: "center"
          }}>
          <div>
            <img onClick={()=>handelClick(item)} src={item.thumbnail} alt="" width="100px" height="60px" />
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
              <button>{item.quantity}</button>
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

          <button
            onClick={() => { deleteToCart(item.id) }}
            style={{ height: "30px", marginTop: "20px" }}>
            Remove
          </button>
        </div>
        
      </div>
    )
  }

  export default CartItem
