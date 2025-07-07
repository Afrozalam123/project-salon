import React, { use } from 'react'
 import Photo from "../assests/Photo.jpg";
import "../Global.css/Home.css"
import image from "../assests/image3.jpg"
import image4 from "../assests/image4.jpg"
import hair  from "../assests/hair.jpg"
import beard from "../assests/beard.jpg"
// import { useNavigate } from 'react-router-dom';


function Home() {
 

  return (
    <div className='image-bg'>
    <img src={Photo} alt='' className='back-img'/>
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
        <div className='card'>
          <h3>Hair styling</h3>
          <p>Modern styling and smmoth finish and modern stylish look</p>
        </div>
        <div className='card'>
          <h3>Skin Treatment</h3>
          <p>Glow facials ,cleanup,and best look your skin and better experience</p>

        </div>
        <div className='card'>
          <h3>Beard shaving</h3>
          <p>precise trimming and beard for a sharp,clean,look </p>
        </div>
        </section> 
     
        </div>
  
     
      
    
  )
}

export default Home
