import React from "react";
// import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import GPT3 from "../../assets/GPT-3.svg";
import "./navbar.css";

//  BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={GPT3} alt="logo" />
          <img src={GPT3} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
