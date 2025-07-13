import React from 'react'
import "../Global.css/About.css"
import Afroz from "../assests/Afroz.jpg"
import saloon from "../assests/saloon.jpg"
import interior from "../assests/interior.jpg"
function About() {
  return (
    <div>
     <img src={Afroz} alt="" className='saloon-img'>
     </img>
     <section className='head-section'>
    
       <div className='section-text' >
        <h2>About <br/>
          Modern & stylish saloon </h2>
        <p>We give hair,skin and Beauty services<br/>
         Our Team uses good product and new methods<br/>
         to give a modern look -with care and personal<br/>
         attention
        </p>
        <button id='btns'>Know More</button>
       </div>
       
     </section>
      <div className='mision-heading'>Our Mission</div>
     <section className='Mission-section'>
     <img src={saloon} alt=""/>
     <section className='mission-medium'>
      <div>
        <h2>Our Mission</h2>
        <p> Our mission is to offer a clean, hygienic, and modern salon experience <br/>.
We focus on comfort, style, and personal care for every customer <br/>.
Our trained staff uses quality products for the best results.<br/>
And my aim to make people every visit relaxing and confidence-boosting</p>
   </div>
     </section>
     </section>
     <section className='section-para'>
      <img src={interior} alt=''/>
     </section>
    </div>
  )
}

export default About
