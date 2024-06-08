import React, { useEffect, useState } from "react";
import "./linklower.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function LinkLower({ name, linkColor, children }) {
  const setDropSize = (e) => {
    e.preventDefault();
    const dropdownEl = document.getElementById("drop-content");
    const navbarEl = document.getElementById("nav-bar");
    dropdownEl.style.top = `${navbarEl.offsetHeight}px`;
  };

  const resetDropSize = (e) => {
    e.preventDefault();
    const dropdownEl = document.getElementById("drop-content");
  };

  return (
    <>
      <div
        className="drop"
        onMouseOver={(e) => setDropSize(e)}
        onMouseLeave={(e) => resetDropSize(e)}
      >
        <a style={{ color: linkColor, cursor: "pointer" }}>
          {name} <FontAwesomeIcon icon={faAngleDown} />
        </a>
        <div className="drop__content" id="drop-content">
          {children}
        </div>
      </div>
    </>
  );
}

export default LinkLower;
