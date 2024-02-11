import React from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='login'>


    <Link to={'/login'}>
    <button className='register-btn'>Login</button>
    </Link>

     
     
      <div className="login-box">
        <h1>Register</h1>

        <div className="textbox">
          <p>User name</p>
          <input type="text" placeholder="Enter your username..." />
        </div>

        <div className="textbox">
          <p>Email</p>
          <input type="text" placeholder="Enter your email..." />
        </div>
        <div className="textbox">
          <p>Password</p>
          <input type="password" placeholder="Enter your password..." />
        </div>

        <button className='login-btn'>Register</button>
      
    </div>

    </div>
  )
}

export default Register
