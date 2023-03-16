import React from 'react'

const Trusted = () => {   
  return (
    <div className='trusted'>
      <h2> Trusted companies</h2>
      <div  className='trusted-img'>
        <div><img src=".\images\apple.png" alt="" /></div>
        <div><img src=".\images\nestle (1).png" alt="" /></div>
        <div><img src=".\images\flower.png" alt="" /></div>
        <div><img src=".\images\amazon.png" alt="" /></div>
        <div><img src=".\images\flipkart.png" alt="" height="120px" /></div>
        <div><img src=".\images\myntra.png" alt="" /></div>
      </div>

      <div className='trusttext' >
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Apple</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Nestle</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Decor</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Amazon</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Flipkart</div>
          <div style={{ fontSize: "20px", border: "2px solid grey", borderRadius: "20px", width: "120px" }}>Myntra</div>
        </div>
      </div>
      <span>And Many More.....</span>
    </div>
  )
}

export default Trusted;