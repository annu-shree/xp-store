import { Directions } from '@mui/icons-material';
import React from 'react'


const About = () => {

  return (
    <div className='About'>
      <div className='Aboutdashboard'
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingTop: "0.2rem",
        }}>

        <div className='Mark'
          style={{
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            margin: "2rem"
          }}>
          <div>
            <img src=".\AboutImages\Mark.jpg" alt="" width="800px" height="380px" style={{ borderRadius: "40px" }} />
          </div>
          <div className='textbox'>
            <h1>Leave Mark</h1>
            <h4 style={{ textAlign: "center" }}>
              We're known more by the impact we create
              than the titles we hold. Impact that is brought by
              working together on audacious challenges at scale
              with an aim to revolutionize for the Indian customer.
              We believe great ideas can emerge from anywhere
              and must be backed. Our people - backed by our
              culture of end-to-end ownership - have revolutionised
              India's e-commerce sector - several times over!
            </h4>
          </div>
        </div>

        <div className='Teamwork'
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            margin: "2rem"
          }}>
          <div className='textbox'>
            <h1>TeamWork</h1>
            <h4>The best people make the best teams. And we put all
              our efforts into finding the right people that fit into
              our high-performing inclusive teams. Everyone has a
              voice on the table and diversity of thoughts, styles
              and actions is celebrated. From a category leader to a
              wishmaster, we are all bound together and guided by
              our values of audacity, bias for action, customer-first,
              integrity and inclusion.
            </h4>
            <h4>
              We have a dedicated Workplace
              Equality charter that focuses on
              inclusive talent attraction, talent
              development & retention, and culture &
              policies, supported by strong
              leadership commitment
            </h4>
          </div>
          <div>
            <img src=".\AboutImages\TeamWork (2).jpg" alt="" width="800px" height="380px" style={{ borderRadius: "40px" }} />
          </div>
        </div>

        <div className='wecare'
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            margin: "2rem"
          }}>
          <div> <img src=".\AboutImages\wecare (2).jpg" alt="" width="800px" height="380px" style={{ borderRadius: "40px" }} /></div>
          <div className='textbox'>
            <h1>WeCare</h1>
            <h4>The best people make the best teams. And we put all
              our efforts into finding the right people that fit into
              our high-performing inclusive teams. Everyone has a
              voice on the table and diversity of thoughts, styles
              and actions is celebrated. From a category leader to a
              wishmaster, we are all bound together and guided by
              our values of audacity, bias for action, customer-first,
              integrity and inclusion.
            </h4>
            <h4>
              We have a dedicated Workplace
              Equality charter that focuses on
              inclusive talent attraction, talent
              development & retention, and culture &
              policies, supported by strong
              leadership commitment
            </h4>
          </div>

        </div>

        <div className='Success'
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            margin: "2rem"
          }}>
          <div className='textbox'>
            <h1>Success All</h1>
            <h4>Our journey of building India's biggest unicorn
              start-up has been full of successes, but also failures
              and learning from them. That's why there's calculated
              risk-taking, a high willingness to learn and improvise,
              and a growth orientation built into everything we do.
              Whether it be opening a new warehouse, or making
              our mobile app a bit more consumer friendly, we're
              always experimenting, learning and growing
            </h4>
          </div>
          <div> <img src=".\AboutImages\Success.jpg" alt="" width="800px" height="380px" style={{ borderRadius: "40px" }} /></div>
        </div>
      </div>
    </div>
  )
}

export default About;
