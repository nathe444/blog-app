import React, { useEffect, useState } from "react";
import "../css/Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCatagories = async () => {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    };
    getCatagories();
  }, []);

  return (
    <div className="side-bar">
      <div className="side-bar-top">
        <div className="about-me">
          <hr />
          <h2>About Me</h2>
          <hr />
        </div>

        <img src="/assets/blog.jpg" className="sidebar-img" alt="" />
        <p>
          I am a computer science student based in Addis Ababa, Ethiopia. My
          journey in technology began with self-taught programming lessons in my
          teens, which ignited a passion for innovation and problem-solving.
          Throughout my studies, I have worked on projects ranging from
          educational software to platforms supporting local entrepreneurs. My
          goal is to make technology accessible to everyone, collaborating with
          organizations to bring resources and training to underserved areas. In
          my free time, I enjoy mentoring young developers and staying updated
          on the latest tech trends.
        </p>
      </div>

      <div className="about-me">
        <hr />
        <h2>CATEGORIES</h2>
        <hr />
      </div>

      <div className="category-options">
        {categories.map((c) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/?category=${c.name}`}
          >
            <p>{c.name}</p>
          </Link>
        ))}
      </div>

      <div className="about-me">
        <hr />
        <h2>FOLLOW US</h2>
        <hr />
      </div>

      <div className="sidebar-social">
        <ul>
          <li>
            <img className="icons" src="/assets/facebook-black.png" alt="" />
          </li>
          <li>
            <img className="icons" src="/assets/ig-black.png" alt="" />
          </li>
          <li>
            <img className="icons" src="/assets/twitter-black.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
