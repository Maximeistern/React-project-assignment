import React from "react";
import Chuckie from "./Pictures/Chuckie.jpg";
import "./JokePage.css";

const JokePage = ({ joke, onClicked }) => {
  return (
    <div className="top-nav">
      <div>
        <img src={Chuckie} alt="" />
      </div>
      <div>
        <h3 className="joke-text">{joke}</h3>
        <div>
          <button onClick={onClicked} className="joke-button">
            Want to hear another one? Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokePage;
