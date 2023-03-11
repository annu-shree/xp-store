import React from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter'
import Display from './Display'

const Product = () => {
  return (
    <div>
      <Searchbar></Searchbar>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem"
      }}>
        <div><Filter /></div>
        <div><Display /></div>
      </div>
    </div>
  )
}

export default Product;

//no sugar
//no rice
//ghee only on chapati
//no nijju at any cost
//no youtube
//not attending calls of whoever
//neither call any one at any cost until unless i got the job