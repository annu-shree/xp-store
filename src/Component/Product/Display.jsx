import React, { useState, useEffect } from 'react'
import { useData } from '../DataContext'
import { Paper } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Display = (props) => {
  const { products, filteredProduct, searchInput } = useData()

  return (
    <>
      <div className='display' style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr ",
        gap: "1px",
        paddingTop: "10px"
      }}>{searchInput.length > 1 ? (filteredProduct.map((item, i) => <Item key={i} item={item}></Item>)) : (products.map((item, i) => <Item key={i} item={item}></Item>))}
      </div>
    </>
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
    <div className='display'>
      <div onClick={() => handleSwitch(props.item)} style={{ margin: "10px", width: "250px", height: "312px", border: "2px black solid" }}>
        <h3>{props.item.title}</h3>
        <img src={props.item.images[0]} alt="" width="150px" height="180px" style={{}} />
        <h5>{props.item.price}</h5>
      </div>
    </div>
  )
}
export default Display 
