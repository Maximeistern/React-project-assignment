import { Link, Route, Routes } from "react-router-dom";
import JokePage from "../component/JokePage";
import InfoSection from "../component/InfoSection";
import { useEffect, useState } from "react";
import Hero from "../component/Hero";

function Home() {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    fetchData("https://api.chucknorris.io/jokes/random");
  }, []);

  const handleClick = () => {
    fetchData("https://api.chucknorris.io/jokes/random");
  };

  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    setJokes(data.value);
  }
  console.log(jokes);
  return (
    <div className="App">
      <Hero />
      <JokePage joke={jokes} onClicked={() => handleClick()} />
      <InfoSection />
    </div>
  );
}

export default Home;
