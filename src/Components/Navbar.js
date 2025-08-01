import React from 'react'
import { Link } from "react-router-dom";
import "../Global.css/Navbar.css"
function Navbar() {
  return (
    
    <nav>
      
      <ul className='nav-link'>
        <li><Link to="/home" className='nav-list'>Home</Link></li>
        <li><Link to="/about" className='nav-list'>About</Link></li>
        <li><Link to="/service" className='nav-list'>Service</Link></li>
        <form>
          <input type='text' placeholder='Search a product'></input>
          <button id='btn1'>Search</button>
        </form>
        <li><Link to="/customer" className='nav-list'>Customer</Link></li>
        {/* <li><Link to="/appointment" className='nav-list'>Appointment</Link></li> */}
        <li><Link to="/login" className='nav-list'>Login</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
