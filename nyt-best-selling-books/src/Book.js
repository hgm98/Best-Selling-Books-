import React from "react";
import './Book.css';

const Book = ({ title, author, description, amazon_link, image  }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="icon">
          <img className="image" src={image} alt="" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <h4>Author: {author}</h4>
          <p>{description}</p>
          <a href={amazon_link}>
            <button className="button">Buy</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
