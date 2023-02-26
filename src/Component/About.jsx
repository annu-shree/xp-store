import React from 'react'
import Intro from './Home/Intro'
import {Button} from "@mui/material"
const About = () => {
    return(
    <div className='intro' style={{height:"630px"}}>
    <div className='intro-info' style={{height:"600px"}}>
        <div className='welcome'>welcome to </div>
        <div className='xpstore'>Xp store</div>
        
        <div> 
           <p className='para' style={{fontSize:"25px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta asperiores a quisquam sed ratione similique aliquid illum consectetur, inventore velit quibusdam beatae ex quam consequuntur adipisci eaque maiores.Necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta asperiores a quisquam sed ratione similique aliquid illum consectetur, inventore velit quibusdam beatae ex quam consequuntur adipisci eaque maiores.Necessitatibus</p>
        </div>
        
         <div> 
        
         <Button variant="contained">ShopNow</Button>
         </div>
    
    </div>
    <div className='intro-image'></div>
      <img src=".\images\istockphoto-489803256-1024x1024 (1).jpg" alt="" width="2500px" height='600px'></img>
    </div>
    )
}

export default About;
