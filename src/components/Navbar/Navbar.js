import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU " />
          <input placeholder="Search User" />
        </div>
        <div className="navbar_right">
          <p>Hi, Name</p>
          <Link to='/' className="home">Home</Link>
          <Link to='/about' className="about">About us</Link>
          <Link to='/profile' className="profile">Profile</Link>
          <p>Dark Mode</p>
          <button>Logout</button>
        </div>
      </div>
      <hr className="navbar_line" />
    </div>
  );
}

export default Navbar;
