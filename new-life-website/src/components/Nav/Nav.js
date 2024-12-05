import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <button className="nav__button" type="click">
        About
      </button>
      <button className="nav__button" type="click">
        About
      </button>
      <button className="nav__button" type="click">
        Watch & Read
      </button>
      <button className="nav__button" type="click">
        Next Steps
      </button>
      <button className="nav__button" type="click">
        Ministries
      </button>
      <button className="nav__button" type="click">
        Give
      </button>
      <button className="nav__button" type="click">
        Merch
      </button>
    </nav>
  );
}

export default Nav;
