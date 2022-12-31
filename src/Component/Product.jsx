import React from 'react';


const Product = () => {
  return (
    <div className='Product'>
       
     <div className='search-bar'>
      <input type="search"></input>
     </div>
     
     <div className='filter'>
     <div><h1>Filters</h1></div>
     <button>clear</button>
     <div className='category'>
     <h2>Category</h2> 
              <input type="radio" />
     </div>
     </div>
    
    
     </div>



    
  )
}

export default Product;
