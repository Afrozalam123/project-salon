import React from 'react'
import "../Global.css/About.css"
import Afroz from "../assests/Afroz.jpg"
import mision from "../assests/Mision.jpg"
function About() {
  return (
    <div>
     <img src={Afroz} alt="" className='saloon-img'>
     </img>
     <section className='head-section'>
       <div >
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
     <section className='Mission-section'>
     <img src={mision} alt=""/>
     </section>
    </div>
  )
}

export default About
