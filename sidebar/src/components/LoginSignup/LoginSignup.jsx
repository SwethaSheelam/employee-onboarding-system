import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assests/email.png'
import email_icon from '../Assests/person.png'
import password_icon from '../Assests/password.png'


const LoginSignup = () => {
    const [action,setAction]=useState("Login");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:  <div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" placeholder='text' />
            </div>}
           
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email-id' />
            </div>
            {action==="Sign Up"?<div></div>: <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='password'/>
            </div>}
           
            <div className="forgot-password">Lost password?<span>Click here!</span></div>
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup