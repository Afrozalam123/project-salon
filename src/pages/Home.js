import React, { use } from 'react'
 import myImage from "../assests/Photo.jpg";
import "../Global.css/Home.css"
import image from "../assests/image3.jpg"
import image4 from "../assests/image4.jpg"
import hair  from "../assests/hair.jpg"
import beard from "../assests/beard.jpg"
import logoImg from "../assests/new-logo.png"
// import { useNavigate } from 'react-router-dom';


function Home() {
 

  return (
    <div className='image-bg'>
    <img src={myImage} alt='' className='back-img'/>
    <div>
    <img src={logoImg} alt="salon logo" className='modern-logo'/>
    </div>
    <div>
     <h1 id='heading1'>Welcome to Modern & stylish saloon</h1>
     <p id='para'    >Get your best look for Modern & Stylish saloon <br/>and enjoy personalized beauty care by experts <br/> and glow up with lastest trend and Modern in Hair,skin and grooming </p>
     <button  id='btn2'>Book Now</button>
     <div>
      <img src={image} alt='' className='banner-img'/>
      <div>
      </div>
      <div>
        <h2 className='section-heading'>our Signature service...</h2>
       
      </div>
   
 
     </div>
    </div>
      
       <section className='services-img'>
        <img src={hair} alt="Haircutting"/>
        <img src={image4} alt='facial'/>
        <img src={beard} alt="beard-shaving"/>
       </section>
       
       <section className='home-cards'>
        <h2>What we offer</h2>
        
        </section> 
       
         
         <div className='card-section'>
          <div className='card'>
            <h3>
              <span className='color1'>Hair</span>
              <span className='color2'>Styling</span>
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quod, sunt error expedita eaque, unde soluta corrupti in fugiat sed tempore earum! Magni similique aliquid iste accusantium vel nostrum? Aspernatur.</p>
            <button id='first-btn'>Learn More...</button>
          </div>
          <div className='card'>
            <h3>
              <span className='brown-clr'>Facial</span>
              <span className='green-clr'>Treatment</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae sit reprehenderit nesciunt eum animi inventore, vero aperiam? Quia, sunt praesentium voluptas placeat culpa aliquam vitae natus tempora temporibus beatae!</p>

            <button id='first-btn'>Learn More...</button>
          </div>
          <div className='card'>
            <h3>
              <span>Beard</span>
              <span className='red-clr'>Grooming</span>
             
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet beatae maxime quo repellendus corporis molestiae distinctio praesentium unde, inventore voluptate eos culpa alias ullam quae, obcaecati, doloremque ea? Sunt, in.</p>
            <button id='first-btn'>Learn More...</button>
          </div>
         </div>
          </div>
      
     
     
     
      
    
  )
}

export default Home
