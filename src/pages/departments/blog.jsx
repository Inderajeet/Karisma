import React from "react";
import "./blog.css"; // Import CSS for styling

const Blog = (props) => {
  return (
    <div className="blog-body">
      <div className="blog-container">
        {/* Blog Image */}
        <div className="blog-image-container">
          <img src={props.blogImg} alt="Blog" className="blog-image" />
        </div>

        {/* Blog Content */}
        <div className="blog-content">
          <h2 className="title blog-title">{props.blogTitle}</h2>
          <p className="blog-description">{props.blogDesc}</p>

          {/* Additional Content */}
          {props.additionalParagraphs && (
            <div className="blog-additional-content">
              {props.additionalParagraphs.map((paragraph, index) => (
                <p key={index} className="blog-paragraph">
                  {paragraph}
                  <br />
                </p>
              ))}
            </div>
          )}

          {props.bulletPoints && (
            <ul className="blog-bullet-points">
              {props.bulletPoints.map((point, index) => (
                <li key={index} className="bullet-point">
                  {point}
                </li>
              ))}
            </ul>
          )}

          {props.extraContent && (
            <div className="blog-additional-content">{props.extraContent}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
