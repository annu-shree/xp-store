import React from 'react'

const Trusted = () => {
  return (
    <div className='trusted' style={{
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-around"
    }}>
      <h1> Trusted companies</h1>
      <div style={{ display: "flex", gap: "70px" }}>
        <div><img src=".\images\apple.png" alt="" /></div>
        <div><img src=".\images\nestle (1).png" alt="" /></div>
        <div><img src=".\images\flower.png" alt="" /></div>
        <div><img src=".\images\amazon.png" alt="" /></div>
        <div><img src=".\images\flipkart.png" alt="" height="100px" /></div>
        <div><img src=".\images\myntra.png" alt="" /></div>
      </div>


      <div className='trusttext' style={{ display: "flex", gap: "40px" }} >
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Apple</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Nestle</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Decor</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Amazon</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Flipkart</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Myntra</div>
        </div>
      </div>
      <h3>And Many More.....</h3>
    </div>
  )
}

export default Trusted
