import React from "react";
import Chuck from "../Pictures/ChuckNorrisBW.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img src={Chuck} alt="One Hero" />
      </div>
      <div>
        <p>
          Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial
          artist, actor, film producer, and screenwriter. He is a black belt in
          Tang Soo Do, Brazilian jiu jitsu and judo. After serving in the United
          States Air Force, Norris won many martial arts championships and later
          founded his own discipline Chun Kuk Do. Shortly after, in Hollywood,
          Norris trained celebrities in martial arts. Norris went on to appear
          in a minor role in the spy film The Wrecking Crew (1969). Friend and
          fellow martial artist Bruce Lee invited him to play one of the main
          villains in Way of the Dragon (1972). While Norris continued acting,
          friend and student Steve McQueen suggested him to take it seriously.
          Norris took the starring role in the action film Breaker! Breaker!
          (1977), which turned a profit. His second lead Good Guys Wear Black
          (1978) became a hit, and he soon became a popular action film star.
        </p>
      </div>
    </div>
  );
};

export default Hero;