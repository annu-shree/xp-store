import React from 'react'

const Trusted = () => {
  return (
    <div className='trusted' style={{
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-around"
    }}>
      <div className='trusttext' >
        <h1> Trusted companies</h1>
        <div style={{ fontSize: "20px" }}>Nykaa</div>
        <div style={{ fontSize: "20px" }}>Nestle</div>
        <div style={{ fontSize: "20px" }}>Decor</div>
        <div style={{ fontSize: "20px" }}>Amazon</div>
        <div style={{ fontSize: "20px" }}>Flipkart</div>
        <div style={{ fontSize: "20px" }}>Meesho</div>
      </div>
    </div>
  )
}

export default Trusted
