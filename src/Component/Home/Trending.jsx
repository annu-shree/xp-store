
import React, { useEffect, useState } from 'react'
import { getProducts } from '../API'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

const Trending = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const data = getProducts().then((value) => {
      setData(value)
      console.log(data)
    })
  }, [])
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
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
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
      {
        data.map((item, i) => <Item Key={i} item={item} > </Item>)
      }
    </Carousel>
  )
  function Item(props) {
    const navigate = useNavigate()
    function handleSwitch(product) {
      console.log(product)
      navigate('/Product/' + product.id, {
        state: product
      })
    }

    return (
      <div
        onClick={() => handleSwitch(props.item)}
        style={{
          margin: "0.8rem",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          paddingTop: "1.3rem"
        }}>
        <img src={props.item.images[0]} alt="" width="200px" height="270px" ></img>
        <span>{props.item.title}</span>
        <span>Rs.{props.item.price}</span>
      </div>
    )
  }
}

export default Trending;
