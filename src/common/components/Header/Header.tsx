import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "../../../assets/images";
import "./_header.scss";

const Header = () => {
  return (
    <div className="header">
      <Hero />
      <div>
        <h1>Your favourite tunes</h1>
        <h2>
          All <FontAwesomeIcon icon={faSun} /> and all{" "}
          <FontAwesomeIcon icon={faMoon} />
        </h2>
      </div>
    </div>
  );
};

export default Header;
