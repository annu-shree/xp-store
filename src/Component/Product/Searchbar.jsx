import React,{useEffect,useState} from 'react'
import { SearchProducts } from '../API';
import { useData } from '../DataContext'
const Searchbar = (props) => {
const {searchHandle} = useData()

  return (
    <div className="searchbar" style={{ paddingBottom: "20px", paddingTop: "20px" }} >

      <input type="search" className="searchbar" onChange={(e)=>{searchHandle(e.target.value)}}
        style={{
          width: "450px",
          height: "35px",
          paddingTop: "9px",
          paddingBottom: "9px"
        }} placeholder="SEARCH" />
    </div>
  )
}

export default Searchbar;
