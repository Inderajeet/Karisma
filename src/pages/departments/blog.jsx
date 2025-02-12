import React from "react";
import "./blog.css"; // Import CSS for styling

const Blog = (props) => {
  return (
    <section className="imgSect">
      <div className="customContainer">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
          <img src={props.blogImg} alt="Blog" className="blog-image" />
        </div>

        {/* Blog Content */}
        <div className="blog-content">
          <h2 className="title blog-title">{props.blogTitle}</h2>
          <p className="">{props.blogDesc}</p>

          {/* Additional Content */}
          {props.additionalParagraphs && (
            <div className="blog-additional-content">
              {props.additionalParagraphs.map((paragraph, index) => (
                <p key={index} className="">
                  {paragraph}
                  <br />
                </p>
              ))}
            </div>
          )}

          {props.bulletPoints && (
            <ul className="blog-bullet-points">
              {props.bulletPoints.map((point, index) => (
                <p key={index} className="bullet-point">
                  {point}
                </p>
              ))}
            </ul>
          )}

          {props.extraContent && (
            <div className="blog-additional-content">{props.extraContent}</div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Blog;
