import React from "react";
import Chuck from "./Pictures/ChuckNorrisBW.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img src={Chuck} alt="One Hero" />
      </div>
      <div>
        <p>
          Mellan 1968 och 1974 var Norris obesegrad mellanviktsmästare i karate.
          Norris var den förste vite/västerländske person att få graden 8:e dan
          i taekwando. Sitt stora genombrott fick han när han spelade skurken i
          Bruce Lee-filmen Way of the Dragon (1972). Bland senare filmer kan
          nämnas Saknad i strid och Styrka Delta Force. Under 1980-talet var han
          bolaget Cannon Films största stjärna. Han är också känd för sin
          medverkan i TV-serien Walker, Texas Ranger där han spelar Cordell
          "Cord" Walker, Texas Ranger. Han har även producerat filmen med samma
          namn. Norris har skrivit flera böcker, bland annat självbiografin
          Against All Odds (2004). Han har också grundat en egen kampsportgren,
          Chun Kuk Do. Norris gör även reklam för Total Gym som är ett
          träningsverktyg som säljs av TV-Shop. Han gör också reklam för World
          Of Warcraft. Webbplatsen Rotten Tomatoes utnämnde 2011 Chuck Norris
          till ”den sämsta manliga skådespelaren genom tiderna”.
        </p>
      </div>
    </div>
  );
};

export default Hero;
