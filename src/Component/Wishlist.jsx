import React from 'react'
import { useWishlistData } from './context/WishlistContext'

const Whishlist = () => {
  const { wishlist, deleteToWishlist } = useWishlistData();
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          gap: "25px",
          paddingTop: "10px",
        }}>
        {wishlist.map((item, i) => <Item item={item} key={i}></Item>)}
      </div>
    </div>
  )

  function Item(props) {
    return (
      <div style={{ margin: "10px", border: "2px solid grey" }}>
        <h4>{props.item.title}</h4>
        <img src={props.item.images[0]} alt="" width="150px" height="180px"></img>
        <h5>Rs.{props.item.price}</h5>
        <h5>Items available in stock:{props.item.stock}</h5>
        <button onClick={() => deleteToWishlist(props.item.id)}>Remove</button>
      </div>
    )
  }
}

export default Whishlist;
