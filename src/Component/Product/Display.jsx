
import { useData } from '../context/DataContext'
import { useNavigate } from "react-router-dom"

const Display = (props) => {
  const { products, filteredProduct, searchInput } = useData()

  return (
    <div style={{ paddingTop: "32px" }}>
      <div className='display' style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr ",
        gap: "25px",
        paddingTop: "10px"
      }}>
        {searchInput.length > 1
          ? (filteredProduct.map((item, i) => <Item key={i} item={item}></Item>))
          : (products.map((item, i) => <Item key={i} item={item}></Item>))}
      </div>
    </div>
  )
}

function Item(props) {
  const navigate = useNavigate()
  function handleSwitch(product) {
    console.log(product)
    navigate('/Product/' + product.id, {
      state: product
    })
  }
  return (
    <div onClick={() => handleSwitch(props.item)} style={{ width: "260px", height: "320px", boxShadow: "0px 0px 8px 3px rgba(0,0,0,0.61)" }}>
      <h3>{props.item.title}</h3>
      <img src={props.item.images[0]} alt="" width="170px" height="180px" style={{}} />
      <h5>Rs.{props.item.price}</h5>
    </div>
  )
}

export default Display;
