import React from 'react'
import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import Navbar from  "./Components/Navbar"
import Home  from  "./pages/Home"
import About from  "./pages/About"
import Service from "./pages/Service"
import Login from  "./pages/Login"
import Customer from "./pages/Customer"
import Appointment from "./pages/Appointment"
import login from  "./pages/Login"

function App() {
  return (
   <BrowserRouter>
   <Navbar/>

    
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/service" element={<Service/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/customer" element={<Customer/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
      </Routes>
     
   </BrowserRouter>
   
  )
}

export default App
