import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
import logo from "../../images/NLC-Logo-(landscape)-01.png";

function Header() {
  return (
    <div className="header">
      <div className="header__elements">
        <img className="header__logo" src={logo} />
        <Nav />
      </div>
    </div>
  );
}

export default Header;
