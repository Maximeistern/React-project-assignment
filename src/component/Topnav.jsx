import React from "react";
import { Link } from "react-router-dom";
import "./Topnav.css";

const Topnav = () => {
  return (
    <header>
      <nav className="top-nav">
        <div>Hejsan</div>
        <div>På</div>
        <div>dig</div>
        <div>
          <button>
            <Link to="/Login">Login</Link>
          </button>
          {/* <button className="top-nav-button">Login</button> */}
        </div>
      </nav>
    </header>
  );
};

export default Topnav;
