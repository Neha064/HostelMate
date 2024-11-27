import React from 'react'
import Aboutcarousel  from './Aboutcarousel'
import aboutusstyles from './About.module.css'

function About() {
  return (
    <div
     className={aboutusstyles.parentaboutwholecontainer}
    >
    <div 
    className={aboutusstyles.aboutwholecontainer}
    >
      <div 
      className={aboutusstyles.aboutfirstcontainer}
      >
        <div
      className={aboutusstyles.aboutheading}
        >About Us</div>
         <p 
         style={{
             fontFamily:"Montserrat",
           fontWeight:"400"
         }}
         >
         Nivedita Girls Hostel is one of the newest hostel of IIT (BHU). It has 364 rooms for the students to stay. Hostel has high speed Wi-Fi as well as LAN internet facility for all rooms.
         </p>
      </div>
      <div 
      className={aboutusstyles.aboutsecondcontainer}
      >
       <Aboutcarousel></Aboutcarousel>
      </div>
    </div>
    </div>
  )
}

export default About