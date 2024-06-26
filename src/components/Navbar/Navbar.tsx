import React from "react";

import { NavbarProps as Props } from "./Navbar.types";

const Navbar: React.FC<Props> = props => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#header" className="navigation__link">
              <span>01</span> Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              <span>02</span> About Natous
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span> Popular Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span> Certificates
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
