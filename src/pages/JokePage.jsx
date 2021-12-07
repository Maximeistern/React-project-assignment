import React from "react";
import axios from "axios";
import Chuckie from "../component/Pictures/Chuckie.png";
import { useState, useEffect } from "react";
import "./JokePage.css";

const JokePage = () => {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    fetchData("https://api.chucknorris.io/jokes/random");
  }, []);

  const handleClick = () => {
    fetchData("https://api.chucknorris.io/jokes/random");
  };

  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      setJokes(response.data.value);
      console.log(response.data.value);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="joke-div">
      <div>
        <img src={Chuckie} alt="" />
      </div>
      <div className="joke-text">
        <h3>{jokes}</h3>
        <div>
          <button onClick={() => handleClick()} className="joke-button">
            Want to hear another one? Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokePage;
