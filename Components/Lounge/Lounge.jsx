import React from 'react'
import grid2 from '../../Assets/grid2.jpg'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Lounge = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={grid2}  />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-right' data-aos-duration='2500'>Unoccupanied Minor Lounge</h2>
          <div className="grids grid">

          <div data-aos='fade-right' data-aos-duration='3500' className="singleGrid">
            <span className='gridTitle'>
              Help through out the check-in and check-out process.
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div data-aos='fade-right' data-aos-duration='4500' className="singleGrid">
            <span className='gridTitle'>
              chauffer services Available 24/7.
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div data-aos='fade-right' data-aos-duration='5500' className="singleGrid">
            <span className='gridTitle'>
              Always ready to help Stewardess 24/7.
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div data-aos='fade-right' data-aos-duration='6500' className="singleGrid">
            <span className='gridTitle'>
              Priority Boarding
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge