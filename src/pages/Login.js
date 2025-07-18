import React from 'react'
import "../Global.css/Login.css";
function Login() {
  return (
    <div className='login-page'>
      <h1>Welocme to login page</h1>
      <section className='login-section'/>
      <form>
           <input type='text1' placeholder='Enter a username'/>
      <input type='text1' placeholder='Enter a password'/>
      <input type='checkbox'/>
      <div>
        <h4>Remember with</h4>
      </div>
      </form>
     <div className='password-icon1'>
      <i class="fa-solid fa-unlock"></i>
     </div>
       <div  className='user-icon2'>
       <i class="fa-solid fa-user"></i>
      </div>
      
     

    </div>
  )
}

export default Login
