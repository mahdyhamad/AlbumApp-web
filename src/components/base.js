import React, { Component } from "react";

class Base extends Component {
  render() {
    return (
      <div className="header container">
        <a href="">
          <img
            className="logo"
            src={require("../assists/logo.png")}
            width="100"
            alt="logo"
          />
        </a>

        <a href="#profile" className="profile-link">
          <p className="profile-text mr-1">PROFILE</p>
          <img
            src={require("../assists/profile icon-01.png")}
            width="60"
            alt="logo"
            className="profile"
          />
        </a>
      </div>
    );
  }
}

export default Base;
