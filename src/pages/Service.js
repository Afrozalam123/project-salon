import React from 'react'
import { useEffect,useState } from 'react';
import "../Global.css/Service.css"
 import service from "../assests/service.jpg"
 import Stylish from "../assests/Stylish.jpg1.jpg"
 import Berd from "../assests/Berd.jpg"
 import Facial from "../assests/Facial.jpg"
 import Coloring from "../assests/Coloring.jpg"
 import Treatment from "../assests/Treatment.jpg.png"
function Service() {
  const[clicked, setClicked]=useState(false)

  function handlerclick(serviceName,serviceprice1) {
    alert(`You will book now ${serviceName} for ${serviceprice1}`);
    setClicked(true); 

    if(clicked){
      console.log(`you will book now ${serviceName} for ${serviceprice1}`)
      
    }

   
  };
  
  return (
    <section className='service-section'>
     <div>
      <img src={service} alt='service-img' className='service-img'/>
    </div>
    <h2 className='service-head'>Welcome<br/> Our Services</h2>
    <p className='paragraph-servic'>Choose from a variety of <br/> premium salon experiences.</p>
    <button 
    id='service-btns'>Explore More</button>
    <br/>

    <div className='service-card-container'/>
    <section className='service-card1'>
      <img src={Stylish} alt="Stylish-image"  className='stylish-image1'/>
      <h3 className='card-heading'>Haircut & Styling</h3>
      <p className='card-pra'>Get a fresh new look with our expert hair cutting and styling services.
Whether you prefer a trendy cut or a classic style, we tailor it to suit your personality.
...</p>
      <p className='price1'>Starting at ₹299</p>
      <button onClick={()=>handlerclick('Haircut & Styling', '₹299')}

      className='book-btn'>Book Now</button>
     </section>


    
     <section>
       <div className='service-card2'>
      <img src={Berd} alt='Beard' className='stylish-image1'/>
      <h3 className='card-heading'>Beard Grooming</h3>
      <p className='card-pra'>Keep your beard clean, sharp, and well-shaped with our professional beard grooming service..</p>
      <p className='price1'> starting price is:₹150</p>
      <button onClick={()=>handlerclick("Beard Grooming",'₹150')}

      className='book-btn'>Book Now</button>
     </div>
     </section>

     <section className='service-card3'>
      <img src={Facial} alt='Facial Image' className='stylish-image1'/>
      <h3 className='card-heading'>Facial Treatment</h3>
      <p className='card-pra'>Facial is a skin treatment that deeply cleanses, hydrates, and refreshes your face. It removes dead skin,</p>
        <p className='price1'>Starting price is ₹120</p>
        <button onClick={()=>handlerclick("Facial Treatment","₹120")} className='book-btn'>Book Now</button>
     </section>

     
     <section className='service-card4'>
      <img src={Coloring} alt='Hair-color' className='stylish-image1'/>
      <h3 className='card-heading'>Hair Coloring</h3>
      <p className='card-pra'>Hair coloring gives your hair a new and stylish look. We use safe and good-quality colors that stay longer and do not harm your hair. </p>
      <p className='price1'>Starting Price is :₹300</p>
      <button onClick={()=>handlerclick("Hair Coloring","₹300")} className='book-btn'>Book NOW</button>
     </section>
      


      <section className='service-card5'>
      <img src={Treatment} alt='treatnment-img' className='stylish-image1'/>
      <h3 className='card-heading'>Manicure & Pedicure</h3>
      <p className='card-pra'>Manicure and Pedicure are relaxing treatments for your hands and feet. They include nail cleaning, shaping, dead skin removal,</p> 
      <p className='price1'>Starting in ₹199-210</p>
      <button onClick={()=>handlerclick("Manicure & pedicure","₹199-210")} className='book-btn'>Book Now</button>
      </section>


      <section className='contact-section'>
        <h3 className='title'>Contact us</h3>
        <p className='contact-paragraph'>Any question or Remark?just write a message </p>
        <div className='input-field'>
          <input type='text3'  placeholder='Enter a valid Name'/>
          <input type="text4" placeholder='Enter a valid e-mail Address' />
          <button id='submits'>Submit</button>
        </div>
      </section>

     <section className='container'>
      <div className='box'>
        <div className=' circle-box'>
          <div className='person-icon'>
            <i class="fa-solid fa-person-running"></i>
            <br/>
            <div className='persons-text'>
              <h1>ABOUT CLUB</h1>
              <p>Running Guide<br/>
                 Workouts
              </p>
            </div>
          </div>

          <section className='circle-box1'>
            <div className='call-icon'>
              <i class="fa-solid fa-phone"></i>
              <br/>
              <div className='call-text'>
                <h1>PHONE(LANDLINE)</h1>
                 <p>+9122356789<br/>
                    +9122358759
                 </p>
              </div>
            </div>

            <section className='circle-box2'>
            <div className='location-icon'>
              <i class="fa-solid fa-location-dot"></i>
              <br/>
              <div className='location-text'>
                <h1>OUR OFFICE LOCATION</h1>
                <p>Tower A, 7th Floor, Stellar IT Park, Sector 62,<br/> Noida, Uttar Pradesh - 201309"</p>


              </div>
            </div>
            </section>

          </section>

         
        </div>
      </div>
     </section>
     

    
  


    </section>

    

  )
}

export default Service
