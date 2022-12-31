import React from 'react'
import Intro from './Intro';
import Trending from './Trending';
import Services from './Services';
import Trusted from './Trusted';
import "./Home.css";
const Home = () => { 
  return (<div className='Home'>
   <Intro></Intro>
   <Trending ></Trending>
   <Services></Services>
   <Trusted></Trusted>
   </div>
  )
}  
export default Home;
