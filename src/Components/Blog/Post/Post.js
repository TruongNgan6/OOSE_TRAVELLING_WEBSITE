import React from "react";
import "./Post.css";
import BlogImage from "../../../Assets/Images/blog-image01.jpg";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";

const Post = () => {
  return (
    <div>
      <div className="blog-post">
        <div className="image-container">
          <img src={BlogImage} alt="Blog Post" className="image" />
        </div>
        <div className="post-content">
          <div className="date">JUNE 6, 2023</div>

          <h3 className="title">Pack wisely before traveling</h3>

          <p className="short-content">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm...
          </p>
          <br />
          <hr />
          <br />
          <div className="author-category">
            <AiOutlineFolderAdd color="#978c8c" />
            <div className="author">John Smith</div>
            <TbCategory color="#978c8c" />
            <div className="category">Category</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
