import React from 'react'
import {Button} from "@mui/material"
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const navigate= useNavigate();
  const clickHandeler = () => navigate("/Product");
  return (
    <div className='intro'>
    <div className='intro-info'>
        <div className='welcome'>welcome to </div>
        <div className='xpstore'>XpStore</div>
        
        <div> 
           <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta asperiores a quisquam sed ratione similique aliquid illum consectetur, inventore velit quibusdam beatae ex quam consequuntur adipisci eaque maiores.Necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta asperiores a quisquam sed ratione similique aliquid illum consectetur, inventore velit quibusdam beatae ex quam consequuntur adipisci eaque maiores.Necessitatibus</p>
        </div>
        
         <div> 
         <Button onClick={clickHandeler} variant="contained">ShopNow</Button>
         </div>
    
    </div>
    <div className='intro-image'></div>
      <img src=".\images\istockphoto-489803256-1024x1024 (1).jpg" width="2500px" height='350px' alt=''></img>
    </div>
  )
}

export default Intro;
