import React, { useContext } from "react";
import "../css/Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

function Header() {
  const { dispatch, user } = useContext(Context);
  const navigate = useNavigate();

  const pf = "http://localhost:5000/images/";

  const style = {
    color: "black",
    borderBottomWidth: "0.3vw",
    borderBottomStyle: "solid",
    borderBottomColor: "gray",
  };

  const handleLogout = () => {
    dispatch({ type: "LOG_OUT" });
    // window.location.reload();
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header__left">
        <h2>
          Nathe<span style={{ color: "orange", margin: 0 }}>Works</span>
        </h2>
      </div>

      <div className="header__middle">
        <ul>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            className="link"
            to="write"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <li>Write</li>
          </NavLink>

          <NavLink
            className="link"
            to="/contact"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <li>Contact</li>
          </NavLink>

          <NavLink
            className="link"
            to="/about"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <li>About</li>
          </NavLink>

          <li onClick={handleLogout} style={{ cursor: "pointer" }}>
            {" "}
            {user && "Logout"}
          </li>
        </ul>
      </div>

      <div className="header__right">
        {user ? (
          <div className="search-and-profile tooltip">
            <Link to="/settings">
              <img className="profile-icon" src={pf + user.profilePic} alt="" />
              <span class="tooltiptext">Edit Profile</span>
            </Link>
            {/* <img className="icons search-icon" src="/assets/search.png" alt="" /> */}
          </div>
        ) : (
          <div className="login-register">
            <Link to="/login">
              <button className="header-login-btn">Login</button>
            </Link>

            <Link to={"/register"}>
              <button className="header-register-btn">Register</button>
            </Link>
          </div>
        )}

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

export default Header;
