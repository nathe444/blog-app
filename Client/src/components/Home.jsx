import React from "react";
import "../css/Home.css";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import { useState , useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


function Home() {

  const location = useLocation();

  const search = location.search;

  const [posts, setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{    
        const res = await axios.get("/api/posts"+search);   
        setPosts(res.data);
    } 
    fetchPosts()
  },[search])

  console.log(search);

  return (
    <div>
      <div className="home">
        <h1 className="blog-h1">Blog</h1>
        <div>
          <img src="/assets/blog.jpg" alt="" className="blog-image" />
        </div>
      </div>

      <div className="post-and-sidebar">
          <Posts posts={posts}/>
          <Sidebar />
       </div>
    </div>
  );
}

export default Home;
