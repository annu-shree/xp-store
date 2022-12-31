
import React, { useEffect, useState } from 'react'
import { getProducts } from '../API'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Paper, Slide } from "@mui/material"


const Trending = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const data = getProducts().then((value) => {
      setData(value)
      console.log(data)
    })
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // function chunk(array, pagesize = 5) {
  //     let page = [];
  //     for ( let i= 0;  i < array.length; i += pagesize) {
  //         page.push(array.slice(i,pagesize +  1))
  //     }
  //        return page;
  // }

  //  chunk()
  //  const sData = chunk(data, 5)
  console.log(data, "jdnfvjfdb")
  return (
    <div className='Trending'>
      <Carousel responsive={responsive} ssr >
        {/* {
            sData.map((slider,i)=>{
             <div style={{ display:"flex",overflow:"none"}}> 
             {
              slider.map((item,i)=>{
             <Grid><Item key={i} item={item}></Item></Grid>
             }
              )}
             </div>
             })
           } */}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>

        {/* {
          data.map((item, i) => <Item Key={i} item={item}></Item>) */}
{/* 
        } */}
      </Carousel>
    </div>
  )

  function Item(props) {
    return (
      <Paper>
        <h4>{props.item.title}</h4>
        <img src={props.item.image} alt="" width="250px" height="300px"></img>
        <h5>{props.item.price}</h5>
      </Paper>
    )
  }
}

export default Trending;
