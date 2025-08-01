import React from 'react'
import "../Global.css/Customer.css"
import smilling from "../assests/smilling.jpg"
import Customer1 from "../assests/Customer1.jpg"
import Customer2 from "../assests/Customer2.jpg"
import Customer3 from "../assests/Customer3.jpg"
function Customer() {
  return (
    <section>
     <img src={smilling} alt='smilling-image'/>
     <div className='smiling-text'>
      <h1>Our Happy Customer</h1>
      <h2>Trusted by Hundreds of Satisfied Clients.</h2>
      <button id='join'>Join Our Family..</button>
     </div>


     <section className='Testinomial'>
      <h2 className='customer-text'>Meet Our Customers</h2>
      <div className='card7'>
      <img src={Customer1} alt='customer-image' className='styling-image'/>
      <div className='customers-text'>
        <h2>Rakesh Sharma</h2>
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <p>"I loved the facial and hair treatment! Super friendly staff."</p>
      </div>
      </div>
      

      <section className='card8'>
      <img src={Customer2} alt='customer-image' className='styling-image'/>
      <h2>Rahul Kumar Sinha</h2>
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>Great ambiance, perfect service. My go-to salon now</p>
      </section>

      <section className='card9'>
       <img src={Customer3} alt='customer- image' className='styling-image'/>
       <h2>Priya kaur</h2>
       <div class="stars">⭐⭐⭐⭐⭐</div>
       <p>Bridal makeup was flawless! Everyone loved my look</p>
      </section>

     </section>

     <section className='Customer-status'>
      <h2>We're Loved from clients</h2>

      <div className='status-box'>
        <div>
          <h3>1000+</h3>
          <p>Our Happy Customer</p>
        </div>
        <div>
          <h3>4.5/5</h3>
          <p>Average Rating</p>
        </div>

        <div>
          <h3>5+ Years</h3>
      <p>Trusted Service</p>
        </div>
      </div>
    
     </section>
    </section>
  )
}

export default Customer
