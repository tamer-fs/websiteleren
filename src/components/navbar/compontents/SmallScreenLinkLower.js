import React, { useEffect, useState } from "react";
import "./smallScreenLinkLower.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function SmallScreenLinkLower({
  name,
  linkColor,
  children,
  fontSize = "var(--detail-fs)",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();

    const dropEl = document.getElementById("small-drop");

    if (menuOpen) {
      dropEl.classList.remove("opened_drop");
    } else {
      dropEl.classList.add("opened_drop");
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className="small-drop"
        id="small-drop"
        onClick={(e) => toggleMenu(e)}
      >
        <a
          className="small-link"
          style={{ color: linkColor, cursor: "pointer", fontSize: fontSize }}
        >
          {name} <FontAwesomeIcon icon={faAngleDown} />
        </a>
        <div className="small-drop__content" id="small-drop-content">
          {children}
        </div>
      </div>
    </>
  );
}

export default SmallScreenLinkLower;
