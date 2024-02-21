import React, { useContext, useEffect, useState } from "react";
import "../css/SinglePost.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const SinglePost = () => {
  // can use both params and location
  // const {postId}= useParams();
  // console.log(postId);
  // console.log(path);

  const [singlePost, setSinglePost] = useState([]);
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const pf = "http://localhost:5000/images/";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      setSinglePost(res.data);
    };
    fetchPost();
  }, [singlePost]);

  const handleDelete = async () => {
    await axios.delete("/api/posts/" + path, {
      data: { username: user.username },
    });
    navigate("/");
  };

  const handleUpdate = async () => {
    await axios.put('/api/posts/'+ path , {
      title,
      description,
      username:user.username
    });
    setEditMode(false);
  }

  return (
    <div>
      <div className="single-post-details">
        {singlePost.image && (
          <img src={pf + singlePost.image} alt="" className="single-post-img" />
        )}

        <div className="details-top">
          {editMode ? (
            <input type="text" className="edit-title-input" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
          ) : (
            <h1 className="single-post-title">{singlePost.title}</h1>
          )}

          {user?.username === singlePost.username && (
            <div className="single-post-icons-contianer">
              <img
                className="single-post-icons"
                src="/assets/edit.png"
                alt=""
                onClick={() =>  user?.username===singlePost.username ? setEditMode(true) : null}
              />
              <img
                className="single-post-icons"
                src="/assets/trash.png"
                alt=""
                onClick={handleDelete}
              />
            </div>
          )}
        </div>

        <div className="details-middle">
          <p>
            Author :
            <Link
              style={{ textDecoration: "none" }}
              to={`/?user=${singlePost.username}`}
            >
              <span style={{ color: "orange", fontSize: "1.8vw" }}>
                {" "}
                {singlePost.username}
              </span>
            </Link>{" "}
          </p>
          <p>{new Date(singlePost.createdAt).toDateString()}</p>
        </div>

        {editMode ? (
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="edit-description"
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
              placeholder="Description"
            ></textarea>
            <div className="update-btn-container">
              <button className="update-btn" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        ) : (
          <p className="single-post-desc">{singlePost.description} </p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
