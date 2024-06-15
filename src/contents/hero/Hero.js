import React, { useEffect } from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import chairAndCoffeeTable from "../../assets/images/1731280.webp";

function Hero() {
  return (
    <>
      <main className="hero-container">
        <div className="hero-text">
          <h1>Moderne website laten maken</h1>
          <div className="buttons-container">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right
            </p>
            <div className="buttons">
              <button className="main-btn">Offerte aanvragen</button>
              <button className="main-btn white-btn">Lees verder</button>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={chairAndCoffeeTable} />
        </div>
      </main>
    </>
  );
}

export default Hero;
