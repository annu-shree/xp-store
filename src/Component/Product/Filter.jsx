
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useData } from "../DataContext"

const Filter = (props) => {
  const { filterByCategory, categories, clearHandle } = useData()      
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="Filter" style={{
        border: "2px solid black",
        width: "300px",
        height: "750px",
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <div><h1 style={{
            color: "black",
          }}>Filters</h1></div>
          <button style={{ backgroundColor: "white", width: "60px", height: "50px", marginTop: "18px", fontSize: "17px", marginLeft: "130px" }} onClick={()=>{clearHandle()}}>Clear</button>
        </div>
      
          <h2 style={{
            color: "black",
           }}>Categories</h2>
            <form>
          {
            categories.map((itm) => {
              return (
                <div style={{ color: "black", marginBottom: "6px" }}>
                  <input type="radio" id={itm} name='category' value={itm} onClick={() => { filterByCategory(itm) }} style={{ float: "left" }}
                  />
                  <label style={{ color: "black", marginBottom: "2px" }}>
                    {itm}</label>
                  <br />
                </div>
              )
            })
          }
        </form>
       {/*       
        <div className="categories">
          <h2 style={{ color: "black" }}> Categories</h2>
        </div>
         <div>
          <h1>womens</h1>
          <div><label >women's Dresses</label><input type="radio" onChange={() => { filterByCategory("womens-dresses") }} /></div>
          <div><label >women's watches</label><input type="radio" onChange={() => { filterByCategory("womens-watches") }} /></div>
          <div><label >women's shoes</label><input type="radio" onChange={() => { filterByCategory("womens-shoes") }} /></div>
          <div><label >women's Bags</label><input type="radio" onChange={() => { filterByCategory("womens-bags") }} /></div>
          <div><label >women's Jwellery</label><input type="radio" onChange={() => { filterByCategory("womens-jewellery") }} /></div>
        </div>
        <div>
          <h1>Mens</h1>
          <div><label  for="mens shirt">Men's shirts </label><input type="radio" onChange={() => { filterByCategory("mens-shirts") }} /></div>
          <div><label >Men's watches</label><input type="radio" onChange={() => { filterByCategory("mens-watches") }} /></div>
          <div><label >Men's shoes</label><input type="radio" onChange={() => { filterByCategory("mens-watches") }} /></div>
        </div>
        <div>
          <h1>Accesories</h1>
          <div><label >tops</label><input type="radio" onChange={() => { filterByCategory("tops") }} /></div>
          <div><label>fragrances</label><input type="radio" onChange={() => { filterByCategory("fragrances") }} /></div>
          <div><label >sunglasses</label><input type="radio" onChange={() => { filterByCategory("sunglasses") }} /></div>
          <div><label>SkinCare</label><input type="radio" onChange={() => { filterByCategory("skincare") }} /></div>
        </div>
        <div>
          <h1>Electronics</h1>
          <div><label >Smartphone</label><input type="radio" onChange={() => { filterByCategory("smartphones") }} /></div>
          <div><label >Laptop</label><input type="radio" onChange={() => { filterByCategory("laptops") }} /></div>
          <div><label >Lightings</label><input type="radio" onChange={() => { filterByCategory("lighting") }} /></div>
        </div>
        <div>
          <h1>other's</h1>
          <div><label >Groceries</label><input type="radio" onChange={() => { filterByCategory("groceries") }} /></div>
          <div><label >Home-Decor</label><input type="radio" onChange={() => { filterByCategory("home-decoration") }} /></div>
          <div><label>Furniture</label><input type="radio" onChange={() => { filterByCategory("furniture") }} /></div>
          <div><label >AutoMotive</label><input type="radio" onChange={() => { filterByCategory("automotive") }} /></div>
          <div><label>MotorCycle</label><input type="radio" onChange={() => { filterByCategory("motorcycle") }} /></div>
        </div>
        
        {/* <div className="apply-button" style={{ paddingTop: "100px", paddingLeft: "95px" }}>
          <button style={{ backgroundColor: "", width: "110px", height: "50px", marginTop: "18px", marginRight: "78px", fontSize: "25px", fontWeight: "bold" }}>Apply</button>
        </div> */}

      </div>
    </div>
  )
  // function Item(props) {
  //   return (
  //     <Paper style={{ margin: "10px" }}>
  //       <h4>{props.item.title}</h4>
  //       <img src={props.item.images[0]} alt="" width="150px" height="180px" style={{}}></img>
  //       <h5>{props.item.price}</h5>
  //     </Paper>
  //   )
  // }
}

export default Filter