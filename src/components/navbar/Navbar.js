import React from "react";
import "./navbar.css";
import Droplink from "../droplink/Droplink";
import LinkLower from "./compontents/LinkLower";

function Navbar() {
  return (
    <>
      <nav className="nav-bar" id="nav-bar">
        <div className="nav-bar__elements-container">
          <div className="nav-bar__elements-container--logo">
            <h2 className="c-white">LOGO</h2>
          </div>
          <div className="nav-bar__elements-container--links">
            <LinkLower name="Link 1" linkColor={"var(--color-white)"}>
              <div className="links-container">
                <div className="links-container__main-links">
                  <div className="links-wrapper">
                    <h4>werkwijze</h4>

                    <a>Strategie</a>
                    <a>Design</a>
                    <a>Ontwikkeling & CMS</a>
                  </div>
                  <div className="links-wrapper">
                    <h4>werkwijze</h4>

                    <a>Link 2</a>
                    <a>Link 3</a>
                    <a>Link 4</a>
                  </div>
                </div>
                <div className="links-container__secondary-links">
                  <div className="content-wrapper">
                    <h2>Krijg meteen inzicht over uw project</h2>
                    <p>Nog wat tekst om meer informatie te geven</p>
                    <button className="button--primary">
                      Vraag Offerte Aan
                    </button>
                  </div>
                </div>
              </div>
            </LinkLower>
            <a>Link 2</a>
            <a>Link 3</a>
            <a>Link 4</a>
            <button className="button--secondary">Vraag Offerte Aan</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
