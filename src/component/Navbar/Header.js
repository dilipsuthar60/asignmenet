import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="home-navbar">
      <div className="navbar">
        <NavLink to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
          <div className="menu">Dashboard</div>
        </NavLink>
        <NavLink
          to="/admin"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          <div className="menu">Admin</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
