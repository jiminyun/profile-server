import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";
import Sidebar from "components/Side";

const BlogPresenter = () => {
  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// Blog` </h2>
        <div>Working on Gatsby Blog </div>
      </div>
      <div className="column_right">
        <Navigation />
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogPresenter;
