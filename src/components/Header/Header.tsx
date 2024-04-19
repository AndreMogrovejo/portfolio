import React from "react";

import { HeaderProps as Props } from "./Header.types";

const Header: React.FC<Props> = props => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="./logo-white.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Andre Mogrovejo</span>
          <span className="heading-primary--sub"> Lead Frontend Engineer </span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
