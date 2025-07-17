import React from 'react'
import "../Global.css/About.css"
import Afroz from "../assests/Afroz.jpg"
import saloon from "../assests/saloon.jpg"
import interior from "../assests/interior.jpg"
import waiting  from "../assests/waiting-saloon.jpg"
import style  from  "../assests/style.jpg"
import stylish2 from "../assests/stylish2.jpg"
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
      <div>
        <h2>Our Vision</h2>
        <p>We aim to make salon services simple and accessible for everyone.<br/>
No more standing in long queues or waiting for your turn.<br/>
Book appointments quickly using your phone — anytime, anywhere.<br/>
Our goal is to save your time and give you a smooth experience.<br/>
Grooming made easy, fast, and available to all.<br/>
</p>

  <section className='story-section'>
    <div>
       <img src={waiting} alt=""/>
      <h2>Our Story</h2>
      <p>
         We noticed how people often walked away from traditional salons after seeing long queues.<br/>
    Barbers would ask them to come later due to crowd and limited capacity.<br/>
    This led to frustration and loss of valuable customers. <br/>
    To solve this, we started a modern, digital-first salon system. <br/>
    Now, customers can easily book appointments and enjoy hassle-free grooming without waiting.<br/>
    </p> 
    <section className='team-section'>
      <h2>Meet Our Team</h2>
      <div className='Team-member'>
        <img src={style} alt='style' className='style-img1'/>
        <h3>Aayan khan</h3>
        <p>Senior Hair Stylist</p>
      </div>

      <section className='section-team1'>
       <img src={stylish2} alt='' className='style-img2'/>
       <div className='heaid'>
       <h4>Zoya Khan</h4>
       <p>Senior Facial <br/>Treatment</p>
       </div>
     
      </section>
     
    </section> 
    </div>
  </section>
     </div>
     </section>
    </div>
     
  )
}

export default About
