import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Login = () => {

  const [login,setLogin]=useState({
    username:'',
    password:''
  })


  const handleChange = (e)=>{
    setLogin((prev)=>{
      return {
        ...prev,
       [e.target.name]:e.target.value
      }
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      const res = await axios.post('/api/auth/login' , login);
      console.log(res.data);
    } catch(err){
      console.log(err);
    }
   
  }  

  return (
    <div className="login">
      <Link to={"/register"}>
        <button className="register-btn">Register</button>
      </Link>

      <form action="" onSubmit={handleSubmit}>
        <div className="login-box">
          <h1>Login</h1>

          <div className="textbox">
            <p>User Name</p>
            <input type="text" placeholder="Enter your username..." name= 'username' onChange={handleChange}/>
          </div>
          <div className="textbox">
            <p>Password</p>
            <input type="password" placeholder="Enter your password..." name='password'onChange={handleChange}/>
          </div>

          <button className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
