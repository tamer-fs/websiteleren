import React from "react";
import "./navbar.css";
import Droplink from "../droplink/Droplink";

import LinkLower from "./compontents/LinkLower";
import SmallScreenLinkLower from "./compontents/SmallScreenLinkLower";
import { useState } from "react";

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    const menuButtonEl = document.getElementById("menu-button");
    const navBarEl = document.getElementById("nav-bar");
    const smallScreenMenuEl = document.getElementById("small-screen-menu");

    const navBarHeight = navBarEl.offsetHeight;
    smallScreenMenuEl.style.top = `${navBarHeight}px`;

    if (menuOpened) {
      setMenuOpened(false);
      menuButtonEl.classList.remove("menu-open");
      smallScreenMenuEl.classList.remove("small-screen-menu-open");
    } else {
      setMenuOpened(true);
      menuButtonEl.classList.add("menu-open");
      smallScreenMenuEl.classList.add("small-screen-menu-open");
    }
  };

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
          <div className="nav-bar__elements-container--links-small">
            <div onClick={(e) => toggleMenu(e)}>
              <p>menu</p>
              <svg
                id="menu-button"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="top-bar"
                  y="15"
                  width="64"
                  height="8"
                  rx="4"
                  fill="#D9D9D9"
                />
                <rect
                  id="middle-bar"
                  y="28"
                  width="44"
                  height="8"
                  rx="4"
                  fill="#D9D9D9"
                />
                <rect
                  id="bottom-bar"
                  y="41"
                  width="64"
                  height="8"
                  rx="4"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="small-screen-menu" id="small-screen-menu">
              <SmallScreenLinkLower
                name="Links"
                linkColor={"var(--color-white)"}
                fontSize={"var(--h3-fs)"}
              >
                <div className="small-links-container">
                  <div className="small-links-container__main-links">
                    <div className="small-links-wrapper">
                      <h4>werkwijze</h4>

                      <a>Strategie</a>
                      <a>Design</a>
                      <a>Ontwikkeling & CMS</a>
                    </div>
                    <div className="small-links-wrapper">
                      <h4>werkwijze</h4>

                      <a>Link 2</a>
                      <a>Link 3</a>
                      <a>Link 4</a>
                    </div>
                  </div>
                  <div className="small-links-container__secondary-links">
                    <div className="small-content-wrapper">
                      <h2>Krijg meteen inzicht over uw project</h2>
                      <p>Nog wat tekst om meer informatie te geven</p>
                      <button className="button--primary">
                        Vraag Offerte Aan
                      </button>
                    </div>
                  </div>
                </div>
              </SmallScreenLinkLower>
              <a>
                <h3>Link 2</h3>
              </a>
              <a>
                <h3>Link 3</h3>
              </a>
              <a>
                <h3>Link 4</h3>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
