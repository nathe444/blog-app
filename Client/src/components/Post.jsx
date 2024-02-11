import React from "react";
import "../css/Post.css";

function Post(props) {
  return (
    <div className="post">
      <img
        src={props.img}
        className="post-image"
      />

      <div className="post-info">
        <div className="post-catagories">
          <span className="post-catagory">Music</span>
          <span className="post-catagory">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <span className="post-date">1 hour ago</span>
        <p className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vel, nobis ullam libero suscipit sit odio sapiente illum, dolore soluta, deserunt repellendus necessitatibus? Doloribus, nesciunt! Aliquid ullam maiores porro quas?</p>
      </div>


    </div>
  );
}

export default Post;
