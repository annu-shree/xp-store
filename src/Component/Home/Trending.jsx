
import React, { useEffect, useState } from 'react'
import { getProducts } from '../API'
import {Paper} from "@mui/material"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";



const Trending = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const data = getProducts().then((value) => {
      setData(value)
      console.log(data)
    })
  },[])


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
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
      draggable={false}
      showDots={true}
     responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
       keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >      
        {
          data.map((item, i) => <Item Key={i} item={item}  ></Item>) 
        }
      </Carousel>

  )

  function Item(props) {
    return (
      <Paper style={{margin:"10px"}}>
        <h4>{props.item.title}</h4>
        <img src={props.item.images[0]} alt="" width="150px" height="180px" style={{}}></img>
        <h5>{props.item.price}</h5>
      </Paper>
    )
  }
}

export default Trending;
