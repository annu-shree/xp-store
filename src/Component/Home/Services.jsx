import React from 'react'

const Services = () => {
  return (
    <>
      <div>

        <div className='services'
          style={{
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-around"
          }}>


          <h1 className='serviceheading'>Our Featured services</h1>
          <div style={{ display: "flex", gap: "100px" }}>
            <div><img src=".\service\securepayment.png" alt="" height="100px" /></div>
            <div><img src=".\service\fast-delivery.png" alt="" height="100px" /></div>
            <div><img src=".\service\cancel (3).png" alt="" height="100px" /></div>
            <div><img src=".\service\delivery-man.png" alt="" height="100px" /></div>
            <div><img src=".\service\free-delivery.png" alt="" height="100px" /></div>
            <div><img src=".\service\money-back.png" alt="" height="100px" /></div>
            <div><img src=".\service\return-box.png" alt="" height="100px" /></div>


          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <div className='service4'> Secure Payment System </div>
            <div className='service1'> Fast and ontime delivery </div>
            <div className='service5'> Order Cancelletion With Money Back </div>
            <div className='service2'> Non-Contact shipping </div>
            <div className='service1'> Free Delivery (no delivery charge)</div>
            <div className='service1'> Guaranteed Money Back </div>
            <div className='service3'> 15 Days Return policy </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services;
