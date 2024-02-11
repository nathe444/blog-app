import React from "react";
import "../css/Home.css";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

function Home() {
  return (
    <div>
      <div className="home">
        <h1 className="blog-h1">Blog</h1>
        <div>
          <img src="/assets/blog.jpg" alt="" className="blog-image" />
        </div>
      </div>

      <div className="post-and-sidebar">
          <Posts />
          <Sidebar />
       </div>
    </div>
  );
}

export default Home;
