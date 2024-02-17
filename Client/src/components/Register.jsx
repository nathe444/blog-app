import React, { useEffect, useState } from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate} from "react-router-dom"
const Register = () => {

  const [user , setUser] = useState({
    username:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  console.log(user);

  const handleChange = (e)=>{
    setUser((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

    
      const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
          const res = await axios.post('/api/auth/register',user)
          console.log(res.data);
          alert('Registered successfully')
          navigate("/login");
        } catch(err){
          console.log(err);
          if(err.response.data === "User already exists"){
            alert("User already exists")
          }
        }
      }
   

  return (
    <div className='login'>


    <Link to={'/login'}>
    <button className='register-btn'>Login</button>
    </Link>

     
     
      <div className="login-box">
        <h1>Register</h1>

        <form className='register-form' onSubmit={handleSubmit}>
        <div className="textbox">
          <p>User name</p>
          <input type="text" placeholder="Enter your username..." name="username" onChange={handleChange} />
        </div>

        <div className="textbox">
          <p>Email</p>
          <input type="email" placeholder="Enter your email..." name="email" onChange={handleChange}/>
        </div>
        <div className="textbox">
          <p>Password</p>
          <input type="password" placeholder="Enter your password..." name="password" onChange={handleChange}/>
        </div>

        <button className='login-btn'>Register</button>
        </form>

       
      
    </div>

    </div>
  )
}

export default Register
