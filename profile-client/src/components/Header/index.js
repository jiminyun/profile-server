import React from "react";
import "./styles.scss";

const header = () => (
  <header>
    <div className="header-container">
      <div className="photo-header">
        <img src={require("images/me.jpg")} alt="profile_image" />
      </div>
      <h1>HELLO, </h1>
      <h2>
        MY NAME IS <span>JIMIN</span>
        <sup>YUN</sup> AND FULL STACK WEB DEVELOPER
      </h2>

      <div className="line">&nbsp;</div>
    </div>
  </header>
);

export default header;
