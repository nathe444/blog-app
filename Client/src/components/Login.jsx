import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>

<Link to={'/register'}>
<button className='register-btn'>Register</button>
    </Link> 
     
      <div className="login-box">
        <h1>Login</h1>

        <div className="textbox">
          <p>Email</p>
          <input type="text" placeholder="Enter your email..." />
        </div>
        <div className="textbox">
          <p>Password</p>
          <input type="password" placeholder="Enter your password..." />
        </div>

    

        <button className='login-btn'>Login</button>
      
    </div>

    </div>
  )
}

export default Login
