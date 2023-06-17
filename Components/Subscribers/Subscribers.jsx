import React from 'react'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Subscribers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div data-aos='fade-up' data-aos-duration='2500' className='subscribe section'>
      <div className="sectionContainer container">
        <h2>
          Subscribe to our NewsLetters & get the latest news!! 
        </h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='enter your email address' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>

    </div>
  )
}

export default Subscribers