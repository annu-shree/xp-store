import React from 'react'
//import { getSingleProduct } from './API'
import { useParams, useLocation } from 'react-router-dom' 
import { useData } from './DataContext'

const SingleProduct = (props) => {

  const { state } = useLocation()
  const CurrentProduct = state;

return (
    <div>
        <div className='container'>
        <div className='images'>
        <div className='singleimage'>{CurrentProduct.images[0]}</div>
        <div className='similar-image'>
          <div>{CurrentProduct.images[1]}</div>
          <div>{CurrentProduct.images[2]}</div>
          <div>{CurrentProduct.images[3]}</div>
          <div>{CurrentProduct.images[4]}</div>
        </div>
      </div>

      <div className='details'>
        <div className='title'>{CurrentProduct.title}</div>
        <div className='description'>{CurrentProduct.description}</div>
        <div className='brand'>{CurrentProduct.brand}</div>
        <div className='price'>{CurrentProduct.price}</div>
        <div className='button'>
          <button>Add to cart</button>
          <button>whishlist</button>
        </div>
      </div>
    </div>
    </div>
  )
// function item(props) {
//   return (
//     <div className='container'>
//       <div className='images'>
//         <div className='singleimage'>{thisproduct.images[0]}</div>
//         <div className='similar-image'>
//           <div>{thisproduct.images[1]}</div>
//           <div>{thisproduct.images[2]}</div>
//           <div>{thisproduct.images[3]}</div>
//           <div>{thisproduct.images[4]}</div>
//         </div>
//       </div>
//       <div className='details'>
//         <div className='title'>{thisproduct.title}</div>
//         <div className='description'>{thisproduct.desciption}</div>
//         <div className='brand'>{thisproduct.brand}</div>
//         <div className='price'>{thisproduct.price}</div>
//         <div className='button'>
//           <button>Add to cart</button>
//           <button>whishlist</button>
//         </div>
//       </div>
//     </div>
// )
}

export default SingleProduct;
