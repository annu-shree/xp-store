import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../API'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const ImageArray = [
  "./bannerimgs/banner6.jpg",
  "./bannerimgs/banner3.jpg",
  "./bannerimgs/banner4.jpg",
  "./bannerimgs/banner5.jpg",
]

const Intro = (props) => {
  const [data, setData] = useState(ImageArray)

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      className='Trending'
      swipeable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      autoPlay={true}>
        {
          data.map((item, i) => <img src={item} key={i} alt="" width="1505rem" height="390rem"style={{borderRadius:"20px"}} />)
        } 
    </Carousel>
  )
  function Item(props) {
    return (
      <div style={{ margin: "14px",borderRadius:"10px"}}>
        <img src={props.item} alt=""></img>
      </div>
    )
  }
}

//   const navigate= useNavigate();
//   const clickHandeler = () => navigate("/Product");
//   return (
//     <div className='intro'>
//     <div className='intro-info'>
//         <div className='welcome'>welcome to </div>
//         <div className='xpstore'>XpStore</div>
//         <div> 
//            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta asperiores a quisquam sed ratione similique aliquid illum consectetur, inventore velit quibusdam beatae ex quam consequuntur adipisci eaque maiores.Necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta asperiores a quisquam sed ratione similique aliquid illum consectetur, inventore velit quibusdam beatae ex quam consequuntur adipisci eaque maiores.Necessitatibus</p>
//         </div>
//          <div> 
//          <Button onClick={clickHandeler} variant="contained">ShopNow</Button>
//          </div>
//     </div>
//     <div className='intro-image'></div>
//       <img src=".\images\istockphoto-489803256-1024x1024 (1).jpg" width="2500px" height='350px' alt=''></img>
//     </div>
//   )
// }

export default Intro;
