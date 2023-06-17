import React from 'react'
import paris from '../../Assets/paris.jpeg'
import dubai from '../../Assets/dubai.jpeg'
import london from '../../Assets/london.jpeg'
import nyc from '../../Assets/nyc.jpeg'
import traveler1 from '../../Assets/user1.png'
import traveler2 from '../../Assets/user4.jpg'
import traveler3 from '../../Assets/user3.png'
import traveler4 from '../../Assets/user2.jpg'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'


const travellers=[
  {
    id:1,
    destinationimage:paris,
    travelerimage:traveler1,
    travelername:'tester1',
    social:'@testing'
  },
  {
    id:2,
    destinationimage:dubai,
    travelerimage:traveler2,
    travelername:'tester1',
    social:'@testing'
  },
  {
    id:3,
    destinationimage:london,
    travelerimage:traveler3,
    travelername:'tester1',
    social:'@testing'
  },
  {
    id:4,
    destinationimage:nyc,
    travelerimage:traveler4,
    travelername:'tester1',
    social:'@testing'
  },
]

const Travelers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='travellers container section'>
      <div className="sectioncontainer">
        <h2 data-aos='fade-left' data-aos-duration='1500'>
          Top Travellers For the Month!!
        </h2>
        <div className="travellersContainer grid">
          {
            travellers.map(({id,destinationimage,travelerimage,travelername,social})=>{
              return(
                <div data-aos='fade-right' data-aos-duration='2500' key={id} className="singleTraveller">
            <img src={destinationimage} className='destinationimage' />
            <div className="travelerDetails">
              <div className="trvalerpicture">
                <img src={travelerimage} className='travelerimage' alt="" />
              </div>
              <div className="travelername">
                <span>{travelername}</span>
                <p>{social}</p>
              </div>
            </div>

          </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Travelers