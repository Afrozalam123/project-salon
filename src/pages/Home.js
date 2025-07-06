import React from 'react'
 import Photo from "../assests/Photo.jpg";
import "../Global.css/Home.css"
function Home() {
  return (
    <div className='image-bg'>
    <img src={Photo} alt='' className='back-img'/>
    </div>
  )
}

export default Home
