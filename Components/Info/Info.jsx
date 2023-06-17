import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkHeart} from 'react-icons/bs'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Info = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos='fade-right' data-aos-duration='2500'>ghumo, phiro aish karo mitron</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className='btn'>View All</button>
        </div>
        <div className="cardsDiv grid">

          <div data-aos='fade-right' data-aos-duration='2500' className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTitle">Book & Chill</span>
            <p>Internet nahi to kya hua, Call karke flight ticket book karo</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='3500' className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle">Smart Check-list</span>
            <p>Internet nahi to kya hua, Call karke flight ticket book karo</p>
          </div>
          <div data-aos='fade-left' data-aos-duration='4500' className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkHeart className='icon'/>
            </div>
            <span className="cardTitle">Save More</span>
            <p>Internet nahi to kya hua, Call karke flight ticket book karo</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Info