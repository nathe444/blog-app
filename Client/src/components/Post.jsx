import React from "react";
import "../css/Post.css";
import {Link} from "react-router-dom";

function Post({post}) {

const pf = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.image && <img src={pf + post.image} className="post-image" />}
    
      <div className="post-info">
        <div className="post-catagories">
          {post.categories?.map((c)=>(
            <span className="post-catagory">{c.name}</span>
          ))}
        </div>
       <Link style={{textDecoration:"none"}} to={`/post/${post._id}`}>
       <span className="post-title">{post.title}</span>
       </Link> 
        <span className="post-date">{new Date(post.createdAt).toDateString()}</span> 
        <p className="post-desc">{post.description}</p>
      </div>


    </div>
  );
}

export default Post;
