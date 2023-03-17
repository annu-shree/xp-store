import React from 'react'
import { useWishlistData } from './context/WishlistContext'
import { useNavigate } from 'react-router-dom'

const Whishlist = () => {
  const { wishlist, deleteToWishlist } = useWishlistData();

  return (
    <div className='wishlist'>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "25px",
          paddingTop: "10px",
        }}>
        {wishlist.map((item, i) => <Item item={item} key={i}></Item>)}
      </div>
    </div>
  )

  function Item(props) {
    const navigate = useNavigate();
    function handelClick(product) {
      navigate(`/product/` + product.id, {
        state: product
      });
    }
    return (
      <div style={{
        margin: "10px",
        backgroundColor: "white",
        height: "27rem",
        width:"18rem"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}>

          <div>
            <i onClick={() => deleteToWishlist(props.item.id)}
              style={{ marginLeft: "16.3rem", }}>
              <span class="material-symbols-outlined">
                close
              </span>
            </i>
          </div>

          <div>
            <img
              onClick={() => handelClick(props.item)}
              src={props.item.thumbnail}
              alt=""
               width="190px"
              height="260px">
            </img>
          </div>
          <span>
            {props.item.title}
          </span>
          <div>
            <span>Rs.{props.item.price}</span>
          </div>
          <div>
            <span>Items available in stock:{props.item.stock}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Whishlist;
