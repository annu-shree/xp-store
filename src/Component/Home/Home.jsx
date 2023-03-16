import React from 'react'
import Intro from './Intro';
import Trending from './Trending';
import Services from './Services';
import Trusted from './Trusted';
import Popular from './popular';
import "./Home.css";
import "react-multi-carousel/lib/styles.css";

const Home = () => { 
  return (<div className='Home'>
   <Intro/>
   <Trending/>
   <Popular/>
   <Services/>
   <Trusted/>
   </div>
  )
}  
export default Home;
