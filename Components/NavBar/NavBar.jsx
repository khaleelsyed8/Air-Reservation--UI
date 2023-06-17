import React,{useState} from 'react'
import { FaAngellist } from "react-icons/fa";
import { BsPhoneVibrate } from "react-icons/bs";
import {AiOutlineGlobal} from "react-icons/ai";
import {CgMenuRight} from "react-icons/cg"

import Logo from '../../Assets/logo.png';

const NavBar = () => {
  const[active,setActive]=useState('navBarMenu');
  const showNavBar=()=>{
    setActive('navBarMenu showNavBar');
  }
  const removeNavBar=()=>{
    setActive('navBarMenu');
  }

  const[noBg,addBg]=useState('navBarTwo');
  const addBgColor=()=>{
    if(window.scrollY >=10){
      addBg('navBarTwo navBar_With_Bg');
    }else{
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll',addBgColor)
  
  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
        <FaAngellist className='icon'/>
        </div>
        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon'/> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Log In</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={Logo} className='Logo'/>
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offers</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destinations</li>
          </ul>
          <button onClick={removeNavBar} className='btn flex btnOne'>
            Contact Us
          </button>
        </div>
        <button className='btn flex btnTwo'>
            Contact
          </button>
          <div onClick={showNavBar} className="toggleIcon">
            <CgMenuRight className='icon'/>
          </div>
      </div>
    </div>
  )
}

export default NavBar