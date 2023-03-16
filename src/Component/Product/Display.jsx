import { useData } from '../context/DataContext'
import { useNavigate } from "react-router-dom"
import { useWishlistData } from '../context/WishlistContext';
import { useCartData } from '../context/CartContext';

const Display = (props) => {
  const { products, filteredProduct, searchInput } = useData()
 
  return (
    <div style={{ paddingTop: "32px" }}>
      <div className='display' style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem",
        paddingTop: "0.6rem",
      }}>
        {searchInput.length > 1
          ? (filteredProduct.map((item, i) => <Item key={i} item={item}></Item>))
          : (products.map((item, i) => <Item key={i} item={item}></Item>))}
      </div>
    </div>
  )
}

function Item(props) {
  const { addToCart } = useCartData()
  const { addToWishlist } = useWishlistData()
  const navigate = useNavigate()
  function handleSwitch(product) {
    console.log(product)
    navigate('/Product/' + product.id, {
      state: product
    })
  }
  return (
    <div
      className='singleItem'
    >
      <img src={props.item.images[0]}
        alt=""
        width="282x"
        height="250px"
        onClick={() => handleSwitch(props.item)}  />
      <span>{props.item.title}</span>
      <h5>Rs.{props.item.price}</h5>

      <div style={{
        display: "flex",
        gap: "1rem",
        margin: "1rem"
        // justifyContent:"space-evenly"
      }}>
        <i
          onClick={() => addToWishlist(props.item)}
          className="whishlisticon">
          <span className="material-symbols-outlined display">
            favorite
          </span>
        </i>

        <button
          style={{ marginLeft: "2rem" }}
          className='CartAddButton'
          onClick={() => { addToCart(props.item) }}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Display;
