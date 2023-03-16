import React from 'react'

const Services = () => {
  return (
    <>
      <div>
        <div className='services'>
          <h4 className='serviceheading'> Our Featured services</h4>
          <div className='service-img' >
            <div><img className='serviceImgtag' src=".\service\securepayment.png" alt="" height="100px" /></div>
            <div><img className='serviceImgtag' src=".\service\fast-delivery.png" alt="" height="100px" /></div>
            <div><img className='serviceImgtag' src=".\service\cancel (3).png" alt="" height="100px" /></div>
            <div><img className='serviceImgtag' src=".\service\delivery-man.png" alt="" height="100px" /></div>
            <div><img className='serviceImgtag' src=".\service\free-delivery.png" alt="" height="100px" /></div>
            <div><img className='serviceImgtag' src=".\service\money-back.png" alt="" height="100px" /></div>
            <div><img className='serviceImgtag' src=".\service\return-box.png" alt="" height="100px" /></div>
          </div>
          <div className='service-description'>
            <div className='service'> Secure Payment System </div>
            <div className='service'> Fast and ontime delivery </div>
            <div className='service'> Order Cancelletion With Money Back </div>
            <div className='service'> Non-Contact shipping </div>
            <div className='service'> Free Delivery (no delivery charge)</div>
            <div className='service'> Guaranteed Money Back </div>
            <div className='service'> 15 Days Return policy </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Services;
