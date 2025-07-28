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

  function handlerclick() {
    alert("You will book now");
    setClicked(true); 

    if(clicked){
      console.log("you will book now")
    }
  };
  
  return (
    <section className='service-section'>
     <div>
      <img src={service} alt='service-img' className='service-img'/>
    </div>
    <h2 className='service-head'>Welcome<br/> Our Services</h2>
    <p className='paragraph-servic'>Choose from a variety of <br/> premium salon experiences.</p>
    <button onClick={handlerclick} id='service-btns'>Explore More</button>
    <br/>

    <div className='service-card-container'/>
    <section className='service-card1'>
      <img src={Stylish} alt="Stylish-image"  className='stylish-image1'/>
      <h3>Haircut & Styling</h3>
      <p>Modern and styles for every look and event..</p>
      <p className='price1'>Starting at ₹299</p>
      <button onClick={handlerclick} className='book-btn'>Book Now</button>
     </section>


    
     <section>
       <div className='service-card2'>
      <img src={Berd} alt='Beard' className='stylish-image1'/>
      <h3>Beard Grooming</h3>
      <p>Keep your beard clean, sharp, and well-shaped with our professional beard grooming service..</p>
      <p className='price1'> startin price is:₹150</p>
      <button className='book-btn'>Book Now</button>
     </div>
     </section>

     <section className='service-card3'>
      <img src={Facial} alt='Facial Image' className='stylish-image1'/>
      <h3>Facial Treatment</h3>
      <p>Facial is a skin treatment that deeply cleanses, hydrates, and refreshes your face. It removes dead skin,</p>
        <p className='price1'>Starting price is ₹120</p>
        <button onClick={handlerclick} className='book-btn'>Book Now</button>
     </section>

     
     <section className='service-card4'>
      <img src={Coloring} alt='Hair-color' className='stylish-image1'/>
      <h3>Hair Coloring</h3>
      <p>Hair coloring gives your hair a new and stylish look. We use safe and good-quality colors that stay longer and do not harm your hair. Choose your favorite shade and change your style with confidence.</p>
      <p className='price1'>Starting Price is :₹300-600</p>
      <button onClick={handlerclick} className='book-btn'>Book NOW</button>
     </section>
      


      <section className='service-card5'>
      <img src={Treatment} alt='treatnment-img' className='stylish-image1'/>
      <h3>Manicure & Pedicure</h3>
      <p>Manicure and Pedicure are relaxing treatments for your hands and feet. They include nail cleaning, shaping, dead skin removal, and gentle massage. These services help keep your skin soft, clean, and healthy, while giving your nails a neat and stylish look. </p>
      <p className='price1'>Starting in ₹199-210</p>
      <button onClick={handlerclick} className='book-btn'>Book Now</button>
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
      
     </section>
     

    
  


    </section>

    

  )
}

export default Service
