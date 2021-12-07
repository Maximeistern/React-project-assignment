import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Topnav.css";
import { LoggedIn } from "../App";

const Topnav = () => {
  const { isLoggedIn } = useContext(LoggedIn);
  return (
    <header>
      <nav className="top-nav">
        <Link to="/" className="display-none">
          <div>Home</div>
        </Link>

        <Link to="/Jokes" className="display-none">
          <div className="display-none">Jokes</div>
        </Link>
        {isLoggedIn ? (
          <Link to="/Login" className="display-none">
            <div className="top-nav-button">Log out</div>
          </Link>
        ) : (
          <Link to="/Login" className="display-none">
            <div className="top-nav-button">Log in</div>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Topnav;
