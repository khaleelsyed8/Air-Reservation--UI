import React from 'react'
import {ImSearch} from 'react-icons/im'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {IoCalendarSharp} from 'react-icons/io5'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Search = () => {
  
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <div className="search container">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business</span>
          </div>
          <div className="singleBtn">
            <span>First</span>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="searchInputs flex">
          {/* {single input ayega yaha pe} */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <ImSearch className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" name="" id="" placeholder='kaha jana hai?' />
            </div>
          </div>

          {/* {single input ayega yaha pe} */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" name="" id="" placeholder='Aur Kaun aa raha hai?' />
            </div>
          </div>
          
          {/* {single input ayega yaha pe} */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <IoCalendarSharp className='icon'/>
            </div>
            <div className="texts">
              <h4>Departure</h4>
              <input type="text" name="" id="" placeholder='kab nikalna hai?' />
            </div>
          </div>
          {/* {single input ayega yaha pe} */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <IoCalendarSharp className='icon'/>
            </div>
            <div className="texts">
              <h4>Arrival</h4>
              <input type="text" name="" id="" placeholder='aur wapas?' />
            </div>
          </div>
          <button className='btn btnBlock flex'>Search Flights</button>
        </div>
      </div>
    </div>
  )
}

export default Search