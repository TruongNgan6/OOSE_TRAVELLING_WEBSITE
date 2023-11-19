import React from "react";
import "./Blog.css";
import Post from "./Post/Post";
import Blogtitle from "../../Assets/Images/blog-image01.jpg";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-image">
          <img
            src={Blogtitle}
            alt="Blog Cover"
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
          <div className="blog-text">
            <h1>Adventures Beyond Boundaries</h1>
            <h3>Exploring Uncharted Destinations, Cultures, and Experiences</h3>
          </div>
        </div>
        <div className="blog-content">
          <Post />
          <Post />
          <Post />
        </div>
        <div className="button-create-blog">
          <button>Create a New Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
