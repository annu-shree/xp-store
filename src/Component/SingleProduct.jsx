import React, { useState } from 'react'
import { useEffect } from 'react';
import { getspeceficCategory } from './API'
import { useLocation } from 'react-router-dom'
import { useWishlistData } from './context/WishlistContext';
import { useCartData } from './context/CartContext';

const SingleProduct = (props) => {
  const { state } = useLocation();
  const CurrentProduct = state;
  const { addToCart } = useCartData()
  const { addToWishlist } = useWishlistData()
  const [imgsrc, setImgsrc] = useState(CurrentProduct.thumbnail)
  const [similar, setSimilar] = useState([])
  useEffect(() => {
    getspeceficCategory(state.category).then((value) => {
      setSimilar(value.products)
    })
  }, [])
  return (
    <div style={{ padding: "10px" }}>
      <div className='container' style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "1px"
      }}>
        <div className='images'
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingRight: "10px"
          }}>


          <div className='similar-image' style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "20px",
            maxHeight: "541px",
            overflowY: 'auto'
          }}>
            {
              CurrentProduct.images.map((img,i) => <div >
                <img
                  key={i}
                  src={img}
                  onMouseOver={() => { setImgsrc(img) }}
                  width={100}
                  height={100}
                  alt='img'
                  style={{
                    border: "1px solid GREY",
                    boxshadow: " 0px 0px 8px 8px rgba(0,0,0,0.31)",
                    marginBottom: "8px"
                  }} />
              </div>)
            }
          </div>

          <div className='singleimage'>
            <img
              src={imgsrc}
              width="650px"
              height="541px"
              alt="" />
          </div>

        </div>
        <div className='details'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}>

          <div className='brand'
            style={{
              paddingLeft: "10px",
              fontSize: "55px",
              paddingBottom: "10px"
            }}>{CurrentProduct.brand}</div>

          <div className='title'
            style={{
              fontSize: "35px",
              marginLeft: "12px",
              paddingBottom: "20px",
              color: "grey"
            }}> {CurrentProduct.title}</div>

          <div className='rating'
            style={{
              marginLeft: "9px",
              border: "2px solid black",
              width: "180px",
              fontSize: "20px",
              paddingBottom: "8px",
              marginBottom: "10px",
              paddingTop: "3px"
            }}><i><span className="material-symbols-outlined">
              star
            </span></i>  {CurrentProduct.rating} Ratings</div>

          <div
            className='price'
            style={{
              paddingLeft: "10px",
              color: "orange",
              paddingBottom: "18px",
              fontSize: "30px",
              paddingTop: "10px"
            }}>Price ${CurrentProduct.price}</div>

          <div style={{
            border: "1px solid grey",
            width: "700px",
            marginLeft: "10px",
            marginBottom: "10px"
          }}></div>

          <div
            className='description'
            style={{
              fontSize: "15px",
              marginBottom: "40px",
            }}>{CurrentProduct.description}</div>

          <div className='button'
            style={{
              paddingLeft: "10px",
              marginBottom: "19px",
              display: "flex"
            }}>
            <div>
              <button onClick={() => {
                addToCart(CurrentProduct)
              }}
                style={{
                  marginRight: "10px",
                  width: "150px",
                  height: "40px",
                  backgroundColor: "white",
                  fontSize: "15px"
                }}>Add To Cart</button></div>


            <div
              style={{ marginLeft: "20px" }}>
              <button
                onClick={addToWishlist(CurrentProduct)}
                style={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "white",
                  fontSize: "15px",
                  paddingLeft: "10px",
                  marginTop: "0px"
                }}>
                <i ><span style={{ paddingTop: "" }} class="material-symbols-outlined">
                  favorite
                </span></i></button></div>
          </div>
        </div>
      </div>

      <div className='similar' style={{ display: "flex", flexDirection: "column", paddingTop: "25px" }}>
        <div style={{
          marginRight: "1500px",
          fontSize: "30px"
        }}>Similar</div>

        <div style={{
          border: "1px solid black",
          width: "1670px",
          marginBottom: "10px"
        }}></div>

        <div><div className='display' style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
          gap: "20px",
          paddingTop: "10px"
        }}>{similar.map((item, i) => <Item key={i} item={item}></Item>)}</div></div>
      </div>
    </div>
  )
}

function Item(props) {
  return (
    <div style={{ margin: "10px", border: "2px solid grey" }}>
      <h4>{props.item.title}</h4>
      <img src={props.item.images[0]} alt="" width="150px" height="180px" style={{}}></img>
      <h5>{props.item.price}</h5>
    </div>
  )
}

export default SingleProduct;
