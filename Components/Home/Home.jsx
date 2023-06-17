import React,{useEffect} from 'react'
import video from '../../Assets/video.mp4'
import aeroplane from '../../Assets/Airplane.png'
import {IoIosAirplane} from 'react-icons/io'
// import { useState } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Chalo Nikle Ek naye safar par <IoIosAirplane/></h1>
      </div>
      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={aeroplane} className='plane' alt="" />
      </div>
    </div>
  )
}

export default Home