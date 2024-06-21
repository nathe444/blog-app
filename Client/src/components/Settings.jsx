import React, { useContext, useRef, useState } from "react";
import "../css/Settings.css";
import Sidebar from "./Sidebar";
import { Context } from "../context/Context.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRef = useRef();
  const emailref = useRef();
  const passwordRef = useRef();
  const pf="http://localhost:5000/images/";

  const { user, dispatch } = useContext(Context);

  const updatedUser = {
    username,
    email,
    password,
    userId: user._id,
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    if (profilePic) {
      const data = new FormData();
      const filename = Date.now() + profilePic.name;
      data.append("name", filename);
      data.append("file", profilePic);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.put("/api/users/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS" });
      alert("Account Updated successfully");
      userRef.current.value = "";
      emailref.current.value = "";
      passwordRef.current.value = "";
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  console.log(user);

  return (
    <div className="settings">
      <div className="update-info">
        <div className="update-info-top">
          <h1>Update Your Account</h1>
          <p>Delete Account</p>
        </div>

        <div className="update-info-middle">
          <p>Profile Picture</p>
          <div className="profile-container">
            <img
              src={
                profilePic ? URL.createObjectURL(profilePic) : '/assets/profile.png'
              }
              className="profile-picture"
            />

            <label htmlFor="fileInput">
              <img src="/assets/add.png" alt="" className="user-icon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </div>
        </div>

        <div className="update-info-bottom">
          <form
            action=""
            className="update-info-bottom"
            onSubmit={handleUpdate}
          >
            <p>Username</p>
            <input
              type="text"
              className="update-info-input"
              required={true}
              onChange={(e) => setUserName(e.target.value)}
              ref={userRef}
            />
            <p>Email</p>
            <input
              type="email"
              className="update-info-input"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailref}
            />
            <p>Password</p>
            <input
              type="password"
              className="update-info-input"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              ref={passwordRef}
            />
            <button className="update-info-button">Update</button>
          </form>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Settings;
