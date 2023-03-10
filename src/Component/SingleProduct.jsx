  import React, { useState, useEffect } from 'react'
import { getspeceficCategory, getSingleProduct } from './API'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useWishlistData } from './context/WishlistContext';
import { useCartData } from './context/CartContext';

const SingleProduct = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const { addToCart } = useCartData()
  const { addToWishlist } = useWishlistData()
  const [productDetail, setProductDetail] = useState(state)
  const [imgsrc, setImgsrc] = useState(productDetail?.thumbnail)
  const [similarProducts, setSimilarProducts] = useState([])

  useEffect(() => {
    console.log("id changes============ ", state);
    if (!(state === null)) {
      setProductDetail(state)
    } else {
      getSingleProduct(id).then((res) => {
        setProductDetail(res)
        //console.log("SingleProductDetail----------------", productDetail, "kkkkkkkkk--------", res.id, res);
      })
    }
  }, [id,state])

  useEffect(() => {
    getspeceficCategory(productDetail.category).then((res) => {
      setSimilarProducts(res.products)
      setImgsrc(res.products.map((item,i)=>item.thumbnail))
      console.log('hello world----------------', similarProducts, "jjjjjjjj", res.products,);
    })
  }, [productDetail])
    
  // eslint-dsisable-next-line react-hooks/exhaustive-deps

  return (
    <div style={{ padding: "10px" }}>
      <div className='container' style={{
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
            maxHeight: "541px",
            overflowY: 'auto'
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
              alt="img" />
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
            }}>{productDetail?.brand}</div>

          <div className='title'
            style={{
              fontSize: "35px",
              marginLeft: "12px",
              paddingBottom: "20px",
              color: "grey"
            }}> {productDetail?.title}</div>

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
            </span></i>  {productDetail?.rating} Ratings</div>

          <div
            className='price'
            style={{
              paddingLeft: "10px",
              color: "orange",
              paddingBottom: "18px",
              fontSize: "30px",
              paddingTop: "10px"
            }}>Price Rs.{productDetail?.price}</div>

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
            }}>{productDetail?.description}</div>

          <div className='button'
            style={{
              paddingLeft: "10px",
              marginBottom: "19px",
              display: "flex",
            }}>
            <div>
              <button
                className='CartAddButton'
                onClick={() => { addToCart(productDetail) }}
              >Add To Cart</button></div>
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
          marginRight: "1210px",
          fontSize: "30px"
        }}>Similars Products ---</div>

        <div style={{
          border: "1px solid black",
          width: "1500px",
          marginBottom: "10px"
        }}></div>

        <div><div className='display' style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
          gap: "20px",
          paddingTop: "10px"
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
    <div onClick={() => handleSwitch(props.item)} style={{ margin: "10px", border: "2px solid grey" }}>
      <h4>{props.item.title}</h4>
      <img src={props.item.images[0]} alt="" width="150px" height="180px" ></img>
      <h5>{props.item.price}</h5>
    </div>
  )

}
export default SingleProduct;
