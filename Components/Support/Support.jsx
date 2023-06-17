import React from 'react'
import {BsEmojiWink} from 'react-icons/bs'
import grid from '../../Assets/grid.jpg'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Support = () => {

    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <div className='support container section'>
      <div data-aos='fade-down' data-aos-duration='2500' className="sectionContainer">

        <div className="titlesDiv">
          <small>travel Support</small>
          <h2>We've got you <BsEmojiWink/></h2>
          <p><b>Ek baar jo hamne commitment kardi apko best service dene ki, phir toh hum provide karke rahenge</b></p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel Requirements for Makkah, Madina, Baitul Muqqadas</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Multi-Risk Travel Insurance</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Chauffer Services</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

          </div>
          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
            <img src={grid} className='grids'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Support