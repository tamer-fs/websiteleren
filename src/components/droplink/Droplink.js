import React from "react";
import "./droplink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Droplink({ name, linkColor = "var(--color-white)", children }) {
  return (
    <>
      <div className="dropdown">
        <a style={{ color: linkColor, cursor: "pointer" }}>
          {name} <FontAwesomeIcon icon={faAngleDown} />
        </a>
        <div className="dropdown__content">{children}</div>
      </div>
    </>
  );
}

export default Droplink;
