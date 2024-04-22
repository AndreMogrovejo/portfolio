import React from "react";

import { HeaderProps as Props } from "./Header.types";

const Header: React.FC<Props> = props => {
  const LinkedInIcon = (
    <svg
      className="w-7 h-7 text-gray-777 mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
        clipRule="evenodd"
      />
      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
    </svg>
  );

  return (
    <header className="header" id="header">
      <div className="header__logo-box">
        <span className="heading-primary--main text-white text-6xl tracking-normal">
          {"<AM />"}
        </span>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          {/* <span className="heading-primary--sub text-lg tracking-wider">
            Hello my name is
          </span> */}
          <span className="heading-primary--main text-6xl my-16">
            Andre Mogrovejo
          </span>
          <span className="heading-primary--sub">Frontend Engineer</span>
        </h1>

        <a
          className="btn btn--white btn--animated"
          type="button"
          href="https://www.linkedin.com/in/andre-mogrovejom/"
          target="_blank"
        >
          <div className="flex justify-center mr-auto ml-auto">
            {LinkedInIcon} Go to Linkedin
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
