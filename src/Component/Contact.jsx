import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547157187955!2d73.9145877147214!3d18.562551787384617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1677832293429!5m2!1sen!2sin"
        width="80%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    
      <div className='contact-Page' >
        <form action="https://formspree.io/f/xyyajnga" method='POST' 
         style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
          alignContent: "center",
          marginLeft:"650px",
          padding:"20px"
        }}>

          <input type="text"
            placeholder='userName'
            name='userName'
            required
            autoComplete='off'
          />
         
          <input type="email"
            placeholder='Email'
            name='Email'
            required
            autoComplete='off'
          />
         
          <textarea name="Message"
            cols="30"
            rows="10"
            placeholder='Enter your message'>
          </textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
