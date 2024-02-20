import React, { useEffect } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState ,useContext} from "react";
import axios from 'axios';
import { Context } from "../context/Context";

const Login = () => {

  // const [login,setLogin]=useState({
  //   username:'',
  //   password:''
  // })

   // const handleChange = (e)=>{
  //   setLogin((prev)=>{
  //     return {
  //       ...prev,
  //      [e.target.name]:e.target.value
  //     }
  //   })
  // }
  
  const{dispatch ,user , isFetching , error} = useContext(Context);

  const userRef = React.useRef();
  const passwordRef = React.useRef();
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})

    try{
      const res = await axios.post('/api/auth/login' , {
        username:userRef.current.value,
        password:passwordRef.current.value
      });
      //  console.log(res.data);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
      navigate('/');
    } catch(err){
      // console.log(err);
      dispatch({type:"LOGIN_FAILURE"})
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
            <input type="text" placeholder="Enter your username..." ref={userRef}/>
          </div>
          <div className="textbox">
            <p>Password</p>
            <input type="password" placeholder="Enter your password..." ref={passwordRef}/>
          </div>

          <button className="login-btn" disabled={isFetching} >Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
