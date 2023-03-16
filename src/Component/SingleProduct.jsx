import React, { useState, useEffect } from 'react'
import { getspeceficCategory, getSingleProduct } from './API'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useWishlistData } from './context/WishlistContext';
import { useCartData } from './context/CartContext';
import { display } from '@mui/system';

const SingleProduct = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const { addToCart } = useCartData()
  const { addToWishlist } = useWishlistData()
  const [productDetail, setProductDetail] = useState(state)
  const [imgsrc, setImgsrc] = useState(productDetail?.thumbnail)
  const [similarProducts, setSimilarProducts] = useState([])

  useEffect(() => {
    console.log("id changes--", state);
    if (!(state === null)) {
      setProductDetail(state)
    } else {
      getSingleProduct(id).then((res) => {
        setProductDetail(res)
      })
    }
  }, [id, state])

  useEffect(() => {
    getspeceficCategory(productDetail.category).then((res) => {
      setSimilarProducts(res.products)
      console.log("imgarr----------", productDetail);
      setImgsrc(productDetail.thumbnail)
      console.log('hello world----------------', similarProducts, "jjjjjjjj", res.products,);
    })
  }, [productDetail])


  return (
    <div
      className='singleproductpage'
    >
      <div className='container'
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1px"
        }}>
        <div
          className='images'
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingRight: "10px"
          }}>


          <div className='similarProducts-image' style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "20px",
            maxHeight: "28rem",
            overflowY: 'auto',
            marginLeft:"1rem"
          }}>
            {
              productDetail?.images.map((img, i) => <div >
                <img
                  key={i}
                  src={img}
                  onMouseOver={() => { setImgsrc(img) }}
                  width={100}
                  height={100}
                  alt='img'
                  style={{
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
              alt="img" />
          </div>

        </div>
        <div className='details'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap:'2rem'
          }}>

          <div className='brand'
            style={{
              paddingLeft: "10px",
              fontSize: "55px",
              color: "white"
            }}>{productDetail?.brand}</div>

          <div className='title'
            style={{
              fontSize: "35px",
              marginLeft: "12px",
              // paddingBottom: "20px",
              color: "white"
            }}> {productDetail?.title}</div>

          <div className='rating'
            style={{
              marginLeft: "9px",
              border: "2px solid black",
              width: "180px",
              fontSize: "20px",
              // paddingTop: "3px"
            }}><i><span className="material-symbols-outlined">
              star
            </span></i>  {productDetail?.rating} Ratings</div>

          <div
            className='price'
            style={{
              paddingLeft: "10px",
              color: "redorange",
              fontSize: "30px",
            }}>Price Rs.{productDetail?.price}</div>

          <div style={{
            border: "1px solid grey",
            width: "45.9rem",
            marginLeft: "10px",
          }}>
          </div>

          <div
            className='description'
            style={{
              color: "black",
              fontSize: "1.1rem",
              marginLeft: "0.8rem",
            }}>{productDetail?.description}</div>

          <div className='button'
            style={{
              paddingLeft: "10px",
              marginTop: "2rem",
              display: "flex",
            }}>
            <div>
              <button
                className='CartAddButton'
                onClick={() => { addToCart(productDetail) }}
              >Add To Cart</button>
            </div>
            <div
              style={{ marginLeft: "20px" }}>
              <button
                className='wishlistAddButton'
                onClick={() => addToWishlist(productDetail)}>
                <i className="whishlisticon"><span className="material-symbols-outlined">
                  favorite
                </span></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='similarProducts' style={{ display: "flex", flexDirection: "column", paddingTop: "25px" }}>
        <div style={{
          paddingTop: "1.5rem",
          fontFamily: "sans-serif",
          color: "white",
          fontSize: "2rem",
          marginRight: "80rem",
          paddingBottom:"0.8rem"
        }}>Similar Products</div>

        <div style={{
          border: "1px solid grey",
          width: "1500px",
          marginBottom: "10px",
          marginLeft: "1rem",
        }}>
        </div>

        <div><div className='display' style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
          gap: "20px",
          paddingTop: "0.7rem",
          height: "27rem"
        }}>{similarProducts.map((item, i) => <Item key={item.id} item={item}></Item>)}</div>
        </div>
      </div>
    </div>
  )
}

function Item(props) {
  const navigate = useNavigate();
  const handleSwitch = (product) => {
    console.log("similARproduct-----", product)
    navigate(`/product/` + product.id, {
      state: product
    })
  }

  return (
    <div
      onClick={() => handleSwitch(props.item)}
      style={{
        margin: "10px",
        backgroundColor: "white",
        height: "23.3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.2rem",
      
      }}>
      <img src={props.item.images[0]} alt="" width="270px" height="290px" ></img>
      <span>{props.item.title}</span>
      <span>Rs.{props.item.price}</span>
    </div>
  )
}
export default SingleProduct;
