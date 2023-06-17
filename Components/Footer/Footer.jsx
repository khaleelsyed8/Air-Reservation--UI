import React from 'react'
import Logo from '../../Assets/logo.png'
import{RiFacebookBoxFill} from 'react-icons/ri'
import{RiInstagramFill} from 'react-icons/ri'
import{SiTwitter} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img className='Logo' src={Logo} alt="" />
          </div>
          <p>In the Era of Rat-race We are here to make you FLY!!!</p>
          <div data-aos='fade-left' data-aos-duration='2500' className="social flex">
          <RiFacebookBoxFill className='icon'/>
          <RiInstagramFill className='icon'/>
          <SiTwitter className='icon'/>
          <BsGithub className='icon'/>
          </div>
        </div>
        <div data-aos='fade-right' data-aos-duration='2500' className="footerlinks">
          <span className="linktitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Flight Status</a>
          </li>
          <li>
            <a href="#">Check-in</a>
          </li>
          <li>
            <a href="#">Manage your bookings</a>
          </li>
        </div>
        
        <div data-aos='fade-right' data-aos-duration='3500' className="footerlinks">
          <span className="linktitle">Quick Guide</span>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How to?</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">baggage</a>
          </li>
          <li>
            <a href="#">Route Map</a>
          </li>
          <li>
            <a href="#">Our communities</a>
          </li>
        </div>
        <div data-aos='fade-right' data-aos-duration='4500' className="footerlinks">
          <span className="linktitle">About</span>
          <li>
            <a href="#">Chauffer</a>
          </li>
          <li>
            <a href="#">Our Partners</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Transportation</a>
          </li>
          <li>
            <a href="#">Programmer Rules</a>
          </li>
        </div>
      </div>
      <div data-aos='fade-down' data-aos-duration='2500' className="copyright flex">
        <p>Flight UI | Developed by the developer</p>
      </div>
    </div>
  )
}

export default Footer