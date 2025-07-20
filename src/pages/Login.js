import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

import "../Global.css/Login.css";
function Login() {
   const{
    register,
    handleSubmit,
    watch,
    formState: { errors }
  
   } = useForm();
    
   function onSubmit(data){
    console.log("Sign up:", data)
    alert('form was Sign in successfuly')
   }
  return (
  
  
    <div className='login-page'>
      <h1>Welocme to login page</h1>
      <section className='login-section'/>
     
      <form onSubmit={handleSubmit(onSubmit)}>
           <input type='text1' placeholder='Enter a username' 
             {...register("username", { required: true,maxLength:9,minLength:8, })}

            />
              {errors.username  && <p className='user-error'>username must be 8 to 9 characters required</p>}

           
       
      <input type='text1'   placeholder='Enter a password' 

      {...register("password", { required: true,  
        maxLength:10,
        minLength:9
        
      })}
      />
      {errors.password &&<p className='errors-password'>password must be 9and 10 must be required </p> }

      <input type='checkbox' className='chekbox2'/>
      <div>
        <h4 className='checkbox1'>Remember with</h4>
        <h4 className='text7'>Forgot!password</h4>
      </div>

      <div className='buton'/>
         <button id='btn4' type="submit">Sign in</button>
         <button id='btn5'>Continue With Google</button>
      </form>
     <div className='password-icon1'>
      <i class="fa-solid fa-unlock"></i>
     </div>
       <div  className='user-icon2'>
       <i class="fa-solid fa-user"></i>
      </div>
      <section className='icon-section'>
        <div className='icons'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </section>
        

    </div>
  )
}


export default Login
