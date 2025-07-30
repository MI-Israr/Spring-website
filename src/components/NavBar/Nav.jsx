import React from "react";
import "./Nav.css";
import NavBar from "./NavBar";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/src/assets/SPRING.svg" alt="" />
      </div>
      <NavBar />
      <div className="nav-button">
        <button>Get Start</button>
      </div>
    </nav>
  );
};

export default Nav;
