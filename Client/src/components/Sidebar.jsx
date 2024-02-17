import React, { useEffect ,useState} from "react";
import "../css/Sidebar.css";
import axios from "axios";
import {Link} from "react-router-dom";

function Sidebar() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getCatagories = async()=>{
      const res = await axios.get("/api/categories");
      console.log(res);
      setCategories(res.data);
    } 
    getCatagories();
  },[])


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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          recusandae debitis quia quam nobis rerum dolor facilis nam eos nulla?
          Iusto quae eveniet laboriosam, consequatur minima minus delectus. Qui,
          maxime?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          temporibus, molestias velit obcaecati tempora aliquid
        </p>
      </div>

      <div className="about-me">
        <hr />
        <h2>CATEGORIES</h2>
        <hr />
      </div>

      <div className="category-options">

        {categories.map((c)=>(
         <Link style={{textDecoration:"none",color:"black"}} to={`/?category=${c.name}`}>
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
