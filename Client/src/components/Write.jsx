import React, { useState, useContext } from "react";
import "../css/Write.css";
import axios from "axios";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Write = () => {

  const navigate = useNavigate();

  const [formData , setFormdata] = useState({
    title:"",
    description:""
  })

  const [image, setImage] = useState(null);
  const { user } = useContext(Context);

  const handleChange = (e) => {
    setFormdata((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title:formData.title,
      description:formData.description,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      try {
        axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post("/api/posts", newPost);
      navigate("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {image && <img src={URL.createObjectURL(image)} className="write-img" />}

      <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>{
        setImage(e.target.files[0])
      }}/>

      <form className="write-form" onSubmit={handleSubmit}>
        <div className="upper-form">
          <div className="upper-form-left">
            <label htmlFor="fileInput">
              <div className="tooltip">
              <img src="/assets/add.png" alt="" className="add" />
              <span class="tooltiptext">Add Image</span>
              </div>
              
            </label>

            <input type="text" placeholder="Title" className="title" name='title' onChange={handleChange}/>
          </div>
          <button>Publish</button>
        </div>

        <textarea
          // name="post-detail"
          id=""
          placeholder="Tell your story"
          cols="30"
          rows="10"
          className="text-area"
          name="description"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default Write;
