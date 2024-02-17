import React, { useEffect, useState } from 'react'
import '../css/SinglePost.css'
import { useLocation ,useParams} from 'react-router-dom'
import axios from "axios"
import {Link} from "react-router-dom";  

const SinglePost = () => {

const [singlePost , setSinglePost]=useState([]);

const location = useLocation();
const path = location.pathname.split("/")[2];

// can use both params and location
// const {postId}= useParams();
// console.log(postId);
// console.log(path);

useEffect(()=>{
  const fetchPost = async ()=>{
    const res = await axios.get("/api/posts/" + path);
    setSinglePost(res.data)
  } 
  fetchPost()
},[])

  return (
    <div>

      <div className='single-post-details'>

        {singlePost.img && <img src={singlePost.img} alt="" className='single-post-img'/>}
      
      {/* <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='single-post-img'/> */}

      <div className='details-top'>
      <h1 className='single-post-title'>{singlePost.title}</h1>

      <div className='single-post-icons-contianer'>
      <img className='single-post-icons' src="/assets/edit.png" alt="" />
      <img className='single-post-icons' src="/assets/trash.png" alt="" />
      
      </div>
      
      </div>

      <div className='details-middle'>
        <p>Author:
           <Link style={{textDecoration:"none"}} to={`/?user=${singlePost.username}`}>
             <span style={{color:"orange"}}> 
          {singlePost.username}</span>
           </Link> </p>
        <p>{new Date(singlePost.createdAt).toDateString()}</p>
      </div>

      <p className='single-post-desc'>{singlePost.description} </p>
      

      </div>
     
    </div>
  )
}

export default SinglePost
